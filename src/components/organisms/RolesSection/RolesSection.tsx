'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './RolesSection.module.css';

const roles = [
  {
    title: 'Event Planning',
    icon: '/images/icons/Date.svg',
    description:
      '統籌規劃各類型活動，從工作坊、黑客松到職涯講座，負責活動企劃、場地協調、流程設計，讓每場活動都能順利舉辦並帶給參與者最佳體驗。',
    bonusPoints: [
      '有舉辦實體活動經驗者',
      '有社團活動或幹部經驗者（請附上幹部證明於備審資料）',
      '活潑外向，喜愛結交新朋友且樂於分享',
    ],
  },
  {
    title: 'Technical Support',
    icon: '/images/icons/Operator.svg',
    description:
      '舉辦技術工作坊，分享 AWS 雲端服務實作經驗，協助同學解決技術問題，帶領大家從零開始學習雲端技術，建立扎實的技術基礎。',
    bonusPoints: [
      '有 AWS 雲端操作實務經驗者',
      '有修習相關課程或擁有專案經驗者',
      '了解 AWS 雲端服務與產業知識',
      '具備 AWS 相關證照（請附上證明連結於申請動機）',
    ],
  },
  {
    title: 'Marketing',
    icon: '/images/icons/Lightbulb.svg',
    description:
      '負責行銷宣傳各類活動，經營社群媒體，製作吸睛的宣傳素材，讓更多人認識 AWS 與大使計畫，擴大雲端技術在校園的影響力。',
    bonusPoints: [
      '文字表達能力佳並有管理粉絲團或是社群行銷經驗',
      '有經營自媒體或社群經驗者（請附上社群/媒體連結於備審資料）',
      '熟悉任一製圖軟體者',
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function RolesSection() {
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
          <h2 className={styles.heading}>大使三大職能</h2>
          <p className={styles.subheading}>選擇最適合你的角色，發揮所長</p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {roles.map((role) => (
            <motion.div key={role.title} className={styles.card} variants={cardVariant}>
              <div className={styles.iconBox}>
                <Image src={role.icon} alt={role.title} width={24} height={24} className={styles.icon} />
              </div>
              <h3 className={styles.roleTitle}>{role.title}</h3>
              <p className={styles.roleDesc}>{role.description}</p>
              <div className={styles.bonus}>
                <p className={styles.bonusLabel}>加分條件：</p>
                <ol className={styles.bonusList}>
                  {role.bonusPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ol>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
