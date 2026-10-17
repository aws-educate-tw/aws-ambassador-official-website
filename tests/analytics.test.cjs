const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { test } = require('node:test');
const vm = require('node:vm');
const ts = require('typescript');

const source = ts.transpileModule(readFileSync('src/lib/analytics.ts', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText;

function setup({
  id = 'G-TEST12345',
  debug = 'false',
  storageBlocked = false,
  browser = true,
  storedConsent,
} = {}) {
  const storage = new Map();
  if (storedConsent !== undefined) {
    storage.set('aws-educate-analytics-consent-v1', storedConsent);
  }
  const storageErrors = { read: storageBlocked, write: storageBlocked };
  const cookieWrites = [];
  const window = {
    location: {
      origin: 'https://www.aws-educate.tw',
      hostname: 'www.aws-educate.tw',
      pathname: '/',
      href: 'https://www.aws-educate.tw/?email=private@example.com#secret',
    },
    localStorage: {
      getItem: (key) => {
        if (storageErrors.read) throw new Error('Storage read blocked');
        return storage.get(key) ?? null;
      },
      setItem: (key, value) => {
        if (storageErrors.write) throw new Error('Storage write blocked');
        storage.set(key, value);
      },
    },
  };
  const document = {
    referrer: 'https://search.example/private/person?email=private@example.com#secret',
    get cookie() {
      return '_ga=client-id; _ga_TEST12345=session-id; preference=keep';
    },
    set cookie(value) {
      cookieWrites.push(value);
    },
  };
  const context = {
    exports: {},
    URL,
    process: { env: { NEXT_PUBLIC_GA_ID: id, NEXT_PUBLIC_GA_DEBUG: debug } },
    ...(browser ? { window, document } : {}),
  };
  vm.runInNewContext(source, context);
  const commands = () =>
    JSON.parse(JSON.stringify((window.dataLayer ?? []).map((entry) => Array.from(entry))));
  const events = (name) =>
    commands().filter((entry) => entry[0] === 'event' && (!name || entry[1] === name));
  return {
    analytics: context.exports,
    window,
    document,
    storage,
    storageErrors,
    cookieWrites,
    commands,
    events,
  };
}

test('SSR, missing/invalid ID, and tracking before initialization are safe no-ops', () => {
  for (const options of [
    { browser: false },
    { id: '' },
    { id: 'UA-12345' },
    { id: 'G-\"<script>' },
  ]) {
    const { analytics, events } = setup(options);
    assert.equal(analytics.readAnalyticsConsent(), options.browser === false ? null : 'granted');
    analytics.applyAnalyticsConsent('granted');
    analytics.trackPageView('/');
    analytics.trackInteraction('join_us_click', 'home_hero');
    assert.deepEqual(events(), []);
  }
  const { analytics, window } = setup();
  analytics.trackPageView('/');
  analytics.trackInteraction('join_us_click', 'home_hero');
  analytics.saveAnalyticsConsent('denied');
  assert.equal(window.dataLayer, undefined);
  assert.equal(window.gtag, undefined);
  assert.equal(window['ga-disable-G-TEST12345'], true);
});

test('a new visitor is tracked by default without recording an explicit consent choice', () => {
  const { analytics, storage, events } = setup();
  analytics.applyAnalyticsConsent(analytics.readAnalyticsConsent());
  analytics.trackPageView('/');
  analytics.trackInteraction('join_us_click', 'home_hero');
  assert.equal(events('page_view').length, 1);
  assert.equal(events('join_us_click').length, 1);
  assert.equal(storage.has(analytics.ANALYTICS_CONSENT_KEY), false);
});

test('saved opt-out survives a new visit and prevents initialization and all events', () => {
  const firstVisit = setup();
  firstVisit.analytics.applyAnalyticsConsent(firstVisit.analytics.readAnalyticsConsent());
  firstVisit.analytics.saveAnalyticsConsent('denied');
  const { analytics, window, events, cookieWrites } = setup({
    storedConsent: firstVisit.storage.get(firstVisit.analytics.ANALYTICS_CONSENT_KEY),
  });
  analytics.applyAnalyticsConsent(analytics.readAnalyticsConsent());
  analytics.trackPageView('/');
  analytics.trackPageView('/program');
  analytics.trackInteraction('registration_click', 'program_banner');
  assert.equal(analytics.readAnalyticsConsent(), 'denied');
  assert.equal(window.gtag, undefined);
  assert.equal(window.dataLayer, undefined);
  assert.equal(window['ga-disable-G-TEST12345'], true);
  assert.deepEqual(events(), []);
  assert.ok(cookieWrites.some((cookie) => cookie.startsWith('_ga=; Max-Age=0;')));
});

test('default initialization queues one config and one view, navigation and back each add one view', () => {
  const { analytics, window, commands, events } = setup();
  analytics.applyAnalyticsConsent(analytics.readAnalyticsConsent());
  analytics.trackPageView('/');
  // Simulate Strict Mode and repeated route effects.
  analytics.applyAnalyticsConsent('granted');
  analytics.trackPageView('/');
  assert.equal(commands().filter((entry) => entry[0] === 'config').length, 1);
  assert.equal(commands().find((entry) => entry[0] === 'config')[2].send_page_view, false);
  assert.equal(events('page_view').length, 1);
  window.location.pathname = '/program';
  analytics.trackPageView('/program');
  analytics.trackPageView('/program/');
  window.location.pathname = '/';
  analytics.trackPageView('/');
  assert.deepEqual(
    events('page_view').map((entry) => entry[2].page_path),
    ['/', '/program', '/'],
  );
  assert.equal(events('page_view')[1][2].page_referrer, 'https://www.aws-educate.tw/');
  assert.equal(events('page_view')[2][2].page_referrer, 'https://www.aws-educate.tw/program');
});

test('config and events exclude raw URLs, personal fields and unknown routes', () => {
  const { analytics, window, commands, events } = setup();
  analytics.saveAnalyticsConsent('granted');
  analytics.trackPageView('/');
  analytics.trackInteraction('join_us_click', 'home_hero');
  assert.equal(events('page_view')[0][2].page_location, 'https://www.aws-educate.tw/');
  assert.equal(events('page_view')[0][2].page_referrer, 'https://search.example');
  assert.deepEqual(events('join_us_click')[0][2], {
    cta_location: 'home_hero',
    page_path: '/',
    send_to: 'G-TEST12345',
  });
  analytics.trackInteraction('private@example.com', 'home_hero');
  analytics.trackInteraction('join_us_click', 'private@example.com');
  window.location.pathname = '/users/private@example.com';
  analytics.trackPageView(window.location.pathname);
  analytics.trackInteraction('registration_click', 'program_banner');
  assert.equal(events().length, 2);
  assert.doesNotMatch(JSON.stringify(commands()), /private|secret|email|href|utm_/);
});

test('same-origin referrers are limited to known public paths', () => {
  for (const [referrer, expected] of [
    [
      'https://www.aws-educate.tw/program?email=private@example.com',
      'https://www.aws-educate.tw/program',
    ],
    ['https://www.aws-educate.tw/people/private', 'https://www.aws-educate.tw'],
    ['mailto:private@example.com', ''],
    ['not a URL', ''],
  ]) {
    const { analytics, document, events } = setup();
    document.referrer = referrer;
    analytics.saveAnalyticsConsent('granted');
    analytics.trackPageView('/');
    assert.equal(events('page_view')[0][2].page_referrer, expected);
  }
});

test('route context remains current for click and automatic engagement events', () => {
  const { analytics, window, commands } = setup();
  analytics.saveAnalyticsConsent('granted');
  analytics.trackPageView('/');
  window.location.pathname = '/program';
  analytics.trackPageView('/program');
  analytics.trackInteraction('registration_click', 'program_banner');
  let globalParameters = {};
  let configParameters = {};
  let clickParameters;
  for (const [command, name, parameters] of commands()) {
    if (command === 'set') globalParameters = { ...globalParameters, ...name };
    if (command === 'config') configParameters = { ...configParameters, ...parameters };
    if (command === 'event' && name === 'registration_click') {
      clickParameters = { ...globalParameters, ...configParameters, ...parameters };
    }
  }
  const automaticParameters = { ...globalParameters, ...configParameters };
  for (const parameters of [clickParameters, automaticParameters]) {
    assert.equal(parameters.page_location, 'https://www.aws-educate.tw/program');
    assert.equal(parameters.page_referrer, 'https://www.aws-educate.tw/');
  }
});

test('opting out immediately disables collection and clears GA cookies, then re-enabling works', () => {
  const { analytics, window, cookieWrites, events, commands } = setup();
  analytics.saveAnalyticsConsent('granted');
  analytics.trackPageView('/');
  analytics.saveAnalyticsConsent('denied');
  analytics.trackPageView('/program');
  analytics.trackInteraction('join_us_click', 'page_cta');
  assert.equal(events().length, 1);
  assert.equal(window['ga-disable-G-TEST12345'], true);
  assert.equal(analytics.readAnalyticsConsent(), 'denied');
  assert.ok(cookieWrites.some((cookie) => cookie.startsWith('_ga=; Max-Age=0;')));
  assert.ok(cookieWrites.some((cookie) => cookie.startsWith('_ga_TEST12345=; Max-Age=0;')));
  assert.ok(cookieWrites.every((cookie) => !cookie.startsWith('preference=')));
  analytics.saveAnalyticsConsent('granted');
  analytics.trackPageView('/');
  assert.equal(window['ga-disable-G-TEST12345'], false);
  assert.equal(events('page_view').length, 2);
  assert.equal(commands().filter((entry) => entry[0] === 'config').length, 1);
});

test('blocked storage preserves explicit in-memory choices and disables tracking on a new visit', () => {
  const { analytics, events } = setup({ storageBlocked: true });
  assert.equal(analytics.readAnalyticsConsent(), 'denied');
  analytics.applyAnalyticsConsent(analytics.readAnalyticsConsent());
  analytics.trackPageView('/');
  assert.equal(events().length, 0);
  analytics.saveAnalyticsConsent('granted');
  assert.equal(analytics.readAnalyticsConsent(), 'granted');
  analytics.trackPageView('/');
  assert.equal(events().length, 1);
  analytics.saveAnalyticsConsent('denied');
  assert.equal(analytics.readAnalyticsConsent(), 'denied');
  analytics.trackPageView('/program');
  assert.equal(events().length, 1);
  assert.equal(setup({ storageBlocked: true }).analytics.readAnalyticsConsent(), 'denied');
});

test('a default-on visit fails closed if its stored preference later becomes unreadable', () => {
  const { analytics, events, storageErrors } = setup();
  analytics.applyAnalyticsConsent(analytics.readAnalyticsConsent());
  analytics.trackPageView('/');
  storageErrors.read = true;
  analytics.applyAnalyticsConsent(analytics.readAnalyticsConsent());
  analytics.trackPageView('/program');
  assert.equal(analytics.readAnalyticsConsent(), 'denied');
  assert.equal(events().length, 1);
});

test('failed writes cannot let an old preference overwrite an explicit opt-out in this tab', () => {
  for (const storedConsent of [undefined, 'granted']) {
    const { analytics, events, storageErrors } = setup({ storedConsent });
    analytics.applyAnalyticsConsent(analytics.readAnalyticsConsent());
    analytics.trackPageView('/');
    storageErrors.write = true;
    analytics.saveAnalyticsConsent('denied');
    analytics.applyAnalyticsConsent(analytics.readAnalyticsConsent());
    analytics.trackPageView('/program');
    assert.equal(analytics.readAnalyticsConsent(), 'denied');
    assert.equal(events().length, 1);
  }
});

test('debug_mode is only sent when explicitly enabled', () => {
  for (const debug of ['true', 'false', '']) {
    const { analytics, commands, events } = setup({ debug });
    analytics.saveAnalyticsConsent('granted');
    analytics.trackPageView('/');
    analytics.trackInteraction('registration_click', 'program_banner');
    const payloads = [
      commands().find((entry) => entry[0] === 'config')[2],
      ...events().map((entry) => entry[2]),
    ];
    assert.ok(
      payloads.every((payload) =>
        debug === 'true' ? payload.debug_mode === true : !('debug_mode' in payload),
      ),
    );
  }
});
