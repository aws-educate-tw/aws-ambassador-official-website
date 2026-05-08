'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Rocket, ChevronsLeftRight, Users } from 'lucide-react';
import styles from './SideProjectSection.module.css';

const tpetSkills = ['參與敏捷開發專案', '實作 AWS 雲端原生網頁', '業界大使校友指導和內訓'];
const websiteSkills = ['實踐敏捷式軟體開發', '跨職能團隊協作', '打造現代化響應式前端網頁'];

export function SideProjectSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* 標題 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.header}
        >
          <h2 className={styles.heading}>大使 Side Project</h2>
          <p className={styles.subheading}>
            除了基本大使任務，你可以自行選擇報名參與進階專案。每個專案都會經過篩選程序，
            <br />
            錄取後將獲得更深入的實戰經驗與專業指導。
          </p>
        </motion.div>

        {/* Dev Team - 全寬深色卡片 */}
        <motion.div
          className={styles.devTeamCard}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className={styles.cardIconBox}>
            <ChevronsLeftRight size={20} className={styles.cardIcon} />
          </div>
          <div>
            <h3 className={styles.devTeamTitle}>Dev Team</h3>
            <p className={styles.devTeamDesc}>
              是一支由大使組成的開發者團隊，成員將完整參與軟體開發流程，從系統設計到前後端實作，並根據使用者回饋與需求持續優化產品，累積 AWS 服務的實戰經驗。
            </p>
          </div>
        </motion.div>

        {/* TPET + 校園大使官方網站 */}
        <motion.div
          className={styles.subProjectGrid}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {/* TPET */}
          <div className={styles.subProject}>
            <h4 className={styles.subTitle}>TPET</h4>
            <p className={styles.subDesc}>
              AWS Educate TPET (Tailored Participation and Event Tool) 是一個開源的客製化寄信系統，能夠單次寄出上千封客製化信件或是 AWS Educate 活動參與證明，同時也整合了 SurveyCake，當表單提交後能夠自動且即時地寄出客製化信件。該系統是由每屆技術大使共同開發，每年皆會根據使用者需求優化不同功能，旨在提升大使辦理活動時的寄信效率。
            </p>
            <ul className={styles.skillList}>
              {tpetSkills.map((skill) => (
                <li key={skill} className={styles.skillItem}>
                  <CheckCircle size={14} className={styles.checkIcon} />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 校園大使官方網站 */}
          <div className={styles.subProject}>
            <h4 className={styles.subTitle}>校園大使官方網站</h4>
            <p className={styles.subDesc}>
              AWS Educate 校園大使官方網站是計畫專屬的對外資訊樞紐，完整整合了大使招募資訊、歷屆校友故事以及最新活動公告。本專案由大使組成跨職能敏捷團隊（包含 PO、UI/UX 與前端工程師）共同打造，致力於實作高質感的響應式設計，提供流暢且現代化的使用者體驗，讓大眾能更直觀地認識大使計畫。
            </p>
            <ul className={styles.skillList}>
              {websiteSkills.map((skill) => (
                <li key={skill} className={styles.skillItem}>
                  <CheckCircle size={14} className={styles.checkIcon} />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* DGR Program + Alumni Stories Hub */}
        <motion.div
          className={styles.bottomGrid}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={styles.darkCard}>
            <div className={styles.cardIconBox}>
              <Rocket size={20} className={styles.cardIcon} />
            </div>
            <div>
              <h3 className={styles.darkCardTitle}>DGR Program</h3>
              <p className={styles.darkCardDesc}>
                計畫專注於商務開發實務，透過深入分析市場趨勢與潛在客戶需求，培育大使在科技產業的陌生開發與策略布局能力。
              </p>
            </div>
          </div>

          <div className={styles.darkCard}>
            <div className={styles.cardIconBox}>
              <Users size={20} className={styles.cardIcon} />
            </div>
            <div>
              <h3 className={styles.darkCardTitle}>Alumni Stories Hub</h3>
              <p className={styles.darkCardDesc}>
                Alumni Stories Hub 校友訪談企劃，希望透過訪談紀錄學長姊的職涯故事與成長歷程，分享給正在探索未來方向的同學，也把這些珍貴經驗整理成能被更多人看見與學習的內容！
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
