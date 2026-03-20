'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './PageBanner.module.css';

export interface PageBannerProps {
  title: string;
  descriptions: string[];
  ctaButton?: {
    label: string;
    href: string;
  };
  images?: {
    src: string;
    alt: string;
  }[];
}

export function PageBanner({ title, descriptions, ctaButton, images }: PageBannerProps) {
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
              <p key={index} className={styles.description}>
                {desc}
              </p>
            ))}
          </div>
          {ctaButton && (
            <div className={styles.ctaWrapper}>
              <a href={ctaButton.href} className={styles.ctaButton}>
                {ctaButton.label}
              </a>
            </div>
          )}
        </motion.div>

        {/* 右側：大使照片佔位卡片 */}
        {images && images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.contentRight}
          >
            {images.map((img, index) => (
              <div key={index} className={styles.imageCard}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className={styles.image}
                />
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
