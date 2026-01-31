'use client';

import { Button } from '@/components/atoms/Button/Button';
import { motion } from 'framer-motion';
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

export function HeroSection({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
}: HeroSectionProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundEffects} aria-hidden="true">
        <div className={styles.effectLeft} />
        <div className={styles.effectRight} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.content}
      >
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.description}>{description}</p>

        <div className={styles.actions}>
          <Button href={primaryCTA.href} variant="primary" size="lg">
            {primaryCTA.label}
          </Button>
          <Button href={secondaryCTA.href} variant="outline" size="lg">
            {secondaryCTA.label}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
