'use client';

import { Facebook, Instagram, Mail } from 'lucide-react';
import styles from './Footer.module.css';

export interface FooterProps {
  copyright?: string;
  brandTitle?: string;
  brandSubtext?: string;
}

export function Footer({ copyright, brandTitle, brandSubtext }: Readonly<FooterProps>) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        {/* 標題 */}
        <div>
          <h1 className={styles.mainTitle}>Contact US</h1>
        </div>
        {/* 主內容區 */}
        <div className={styles.gridContainer}>
          {/* 品牌區 */}
          <div>
            <h3 className={styles.brandTitle}>AWS Educate TW</h3>
            <p className={styles.brandSubtext}>賦能創新 · 連結未來</p>
            <p className={styles.brandSubtext}>AWS Educate</p>
            <p className={styles.brandDesc}>TW Cloud Ambassador</p>
          </div>

          {/* 快速連結 */}
          <div>
            <h4 className={styles.sectionTitle}>快速連結</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="#" className={styles.footerLink}>
                  大使計畫總覽
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  活動中心
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  校友專區
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  申請成為大使
                </a>
              </li>
            </ul>
          </div>

          {/* 聯絡我們 */}
          <div>
            <h4 className={styles.sectionTitle}>聯絡我們</h4>

            {/* Email */}
            <a href="mailto:awseducate.cloudambassador@gmail.com" className={styles.contactLink}>
              <Mail size={20} className={styles.contactIcon} />
              <span className={styles.contactLabel}>awseducate.cloudambassador@gmail.com</span>
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
            © {currentYear} {copyright || 'AWS Educate TW Campus Ambassador. All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
