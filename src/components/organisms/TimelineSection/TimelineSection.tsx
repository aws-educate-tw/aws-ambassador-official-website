'use client';

import { motion } from 'framer-motion';
import styles from './TimelineSection.module.css';

const timelineItems = [
  {
    date: '即日起 ~ 2025/9/13',
    title: '報名及履歷收件',
    note: '',
  },
  {
    date: '2025/9/19 ~ 22',
    title: '書審結果與面試通知',
    note: '(未通過者不另行通知)',
  },
  {
    date: '2025/9/26',
    title: '實體面試',
    note: '',
  },
  {
    date: '2025/9/29',
    title: '公布學生大使入選名單，錄取信寄發',
    note: '(未通過者不另行通知)',
  },
  {
    date: '2025/10/3',
    title: '第八屆雲端大使計畫開始',
    note: '',
  },
];

export function TimelineSection() {
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
          <h2 className={styles.heading}>第八屆校園大使招募時程</h2>
        </motion.div>

        <div className={styles.timeline}>
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              className={styles.item}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* 左側 dot */}
              <div className={styles.dotWrapper}>
                <div className={styles.dot}>
                  <div className={styles.dotInner} />
                </div>
              </div>

              {/* 右側深藍色卡片 */}
              <div className={`${styles.card} ${item.note ? styles.cardWithNote : ''}`}>
                <p className={styles.date}>{item.date}</p>
                <p className={styles.title}>{item.title}</p>
                {item.note && <p className={styles.note}>{item.note}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
