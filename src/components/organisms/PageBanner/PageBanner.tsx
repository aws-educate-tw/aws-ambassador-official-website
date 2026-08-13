'use client';

import { motion } from 'framer-motion';
import styles from './PageBanner.module.css';

export interface PageBannerProps {
  title: string;
  descriptions: string[];
  ctaButton?: {
    label: string;
    href: string;
  };
}

export function PageBanner({ title, descriptions, ctaButton }: Readonly<PageBannerProps>) {
  const isExternal = ctaButton ? /^https?:\/\//.test(ctaButton.href) : false;

  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        {/* 左側：標題 + 描述卡片 + 按鈕 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.contentLeft}
        >
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.descriptionCard}>
            {descriptions.map((desc, index) => (
              <p key={desc} className={styles.description}>
                {desc}
              </p>
            ))}
          </div>
          {ctaButton && (
            <div className={styles.ctaWrapper}>
              <a
                href={ctaButton.href}
                className={styles.ctaButton}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
              >
                {ctaButton.label}
              </a>
            </div>
          )}
        </motion.div>
      </div>

      {/* 下方三個照片佔位卡片 */}
      <motion.div
        className={styles.photoRow}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {[0, 1, 2].map((i) => (
          <div key={i} className={styles.photoCard}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="128"
              height="128"
              viewBox="0 0 128 128"
              fill="none"
            >
              <path
                d="M85.3332 112V101.333C85.3332 95.6754 83.0856 90.2492 79.0848 86.2484C75.084 82.2476 69.6578 80 63.9998 80H31.9998C26.3419 80 20.9157 82.2476 16.9149 86.2484C12.9141 90.2492 10.6665 95.6754 10.6665 101.333V112"
                stroke="white"
                strokeOpacity="0.6"
                strokeWidth="10.6667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M85.3335 16.6823C89.9082 17.8682 93.9596 20.5397 96.8518 24.2773C99.744 28.0148 101.313 32.607 101.313 37.3329C101.313 42.0588 99.744 46.651 96.8518 50.3886C93.9596 54.1262 89.9082 56.7976 85.3335 57.9836"
                stroke="white"
                strokeOpacity="0.6"
                strokeWidth="10.6667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M117.333 111.999V101.333C117.33 96.6058 115.757 92.0141 112.861 88.2783C109.965 84.5425 105.91 81.8743 101.333 80.6926"
                stroke="white"
                strokeOpacity="0.6"
                strokeWidth="10.6667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M47.9998 58.6667C59.7819 58.6667 69.3332 49.1154 69.3332 37.3333C69.3332 25.5513 59.7819 16 47.9998 16C36.2178 16 26.6665 25.5513 26.6665 37.3333C26.6665 49.1154 36.2178 58.6667 47.9998 58.6667Z"
                stroke="white"
                strokeOpacity="0.6"
                strokeWidth="10.6667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
