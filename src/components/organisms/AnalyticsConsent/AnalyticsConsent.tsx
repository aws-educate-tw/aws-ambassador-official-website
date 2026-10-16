'use client';

import { useEffect, useId, useRef, useState } from 'react';
import styles from './AnalyticsConsent.module.css';

export interface AnalyticsConsentProps {
  analyticsAvailable: boolean;
  consent: 'granted' | 'denied' | null;
  onConsentChange: (consent: 'granted' | 'denied') => void;
}

export function AnalyticsConsent({
  analyticsAvailable,
  consent,
  onConsentChange,
}: Readonly<AnalyticsConsentProps>) {
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const panelRef = useRef<HTMLElement>(null);
  const preferencesButtonRef = useRef<HTMLButtonElement>(null);
  const shouldReturnFocus = useRef(false);
  const panelId = useId();
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    if (isPreferencesOpen) {
      panelRef.current?.focus();
    } else if (shouldReturnFocus.current) {
      preferencesButtonRef.current?.focus();
      shouldReturnFocus.current = false;
    }
  }, [isPreferencesOpen]);

  const closePreferences = () => {
    shouldReturnFocus.current = true;
    setIsPreferencesOpen(false);
  };

  return (
    <div className={styles.container}>
      <button
        ref={preferencesButtonRef}
        type="button"
        className={styles.preferencesButton}
        aria-expanded={isPreferencesOpen}
        aria-controls={isPreferencesOpen ? panelId : undefined}
        onClick={() => setIsPreferencesOpen(true)}
      >
        Cookie settings
      </button>

      {isPreferencesOpen ? (
        <section
          ref={panelRef}
          id={panelId}
          className={styles.panel}
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
          tabIndex={-1}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              closePreferences();
            }
          }}
        >
          <h2 id={titleId} className={styles.title}>
            Cookie settings
          </h2>

          <p id={descriptionId} className={styles.description}>
            {analyticsAvailable
              ? '我們使用 Google Analytics 與分析 Cookie，統計頁面瀏覽及申請按鈕點擊。網站分析預設開啟，你可以隨時關閉；關閉後停止後續收集，已送出的資料不會因此刪除。'
              : '此網站目前未啟用網站分析。'}
          </p>

          <a
            className={styles.privacyLink}
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google 資料使用說明（另開新分頁）
          </a>

          <label className={styles.setting}>
            <span>允許網站分析</span>
            <input
              className={styles.checkbox}
              type="checkbox"
              checked={analyticsAvailable && consent === 'granted'}
              disabled={!analyticsAvailable || consent === null}
              onChange={(event) => onConsentChange(event.target.checked ? 'granted' : 'denied')}
            />
          </label>

          <div className={styles.actions}>
            <button type="button" className={styles.doneButton} onClick={closePreferences}>
              完成
            </button>
          </div>
        </section>
      ) : null}
    </div>
  );
}
