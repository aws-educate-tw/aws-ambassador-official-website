'use client';

import { motion } from 'framer-motion';
import { Briefcase, Heart, Rocket, Sparkles, TrendingUp, Users } from 'lucide-react';
import styles from './BenefitList.module.css';

export interface Benefit {
  text: string;
  icon: string;
  highlight?: boolean;
}

export interface BenefitListProps {
  benefits: Benefit[];
}

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

const benefitIconMap = {
  rocket: Rocket,
  users: Users,
  briefcase: Briefcase,
  sparkles: Sparkles,
  trendingUp: TrendingUp,
  heart: Heart,
} as const;

function getBenefitIcon(icon: string) {
  return benefitIconMap[icon as keyof typeof benefitIconMap] ?? Rocket;
}

export default function BenefitList({ benefits }: BenefitListProps) {
  return (
    <section className={styles.section} id="benefits">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={styles.header}
      >
        <h2 className={styles.title}>成為大使的六大優勢</h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={styles.grid}
      >
        {benefits.map((benefit, index) => {
          const BenefitIcon = getBenefitIcon(benefit.icon);

          return (
            <motion.div key={`benefit-${index}-${benefit.text}`} variants={fadeInUp}>
              <div className={`${styles.card} ${benefit.highlight ? styles.highlight : ''}`}>
                <div className={styles.icon}>
                  <BenefitIcon size={24} strokeWidth={2.25} aria-hidden="true" />
                </div>
                <span className={styles.text}>{benefit.text}</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
