'use client';

import { motion } from 'framer-motion';
import styles from './MissionSection.module.css';

const missions = [
  '與跨團隊成員一同策劃執行第四屆證照陪跑計劃，舉辦各類實作工作坊、職涯講座。',
  '與跨領域、跨專業的團隊成員一同打造校園AI、雲端生態系。',
  '畢業前進行校園大使計畫的最終培訓績效總結與成果發表。',
  '協助 AWS 進行各式活動的校園推廣、接洽校內行政單位。',
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function MissionSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.header}
        >
          <h2 className={styles.heading}>雲端校園大使任務</h2>
        </motion.div>

        <motion.div
          className={styles.list}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {missions.map((mission, index) => (
            <motion.div key={index} className={styles.step} variants={item}>
              <div className={styles.number}>{index + 1}</div>
              <p className={styles.text}>{mission}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
