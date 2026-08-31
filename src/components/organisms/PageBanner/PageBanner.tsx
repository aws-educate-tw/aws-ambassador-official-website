'use client';

import { motion } from '@/lib/motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './PageBanner.module.css';

export interface PageBannerProps {
  title: string;
  descriptions: string[];
  backgroundImages: string[];
  ctaButton?: {
    label: string;
    href: string;
  };
  slideInterval?: number;
}

export function PageBanner({
  title,
  descriptions,
  backgroundImages,
  ctaButton,
  slideInterval = 5000,
}: Readonly<PageBannerProps>) {
  const isExternal = ctaButton ? /^https?:\/\//.test(ctaButton.href) : false;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex((prev) => (prev >= backgroundImages.length ? 0 : prev));
  }, [backgroundImages.length]);

  useEffect(() => {
    if (backgroundImages.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % backgroundImages.length);
    }, slideInterval);

    return () => clearInterval(timer);
  }, [backgroundImages.length, slideInterval]);

  const nextIndex =
    backgroundImages.length > 1 ? (activeIndex + 1) % backgroundImages.length : activeIndex;

  return (
    <section className={styles.banner}>
      <div className={styles.slides} aria-hidden="true">
        {backgroundImages.map((src, index) => (
          <div
            key={src}
            className={[styles.slide, index === activeIndex && styles.slideActive]
              .filter(Boolean)
              .join(' ')}
          >
            {(index === activeIndex || index === nextIndex) && (
              <Image
                src={src}
                alt=""
                fill
                sizes="100vw"
                priority={index === 0}
                className={styles.slideImage}
              />
            )}
          </div>
        ))}
      </div>
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.content}
        >
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.descriptions}>
            {descriptions.map((desc) => (
              <p key={desc} className={styles.description}>
                {desc}
              </p>
            ))}
          </div>
          {ctaButton && (
            <a
              href={ctaButton.href}
              className={styles.ctaButton}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
            >
              {ctaButton.label}
              <svg
                className={styles.ctaIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
