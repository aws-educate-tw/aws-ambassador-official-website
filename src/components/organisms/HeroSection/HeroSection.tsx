'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import styles from './HeroSection.module.css';

export interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  statistics: Array<{
    number: string;
    label: string;
  }>;
  primaryCTA: {
    label: string;
    href: string;
  };
  secondaryCTA: {
    label: string;
    href: string;
  };
  backgroundImage?: string;
}

const CountUp = ({ end, duration = 1800 }: { end: number; duration?: number }) => {
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
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
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

export function HeroSection({
  title,
  subtitle,
  description,
  statistics,
  primaryCTA,
  secondaryCTA,
}: HeroSectionProps) {
  const stats = statistics.slice(0, 3).map((stat) => ({
    value: Number.parseInt(stat.number, 10) || 0,
    label: stat.label,
  }));

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.contentLeft}
        >
          <div className={styles.badge}>
            <span>🪄</span>
            <span>第八屆大使招募中</span>
          </div>

          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.tagline}>{subtitle}</h2>
          <p className={styles.description}>{description}</p>

          <div className={styles.actions}>
            <button className={styles.primaryBtn}>
              {primaryCTA.label}
              <ArrowRight size={20} />
            </button>
            <button className={styles.secondaryBtn}>{secondaryCTA.label}</button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.contentRight}
        >
          <div className={styles.heroImage}>
            <div className={styles.imageGradient} />
            <Users size={120} className={styles.imageIcon} />
          </div>
        </motion.div>
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
