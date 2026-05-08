'use client';

import { motion } from 'framer-motion';
import { Rocket, ChevronsLeftRight, Lightbulb, Users, Target } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import styles from './SkillsSection.module.css';

const skills: { title: string; description: string; Icon: LucideIcon }[] = [
  {
    title: '跨部門實務協作',
    description: '實際參與 AWS Educate 專案以及跨部門的合作經驗',
    Icon: Rocket,
  },
  {
    title: '多元與跨領域實踐',
    description: '如：數位行銷、雲端技術、技術教學',
    Icon: ChevronsLeftRight,
  },
  {
    title: 'AWS 文化與產業洞察',
    description: '熟悉學習 AWS 企業文化，以及了解科技業工作模式',
    Icon: Users,
  },
  {
    title: '專屬活動優先參與權',
    description: '優先參加各類型 AWS 舉辦及協辦的活動、講座及研討會',
    Icon: Target,
  },
  {
    title: '領導力與公眾影響力',
    description: '獨立舉辦近百人活動，培養領導決策能力以及公開演說技巧',
    Icon: Lightbulb,
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function SkillsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.header}
        >
          <h2 className={styles.heading}>在六個月的雲端之旅，你可以學到：</h2>
          <p className={styles.subheading}>你將能學到的技能</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.grid}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={item} className={styles.card}>
              <div className={styles.iconBox}>
                <skill.Icon size={16} className={styles.icon} />
              </div>
              <p className={styles.cardTitle}>{skill.title}</p>
              <p className={styles.cardDesc}>{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
