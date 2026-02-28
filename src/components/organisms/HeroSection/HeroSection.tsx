'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import styles from './HeroSection.module.css';

export interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
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

/**
 * 數字跳動動畫組件
 * @param {number} end - 目標數字
 * @param {number} duration - 動畫持續時間 (ms)
 */
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
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // 使用 easeOutQuad 效果讓數字增加更自然
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
  primaryCTA,
  secondaryCTA,
}: HeroSectionProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* 左側內容區 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.contentLeft}
        >
          {/* 招募中徽章 */}
          <div className={styles.badge}>
            <span>🪄</span>
            <span>第八屆大使招募中</span>
          </div>

          {/* 主標題 */}
          <h1 className={styles.title}>{title}</h1>

          {/* 副標題 */}
          <h2 className={styles.tagline}>{subtitle}</h2>

          {/* 描述 */}
          <p className={styles.description}>{description}</p>

          {/* 按鈕組 */}
          <div className={styles.actions}>
            <button className={styles.primaryBtn}>
              {primaryCTA.label}
              <ArrowRight size={20} />
            </button>
            <button className={styles.secondaryBtn}>{secondaryCTA.label}</button>
          </div>
        </motion.div>

        {/* 右側視覺區 */}
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

      {/* 統計區 - 帶數字跳動 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={styles.statsSection}
      >
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              <CountUp end={168} />
            </div>
            <div className={styles.statLabel}>累積大使</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              <CountUp end={350} />
            </div>
            <div className={styles.statLabel}>年度活動</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              <CountUp end={450} />
            </div>
            <div className={styles.statLabel}>AWS 認證</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              <CountUp end={95} />%
            </div>
            <div className={styles.statLabel}>就業率</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
