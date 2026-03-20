'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import styles from './BenefitsSection.module.css';

const benefits = [
  '專屬 AWS 大使 On Board 禮包',
  '獲得 AWS 正職 1:1 交流機會',
  '參與 AWS 證照/技術培訓課程',
  '優先獲得 AWS 最新實習資訊',
  '參與 AWS 知名客戶與夥伴參訪機會',
  '表現優異者可取得 AWS Educate Taiwan 大使參與證書',
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
        <ul className={styles.list}>
          {benefits.map((benefit, index) => (
            <motion.li
              key={index}
              className={styles.item}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <CheckCircle className={styles.icon} size={16} />
              <span>{benefit}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
