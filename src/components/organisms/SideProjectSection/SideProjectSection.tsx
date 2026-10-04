'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ChevronsLeftRight, Rocket, Users } from 'lucide-react';
import styles from './SideProjectSection.module.css';

const tpetSkills = ['參與敏捷開發專案', '實作 AWS 雲端原生網頁', '業界大使校友指導和內訓'];
const websiteSkills = ['實踐敏捷式軟體開發', '跨職能團隊協作', '打造現代化響應式前端網頁'];
const dgrSkills = [
  'Strategic Market Insight：製作產業分析報告，精準識別產業結構性痛點',
  'Cross-functional BD Execution：統籌針對目標市場的 AI 轉型開發計畫',
  'Value Transformation：透過實戰陌生開發引發客戶數位轉型需求',
];
const alumniSkills = [
  '從大使到職涯首站：揭秘學長姊如何透過大使經歷銜接第一份工作或實習',
  '技術成長進階路徑：紀錄學長姐從雲端小白到技術大神的蛻變過程',
  '跨域學習實踐心法：打破科系邊界！了解文法商背景大使校友如何跨足科技領域',
];

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
            除核心大使任務外，大使計畫提供多元的專案供大使依意願報名參與
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
              是一支由大使組成的開發者團隊，成員將完整參與軟體開發流程，從系統設計到前後端實作，並根據使用者回饋與需求持續優化產品，累積
              AWS 服務的實戰經驗。
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
              AWS Educate TPET 是一個開源的客製化寄信系統，能夠單次寄出上千封客製化信件或是 AWS
              Educate 活動參與證明，同時也整合了
              SurveyCake，當表單提交後能夠自動且即時地寄出客製化信件。該系統是由每屆技術大使共同開發，每年皆會根據使用者需求優化不同功能，旨在提升大使辦理活動時的寄信效率。
            </p>
            <ul className={styles.skillList}>
              {tpetSkills.map((skill) => (
                <li key={skill} className={styles.skillItem}>
                  <CheckCircle size={16} className={styles.checkIcon} />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 校園大使官方網站 */}
          <div className={styles.subProject}>
            <h4 className={styles.subTitle}>大使官方網站 Official Website</h4>
            <p className={styles.subDesc}>
              AWS Educate
              校園大使官方網站是計畫專屬的對外資訊樞紐，完整整合了大使招募資訊、歷屆校友故事以及最新活動公告。本專案由大使組成跨職能敏捷團隊（包含
              PO、UI/UX
              與前端工程師）共同打造，致力於實作高質感的響應式設計，提供流暢且現代化的使用者體驗，讓大眾能更直觀地認識大使計畫。
            </p>
            <ul className={styles.skillList}>
              {websiteSkills.map((skill) => (
                <li key={skill} className={styles.skillItem}>
                  <CheckCircle size={16} className={styles.checkIcon} />
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
          <div className={`${styles.darkCard} ${styles.dgrCardArea}`}>
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
          <ul className={`${styles.skillList} ${styles.dgrSkillsArea}`}>
            {dgrSkills.map((skill) => (
              <li key={skill} className={styles.skillItem}>
                <CheckCircle size={16} className={styles.checkIcon} />
                <span>{skill}</span>
              </li>
            ))}
          </ul>

          <div className={`${styles.darkCard} ${styles.alumniCardArea}`}>
            <div className={styles.cardIconBox}>
              <Users size={20} className={styles.cardIcon} />
            </div>
            <div>
              <h3 className={styles.darkCardTitle}>Alumni Stories Hub</h3>
              <p className={styles.darkCardDesc}>
                為了拉近校園與業界的距離，第 8 屆校園大使特別發起 Alumni Stories Hub
                企劃，邀請歷屆優秀校友回娘家，分享他們如何帶著大使期間培養的能力和經驗，成功銜接第一份理想工作，甚至跨越國界躍上國際舞台。
              </p>
            </div>
          </div>
          <ul className={`${styles.skillList} ${styles.alumniSkillsArea}`}>
            {alumniSkills.map((skill) => (
              <li key={skill} className={styles.skillItem}>
                <CheckCircle size={16} className={styles.checkIcon} />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
