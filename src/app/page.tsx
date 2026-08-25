'use client';

import { Carousel } from '@/components/molecules/Carousel/Carousel';
import BenefitList from '@/components/molecules/BenefitList/BenefitList';
import { PillarCard } from '@/components/molecules/PillarCard/PillarCard';
import { CTASection } from '@/components/organisms/CTASection/CTASection';
import { HeroSection } from '@/components/organisms/HeroSection/HeroSection';
import { ProgramExploreSection } from '@/components/organisms/ProgramSection/ProgramSection';
import homeData from '@/content/home.json';
import { CTA_CONTENT } from '@/data/cta';
import { motion } from 'framer-motion';
import styles from './HomePage.module.css';

const leadershipPrinciples = [
  {
    title: 'Are Right, A Lot',
    subtitle: '決策正確',
    description: '領導者應具備強大的商業判斷力與直覺，尋求多元觀點並推翻自己的信念。',
    icon: 'are-right-a-lot',
  },
  {
    title: 'Customer Obsession',
    subtitle: '客戶至上',
    description: '領導者應從客戶出發，逆向工作，努力贏得並保持客戶信任。',
    icon: 'customer-obsession',
  },
  {
    title: 'Hire and Develop the Best',
    subtitle: '選賢育能',
    description: '領導者持續提高招聘和晉升標準，重視培養人才。',
    icon: 'hire-and-develop-the-best',
  },
  {
    title: 'Invent and Simplify',
    subtitle: '創新與簡化',
    description: '領導者要求團隊創新，並持續尋找簡化流程的方法。',
    icon: 'invent-and-simplify',
  },
  {
    title: 'Learn and Be Curious',
    subtitle: '學習與好奇',
    description: '領導者永不停止學習，並積極尋求提升自我。',
    icon: 'learn-and-be-curious',
  },
  {
    title: 'Ownership',
    subtitle: '主人翁精神',
    description: '領導者是主人翁，不僅僅為自己團隊工作，會為了長遠利益而主動承擔責任。',
    icon: 'ownership',
  },
  {
    title: 'Insist on the Highest Standards',
    subtitle: '堅持最高標準',
    description: '追求幾近嚴苛的高標準，持續推動團隊優質產品與服務。',
    icon: 'highest-standards',
  },
  {
    title: 'Think Big',
    subtitle: '胸懷大志',
    description: '勇於提出大局策略，激勵出突破性的成果。',
    icon: 'think-big',
  },
  {
    title: 'Bias for Action',
    subtitle: '崇尚行動',
    description: '速度對商務至關重要，許多決策可逆，不必進行過大規模的討論。',
    icon: 'bias-for-action',
  },
  {
    title: 'Frugality',
    subtitle: '勤儉節約',
    description: '力求以更少的投入獲得更多的產出，勤儉能帶來自主與創新。',
    icon: 'frugality',
  },
  {
    title: 'Earn Trust',
    subtitle: '贏得信任',
    description: '聆聽、坦誠溝通、尊重他人，並勇於自我批評。',
    icon: 'earn-trust',
  },
  {
    title: 'Dive Deep',
    subtitle: '深入洞察',
    description: '隨時深入各環節，掌握細節，審計數據與傳聞。',
    icon: 'dive-deep',
  },
  {
    title: 'Have Backbone; Disagree and Commit',
    subtitle: '堅定信念，分歧與承諾',
    description: '不為了融洽而妥協，但一旦決策定案，就要全力實現。',
    icon: 'backbone',
  },
  {
    title: 'Deliver Results',
    subtitle: '實現目標',
    description: '聚焦關鍵投入，即使困難重重也能克服並達成目標。',
    icon: 'deliver-results',
  },
  {
    title: "Strive to be Earth's Best Employer",
    subtitle: '努力成為地球上最安全的工作場所',
    description: '致力打造安全、高效、多元、公平的環境。',
    icon: 'best-employer',
  },
  {
    title: 'Success and Scale Bring Broad Responsibility',
    subtitle: '成功與規模帶來更大的責任',
    description: '對社區、地球和後代保持謙虛與責任感。',
    icon: 'broad-responsibility',
  },
] as const;
/* 首頁 */

export default function HomePage() {
  return (
    <div className={styles.page}>
      {/* HeroSection */}
      <HeroSection {...homeData.hero} statistics={homeData.statistics} />

      {/* 四大支柱 */}
      <section className={styles.pillarsSection} aria-labelledby="pillars-heading">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={styles.principlesHeader}
        >
          <p className={styles.principlesEyebrow}>At Amazon, it is still Day 1</p>
          <h2 id="pillars-heading" className={styles.principlesTitle}>
            Amazon Leadership Principles
          </h2>
          <p className={styles.principlesSubtitle}>以亞馬遜領導力準則為核心，培養未來雲端領導者</p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <Carousel
            className={styles.pillarsMarquee}
            items={leadershipPrinciples}
            duration={80}
            gap={24}
            ariaLabel="Amazon Leadership Principles 輪播"
            keyExtractor={(principle, index) => `pillar-${principle.title}-${index}`}
            renderItem={(principle, index) => (
              <PillarCard
                title={principle.title}
                subtitle={principle.subtitle}
                description={principle.description}
                imageIndex={index}
              />
            )}
          />
        </motion.div>
      </section>

      {/* 功能區 - 探索大使計畫 */}
      <ProgramExploreSection features={homeData.features} />

      <BenefitList benefits={homeData.benefits} />

      {/* CTA 區 */}
      <CTASection
        title={CTA_CONTENT.home.title}
        description={CTA_CONTENT.home.description}
        primaryCTA={CTA_CONTENT.home.primaryCTA}
      />
    </div>
  );
}
