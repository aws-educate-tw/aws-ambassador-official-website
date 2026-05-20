'use client';

import { Button } from '@/components/atoms/Button/Button';
import { motion } from 'framer-motion';
import styles from './CTASection.module.css';

export interface CTASectionProps {
  title: string;
  description: string;
  primaryCTA: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  deadline?: string;
}

export function CTASection({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  deadline,
}: CTASectionProps) {
  return (
    <section className={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={styles.content}
      >
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>

        <div className={styles.actions}>
          <Button
            href={primaryCTA.href}
            variant="secondary"
            size="lg"
            target={/^https?:\/\//.test(primaryCTA.href) ? '_blank' : undefined}
            rel={/^https?:\/\//.test(primaryCTA.href) ? 'noopener noreferrer' : undefined}
          >
            {primaryCTA.label}
          </Button>
          {secondaryCTA && (
            <Button
              href={secondaryCTA.href}
              variant="outline"
              size="lg"
              target={/^https?:\/\//.test(secondaryCTA.href) ? '_blank' : undefined}
              rel={/^https?:\/\//.test(secondaryCTA.href) ? 'noopener noreferrer' : undefined}
            >
              {secondaryCTA.label}
            </Button>
          )}
        </div>

        {deadline && <p className={styles.deadline}>{deadline}</p>}
      </motion.div>
    </section>
  );
}
