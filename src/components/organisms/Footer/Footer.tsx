'use client';

import { Mail } from 'lucide-react';
import styles from './Footer.module.css';

export interface FooterProps {
  copyright?: string;
  links?: Array<{
    label: string;
    href: string;
  }>;
}

export function Footer({ copyright, links }: FooterProps) {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        {/* 主內容區 */}
        <div className={styles.gridContainer}>
          {/* 品牌區 */}
          <div>
            <h3 className={styles.brandTitle}>AWS Educate TW</h3>
            <p className={styles.brandSubtext}>賦能創新 · 連結未來</p>
            <p className={styles.brandDesc}>Campus Ambassador Program</p>
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

          {/* 資源 */}
          <div>
            <h4 className={styles.sectionTitle}>資源</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="#" className={styles.footerLink}>
                  AWS Educate 官網
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  學習資源
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  常見問題 FAQ
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  活動回顧
                </a>
              </li>
            </ul>
          </div>

          {/* 聯絡我們 */}
          <div>
            <h4 className={styles.sectionTitle}>聯絡我們</h4>
            <div className={styles.contactInfo}>
              <Mail size={18} className={styles.contactIcon} />
              <a href="mailto:awseducate.cloudambassador@gmail.com" className={styles.footerLink}>
                awseducate.cloudambassador@gmail.com
              </a>
            </div>
            <div className={styles.socialLinks}>
              <a
                href="https://www.facebook.com/awseducatestudentambassadortaiwan"
                className={styles.socialLink}
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/icons/Facebook.svg"
                  alt="Facebook"
                  className={styles.socialIcon}
                />
              </a>
              <a
                href="https://www.instagram.com/awseducatestdambtw/"
                className={styles.socialLink}
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/icons/Instagram.svg"
                  alt="Instagram"
                  className={styles.socialIcon}
                />
              </a>
            </div>
          </div>
        </div>

        {/* 底部法律區 */}
        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            © 2026 AWS Educate TW Campus Ambassador. All rights reserved.
          </p>
          <nav className={styles.legalLinks} aria-label="法律政策">
            {links && links.length > 0 ? (
              links.map((link) => (
                <a key={link.href} href={link.href} className={styles.legalLink}>
                  {link.label}
                </a>
              ))
            ) : (
              <>
                <a href="#" className={styles.legalLink}>
                  使用條款
                </a>
                <a href="#" className={styles.legalLink}>
                  隱私權政策
                </a>
                <a href="#" className={styles.legalLink}>
                  Cookie 設定
                </a>
              </>
            )}
          </nav>
        </div>
      </div>
    </footer>
  );
}
