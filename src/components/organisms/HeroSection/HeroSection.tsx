'use client';

import { motion } from '@/lib/motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from './HeroSection.module.css';

export interface HeroSectionProps {
  title: string;
  subtitle: string;
  tagline?: string;
  description: string;
  statistics: Array<{
    number: string;
    label: string;
  }>;
  primaryCTA: {
    label: string;
    href: string;
  };
  tertiaryCTA?: {
    label: string;
    href: string;
  };
}

const CountUp = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const easeOutQuad = (t: number) => t * (2 - t);
      const currentCount = Math.floor(easeOutQuad(percentage) * end);

      setCount(currentCount);

      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <span ref={countRef}>{count}</span>;
};

export function HeroSection(props: Readonly<HeroSectionProps>) {
  const {
    title,
    subtitle,
    tagline,
    description,
    statistics,
    primaryCTA,
    tertiaryCTA,
  } = props;

  const stats = statistics.slice(0, 3).map((stat) => ({
    value: Number.parseInt(stat.number, 10) || 0,
    label: stat.label,
  }));

  const ctas = [
    { ...primaryCTA, variant: 'primary' as const },
    ...(tertiaryCTA ? [{ ...tertiaryCTA, variant: 'dark' as const }] : []),
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>

          <h2 className={styles.subtitle}>{subtitle}</h2>

          <p className={styles.tagline}>{tagline ?? '賦能 · 創新 · 連結'}</p>
          <p className={styles.description}>{description}</p>

          <div className={styles.actions}>
            {ctas.map((cta) => {
              const isExternal = /^https?:\/\//.test(cta.href);
              return (
                <Link
                  key={`${cta.label}-${cta.href}`}
                  href={cta.href}
                  className={`${styles.ctaButton} ${cta.variant === 'dark' ? styles.ctaDark : styles.ctaPrimary}`}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                >
                  <span>{cta.label}</span>
                  {cta.variant === 'primary' && <ArrowRight size={12} aria-hidden="true" />}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={styles.statsSection}
      >
        <div className={styles.statsGrid}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.statCard}>
              <div className={styles.statNumber} aria-label={`統計數字: ${stat.value}+`}>
                <CountUp end={stat.value} />+
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
