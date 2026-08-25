'use client';

import { ArrowUp, Facebook, Instagram, Mail } from 'lucide-react';
import Link from 'next/link';
import styles from './Footer.module.css';

export interface FooterProps {
  copyright?: string;
  brandTitle?: string;
  brandSubtexts?: string[];
  brandDesc?: string;
}

export function Footer({ copyright, brandTitle, brandSubtexts, brandDesc }: Readonly<FooterProps>) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        {/* 標題 */}
        <div>
          <h1 className={styles.mainTitle}>Contact us</h1>
        </div>
        {/* 主內容區 */}
        <div className={styles.gridContainer}>
          {/* 品牌區 */}
          <div>
            {brandTitle && <h3 className={styles.brandTitle}>{brandTitle}</h3>}
            {brandSubtexts?.map((text, idx) => (
              <p key={idx} className={styles.brandSubtext}>
                {text}
              </p>
            ))}
            {brandDesc && <p className={styles.brandDesc}>{brandDesc}</p>}
          </div>

          {/* 快速連結 */}
          <div>
            <h4 className={styles.sectionTitle}>快速連結</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/" className={styles.footerLink}>
                  首頁
                </Link>
              </li>
              <li>
                <Link href="/program" className={styles.footerLink}>
                  大使計畫總覽
                </Link>
              </li>
              <li>
                <Link href="/events" className={styles.footerLink}>
                  活動中心
                </Link>
              </li>
              <li>
                <Link href="/alumni" className={styles.footerLink}>
                  校友專區
                </Link>
              </li>
            </ul>
          </div>

          {/* 聯絡我們 */}
          <div>
            <h4 className={styles.sectionTitle}>聯絡我們</h4>

            {/* Email */}
            <a href="mailto:awseducate.cloudambassador@gmail.com" className={styles.contactLink}>
              <Mail size={20} className={styles.contactIcon} />
              <span className={styles.contactLabel}>
                awseducate.cloudambassador<wbr />@gmail.com
              </span>
            </a>

            {/* 社群媒體列表 */}
            <div className={styles.socialLinks}>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/awseducatestdambtw/"
                className={styles.contactLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} className={styles.contactIcon} />
                <span className={styles.contactLabel}>@ awseducatestdambtw</span>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/awseducatestudentambassadortaiwan"
                className={styles.contactLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} className={styles.contactIcon} />
                <span className={styles.contactLabel}>@ awseducatestdambtw</span>
              </a>
            </div>
          </div>
        </div>

        {/* 底部法律區 */}
        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            © {currentYear}{' '}
            {copyright ||
              'AWS Educate Taiwan Cloud Ambassador. Operated by 學生組織、大使團隊，自主營運'}
          </p>
        </div>

        <div className={styles.backToTopWrapper}>
          <button type="button" className={styles.backToTopButton} onClick={scrollToTop}>
            <span className={styles.backToTopLabel}>Back To Top</span>
            <ArrowUp size={20} className={styles.backToTopIcon} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
