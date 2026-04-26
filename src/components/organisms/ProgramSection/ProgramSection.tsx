'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Gift, GraduationCap, LucideIcon, Luggage } from 'lucide-react';
import styles from './ProgramSection.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

type ProgramCard = {
  id: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  tag: string;
  btn: string;
};

const cards: ProgramCard[] = [
  {
    id: 'program-overview',
    icon: Luggage,
    title: '大使計畫總覽',
    desc: '探索完整的大使成長旅程，從申請到認證，全方位培育雲端人才',
    tag: '累積 180+ 位大使',
    btn: '了解計畫詳情',
  },
  {
    id: 'events-center',
    icon: Gift,
    title: '活動中心',
    desc: '參與技術工作坊、黑客松、職涯講座，與業界專家面對面交流',
    tag: '累積 150+ 場活動',
    btn: '查看活動詳情',
  },
  {
    id: 'alumni-hub',
    icon: GraduationCap,
    title: '校友專區',
    desc: '見證大使們從校園走向職場的成功故事，加入優秀的校友網絡',
    tag: '180+ 位優秀校友',
    btn: '探索校友故事',
  },
];

export function ProgramExploreSection() {
  return (
    <section className={styles.section} id="program">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={styles.header}
      >
        <h2 className={styles.title}>探索大使計畫</h2>
        <p className={styles.subtitle}>從學習到就業，一站式雲端職涯培育平台</p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={styles.grid}
      >
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <motion.div key={card.id} variants={fadeInUp}>
              <div className={styles.card}>
                <div className={styles.iconWrapper}>
                  <Icon size={16} strokeWidth={2.25} />
                </div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.desc}</p>
                <span className={styles.tag}>{card.tag}</span>
                <button className={styles.button} type="button">
                  {card.btn}
                  <ArrowRight size={12} />
                </button>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
