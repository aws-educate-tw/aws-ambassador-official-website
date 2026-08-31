'use client';

import { motion } from '@/lib/motion';
import { Rocket } from 'lucide-react';
import styles from './BenefitsSection.module.css';

const benefits = [
  'AWS 考照資源',
  'AWS 正職 1:1 交流機會',
  '免費參與 AWS 培訓工作坊',
  '優先參與 AWS 知名客戶參訪',
  '優良大使還能解鎖實習機會、履歷健檢',
  '任期結束之後可以獲得 AWS 大使參與證書',
  '學習 AWS 企業文化、了解科技業工作模式',
  '優先參加各類型 AWS 舉辦或協辦的活動',
  '獨立舉辦近百人活動，培養領導決策能力',
];

export function BenefitsSection() {
  return (
    <section className={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={styles.container}
      >
        <h2 className={styles.heading}>加入雲端校園大使，你可以獲得：</h2>
        <ul className={styles.grid}>
          {benefits.map((benefit, index) => (
            <motion.li
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <span className={styles.iconWrapper}>
                <Rocket size={16} aria-hidden="true" />
              </span>
              <span className={styles.text}>{benefit}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
