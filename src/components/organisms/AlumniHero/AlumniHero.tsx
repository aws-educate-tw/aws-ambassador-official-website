'use client';

import { motion } from 'framer-motion';
import styles from './AlumniHero.module.css';

export function AlumniHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        {/* 背景裝飾光暈 */}
        <div className={styles.glowRight} aria-hidden="true" />
        <div className={styles.glowLeft} aria-hidden="true" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.title}>Alumni Stories Hub</h1>
          <div className={styles.descriptionCard}>
            為了拉近校園與業界的距離，第 8 屆校園大使特別發起 Alumni Stories Hub 企劃，邀請歷屆優秀校友回娘家，分享他們如何帶著大使期間培養的產業語感與技術底蘊，成功銜接第一份工作。
          </div>
        </motion.div>
      </div>
    </section>
  );
}
