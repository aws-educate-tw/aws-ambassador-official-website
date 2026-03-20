'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './QualificationsSection.module.css';

const allQualifications = [
  {
    text: '國內公私立大專院校之在校學生，不限科系、背景、年級\n（至少在未來半年保有學生資格，且任職期間於台灣就讀）',
    wide: true,
  },
  { text: '有責任感且細心，願意投入每周 4-5 小時完成雲端大使之任務' },
  { text: '對雲端產業有興趣，想更深入認識雲端科技' },
  { text: '對辦活動有熱忱，從發想到執行到優化，有獨當一面的領導力' },
  { text: '有一顆好奇的心，喜歡嘗試不同的事物，樂於接受挑戰' },
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
          報名資格
        </motion.h2>

        {/* 置中的基本資格卡 */}
        <motion.div
          className={styles.topRow}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className={styles.card}>
            {/* <Image src="/images/icons/Rocket.svg" alt="" width={18} height={18} className={styles.icon} /> */}
            {/* <span>{allQualifications[0].text}</span> */}
            <p className="whitespace-pre-line">{allQualifications[0].text}</p>
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
          {allQualifications.slice(1).map((q, index) => (
            <div key={index} className={styles.card}>
              <Image src="/images/icons/Rocket.svg" alt="" width={18} height={18} className={styles.icon} />
              <span>{q.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
