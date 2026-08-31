'use client';

import { motion } from '@/lib/motion';
import styles from './TimelineSection.module.css';

interface TimelineItem {
  date: string;
  title: string;
}

const timelineItems: TimelineItem[] = [
  { date: '2026/08/14 ~ 2026/09/11', title: '報名及履歷收件' },
  { date: '2026/09/14 ~ 2026/09/16', title: '面試通知' },
  { date: '2026/09/20', title: '實體面試' },
  { date: '2026/09/23', title: '公布入選名單，錄取信寄發' },
  { date: '2026/10/01', title: '第九屆大使計畫開始' },
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
          <h2 className={styles.heading}>第九屆校園大使招募時程</h2>
        </motion.div>

        <div className={styles.timeline}>
          {timelineItems.map((item, index) => (
            <div key={item.title} className={styles.item}>
              {/* Static track: rendered immediately (not staggered) so the
                  connecting line always reads as one continuous line instead
                  of appearing to assemble from separate animated segments. */}
              <div className={styles.stepCol}>
                <span
                  className={`${styles.stepConnector} ${index === 0 ? styles.stepConnectorHidden : ''}`}
                  aria-hidden="true"
                />
                <span className={styles.stepCircle}>{index + 1}</span>
                <span
                  className={`${styles.stepConnector} ${index === timelineItems.length - 1 ? styles.stepConnectorHidden : ''}`}
                  aria-hidden="true"
                />
              </div>

              <motion.div
                className={styles.content}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className={styles.date}>{item.date}</p>
                <p className={styles.title}>{item.title}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
