'use client';

import { Button } from '@/components/atoms/Button/Button';
import { motion } from '@/lib/motion';
import { ArrowRight } from 'lucide-react';
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
}

export function CTASection({
  title,
  description,
  primaryCTA,
  secondaryCTA,
}: Readonly<CTASectionProps>) {
  const primaryIsExternal = /^https?:\/\//.test(primaryCTA.href);
  const secondaryIsExternal = secondaryCTA ? /^https?:\/\//.test(secondaryCTA.href) : false;

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
            variant="gradient"
            size="xl"
            target={primaryIsExternal ? '_blank' : undefined}
            rel={primaryIsExternal ? 'noopener noreferrer' : undefined}
          >
            {primaryCTA.label}
            <ArrowRight size={16} aria-hidden="true" />
          </Button>
          {secondaryCTA && (
            <Button
              href={secondaryCTA.href}
              variant="outline"
              size="lg"
              target={secondaryIsExternal ? '_blank' : undefined}
              rel={secondaryIsExternal ? 'noopener noreferrer' : undefined}
            >
              {secondaryCTA.label}
            </Button>
          )}
        </div>
      </motion.div>
    </section>
  );
}
