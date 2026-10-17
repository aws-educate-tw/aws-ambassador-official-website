export type AnalyticsConsent = 'granted' | 'denied';
export type AnalyticsEvent = 'join_us_click' | 'registration_click';
export type AnalyticsPlacement = 'home_hero' | 'program_banner' | 'page_cta';

type GtagArguments =
  | ['js', Date]
  | ['consent', 'default' | 'update', Record<string, string>]
  | ['config', string, Record<string, unknown>]
  | ['set', Record<string, unknown>]
  | ['event', string, Record<string, unknown>];

declare global {
  interface Window {
    dataLayer?: IArguments[];
    gtag?: (...args: GtagArguments) => void;
    [key: `ga-disable-${string}`]: boolean;
  }
}

export const ANALYTICS_CONSENT_KEY = 'aws-educate-analytics-consent-v1';
const configuredId = process.env.NEXT_PUBLIC_GA_ID?.trim() ?? '';
export const GA_MEASUREMENT_ID = /^G-[A-Z0-9]+$/.test(configuredId) ? configuredId : '';
const debugMode = process.env.NEXT_PUBLIC_GA_DEBUG === 'true';
const pagePaths = new Set(['/', '/program', '/events', '/alumni']);
const events = new Set<AnalyticsEvent>(['join_us_click', 'registration_click']);
const placements = new Set<AnalyticsPlacement>(['home_hero', 'program_banner', 'page_cta']);

let consent: AnalyticsConsent | null = null;
let knownPreference: AnalyticsConsent | null = null;
let unsavedPreference: AnalyticsConsent | null = null;
let initialized = false;
let lastPageLocation: string | null = null;

// Only known public routes are measured. Never send arbitrary paths, queries or fragments.
export function getAnalyticsPagePath(pathname: string): string | null {
  const path = pathname === '/' ? pathname : pathname.replace(/\/$/, '');
  return pagePaths.has(path) ? path : null;
}

export function readAnalyticsConsent(): AnalyticsConsent | null {
  if (typeof window === 'undefined') return null;
  // A failed write must not let an older stored value override this tab's explicit choice.
  if (unsavedPreference !== null) return unsavedPreference;
  try {
    const stored = window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
    knownPreference = stored === 'granted' || stored === 'denied' ? stored : null;
    // An absent preference enables analytics. Do not persist this default as user consent.
    return knownPreference ?? 'granted';
  } catch {
    // An unreadable preference may contain an opt-out. Never treat the default as a choice.
    return knownPreference ?? 'denied';
  }
}

function cleanReferrer(referrer: string): string {
  if (!referrer) return '';
  try {
    const url = new URL(referrer);
    if (url.protocol !== 'https:' && url.protocol !== 'http:') return '';
    if (url.origin === window.location.origin) {
      const path = getAnalyticsPagePath(url.pathname);
      return path ? `${url.origin}${path}` : url.origin;
    }
    // Referring domains support acquisition reports without sharing third-party paths.
    return url.origin;
  } catch {
    return '';
  }
}

function pageContext(path: string, referrer: string) {
  return {
    page_path: path,
    page_location: `${window.location.origin}${path}`,
    page_title: 'AWS Educate Taiwan',
    page_referrer: referrer,
  };
}

function clearAnalyticsCookies() {
  const names = document.cookie
    .split(';')
    .map((cookie) => cookie.trim().split('=')[0])
    .filter((name) => name === '_ga' || name.startsWith('_ga_'));
  const parts = window.location.hostname.split('.');
  for (const name of names) {
    const expired = `${name}=; Max-Age=0; path=/`;
    document.cookie = expired;
    for (let i = 0; i < parts.length - 1; i += 1) {
      document.cookie = `${expired}; domain=${parts.slice(i).join('.')}`;
      document.cookie = `${expired}; domain=.${parts.slice(i).join('.')}`;
    }
  }
}

/** Apply the effective analytics preference before loading the tag or sending events. */
export function applyAnalyticsConsent(nextConsent: AnalyticsConsent | null) {
  consent = nextConsent;
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return;

  window[`ga-disable-${GA_MEASUREMENT_ID}`] = nextConsent !== 'granted';
  if (nextConsent !== 'granted') {
    lastPageLocation = null;
    if (initialized) {
      window.gtag?.('consent', 'update', { analytics_storage: 'denied' });
    }
    clearAnalyticsCookies();
    return;
  }

  if (initialized) {
    window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function (..._args: GtagArguments) {
    // gtag.js consumes the standard arguments-object queue, including before it loads.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  window.gtag('consent', 'update', { analytics_storage: 'granted' });
  window.gtag('js', new Date());
  // Keep page context in the global scope so subsequent route updates replace it.
  // Config-scoped values would override later `set` commands on click/engagement events.
  window.gtag(
    'set',
    pageContext(
      getAnalyticsPagePath(window.location.pathname) ?? '/404',
      cleanReferrer(document.referrer),
    ),
  );
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    ...(debugMode ? { debug_mode: true } : {}),
  });
  initialized = true;
}

export function saveAnalyticsConsent(nextConsent: AnalyticsConsent) {
  // Storage can be unavailable in private browsing. The choice still applies in this tab.
  knownPreference = nextConsent;
  unsavedPreference = nextConsent;
  applyAnalyticsConsent(nextConsent);
  try {
    window.localStorage.setItem(ANALYTICS_CONSENT_KEY, nextConsent);
    unsavedPreference = null;
  } catch {
    // The choice still applies in this tab. Unreadable storage on a new visit disables analytics.
  }
}

export function trackPageView(pathname: string) {
  if (typeof window === 'undefined' || !initialized || consent !== 'granted') return;
  const path = getAnalyticsPagePath(pathname);
  if (!path) {
    lastPageLocation = null;
    return;
  }
  const location = `${window.location.origin}${path}`;
  // Covers React Strict Mode, effect re-runs and same-page query/hash changes.
  if (lastPageLocation === location) return;
  const context = pageContext(path, lastPageLocation ?? cleanReferrer(document.referrer));
  window.gtag?.('set', context);
  window.gtag?.('event', 'page_view', {
    ...context,
    send_to: GA_MEASUREMENT_ID,
    ...(debugMode ? { debug_mode: true } : {}),
  });
  lastPageLocation = location;
}

export function trackInteraction(eventName: AnalyticsEvent, placement: AnalyticsPlacement) {
  if (typeof window === 'undefined' || !initialized || consent !== 'granted') return;
  if (!events.has(eventName) || !placements.has(placement)) return;
  const path = getAnalyticsPagePath(window.location.pathname);
  if (!path) return;
  trackPageView(path);
  window.gtag?.('event', eventName, {
    cta_location: placement,
    page_path: path,
    send_to: GA_MEASUREMENT_ID,
    ...(debugMode ? { debug_mode: true } : {}),
  });
}
