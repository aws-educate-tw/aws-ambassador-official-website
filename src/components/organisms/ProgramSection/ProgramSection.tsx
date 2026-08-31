'use client';

import { FeatureCard } from '@/components/molecules/FeatureCard/FeatureCard';
import type { FeatureCard as FeatureItem } from '@/types';
import { motion } from '@/lib/motion';
import styles from './ProgramSection.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export interface ProgramExploreSectionProps {
  features: FeatureItem[];
  title?: string;
  subtitle?: string;
}

const PROGRAM_FEATURE_IDS = ['overview', 'alumni'] as const;

export function ProgramExploreSection({
  features,
  title = '探索大使計畫',
  subtitle = '從學習到就業，一站式雲端職涯培育平台',
}: ProgramExploreSectionProps) {
  const sectionFeatures = PROGRAM_FEATURE_IDS.map((featureId) =>
    features.find((feature) => feature.id === featureId),
  ).filter((feature): feature is FeatureItem => Boolean(feature));

  return (
    <section className={styles.section} id="program">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={styles.header}
      >
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={styles.grid}
      >
        {sectionFeatures.map((feature) => (
          <motion.div key={feature.id} variants={fadeInUp}>
            <FeatureCard
              id={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              tag={feature.tag}
              cta={feature.cta}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
