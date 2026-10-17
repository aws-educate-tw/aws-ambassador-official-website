'use client';

import { AnalyticsConsent as AnalyticsConsentNotice } from '@/components/organisms/AnalyticsConsent/AnalyticsConsent';
import {
  ANALYTICS_CONSENT_KEY,
  AnalyticsConsent,
  applyAnalyticsConsent,
  GA_MEASUREMENT_ID,
  readAnalyticsConsent,
  saveAnalyticsConsent,
  trackPageView,
} from '@/lib/analytics';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { useEffect, useState } from 'react';

export function GoogleAnalytics() {
  const pathname = usePathname();
  const analyticsAvailable = Boolean(GA_MEASUREMENT_ID);
  const [consent, setConsent] = useState<AnalyticsConsent | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const syncConsent = () => {
      const stored = readAnalyticsConsent();
      applyAnalyticsConsent(stored);
      setConsent(stored);
      setReady(true);
    };
    syncConsent();

    const handleStorage = (event: StorageEvent) => {
      if (event.key === ANALYTICS_CONSENT_KEY || event.key === null) syncConsent();
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  useEffect(() => {
    if (consent === 'granted' && pathname) trackPageView(pathname);
  }, [consent, pathname]);

  const handleConsentChange = (value: AnalyticsConsent) => {
    saveAnalyticsConsent(value);
    setConsent(value);
  };

  return (
    <>
      {analyticsAvailable && ready && consent === 'granted' && (
        <Script
          id="google-analytics"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
      )}
      <AnalyticsConsentNotice
        analyticsAvailable={analyticsAvailable}
        consent={consent}
        onConsentChange={handleConsentChange}
      />
    </>
  );
}
