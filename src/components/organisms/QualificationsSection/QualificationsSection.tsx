'use client';

import { motion } from '@/lib/motion';
import { Rocket } from 'lucide-react';
import styles from './QualificationsSection.module.css';

const baseQualification =
  '國內公私立大專院校之在校學生，不限科系、背景、年級\n（至少在未來半年保有學生資格，且任職期間於台灣就讀）';

const gridQualifications = [
  '想拓展更多科技雲端產業人脈，提升職涯競爭力',
  '對雲端產業有興趣，想更深入認識雲端科技',
  '對辦活動有熱忱，從發想到執行到優化，有獨當一面的領導力',
  '有一顆好奇的心，喜歡嘗試不同的事物，樂於接受挑戰',
];

export function QualificationsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          大使計劃報名資格
        </motion.h2>

        <div className={styles.list}>
          {/* 置中的基本資格卡 */}
          <motion.div
            className={styles.topRow}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className={styles.card}>
              <p className="whitespace-pre-line">{baseQualification}</p>
            </div>
          </motion.div>

          {/* 2x2 grid */}
          <motion.div
            className={styles.grid}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {gridQualifications.map((text, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.iconBox}>
                  <Rocket size={18} className={styles.icon} />
                </div>
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
