'use client';

import { motion } from 'framer-motion';
import styles from './MissionSection.module.css';

const missions = [
  '與來自不同校系的團隊成員一同策畫、執行【 AWS Educate 第三屆證照陪跑計畫 】，舉辦各類實作工作坊、技術/職涯講座。',
  '在校園內至少協助一場與 AWS 技術/證照/教育平台相關的推廣活動，協助接洽校內行政單位、教師、學生，推廣 AWS 學習資源。',
  '在校園內推廣 2026 AWS 黑客松，分享雲端知識、報名資訊，提高黑客松知名度。',
  '畢業前進行校園大使計畫的最終培訓績效總結與成果發表。',
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
          <p className={styles.subheading}>擔任大使期間需完成的任務</p>
        </motion.div>

        <motion.div
          className={styles.list}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {missions.map((mission, index) => (
            <motion.div key={index} className={styles.card} variants={item}>
              <div className={styles.number}>{index + 1}</div>
              <p className={styles.text}>{mission}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
