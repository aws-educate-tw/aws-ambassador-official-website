'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from './AlumniHero.module.css';

const journeySteps = [
  {
    title: '校園裡的第一步',
    description: '在大使任期中接觸真實專案、雲端技術與跨校團隊協作。',
  },
  {
    title: '銜接理想工作',
    description: '把大使期間累積的作品與人脈，轉換成第一份正式職涯。',
  },
  {
    title: '躍上國際舞台',
    description: '從台灣出發，帶著同一套技術底蘊走向海外團隊與市場。',
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const stepVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function AlumniHero() {
  const [dotPlaying, setDotPlaying] = useState(false);

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <motion.div
          className={styles.introBlock}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.titleGroup}>
            <p className={styles.eyebrow}>FROM CAMPUS TO THE WORLD</p>
            <h1 className={styles.title}>Alumni Stories Hub</h1>
          </div>
          <div className={styles.descriptionCard}>
            為了拉近校園與業界的距離，第 8 屆校園大使特別發起 Alumni Stories Hub
            企劃，邀請歷屆優秀校友回娘家，分享他們如何帶著大使期間培養的產業語感與技術底蘊，成功銜接第一份工作。
          </div>
        </motion.div>

        <motion.div
          className={styles.journey}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onViewportEnter={() => setDotPlaying(true)}
        >
          {journeySteps.map((step, index) => (
            <motion.div className={styles.journeyStep} variants={stepVariant} key={step.title}>
              <div className={styles.stepNumber}>{String(index + 1).padStart(2, '0')}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </motion.div>
          ))}

          <div
            className={`${styles.activeDot} ${dotPlaying ? styles.activeDotPlay : ''}`}
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </section>
  );
}
