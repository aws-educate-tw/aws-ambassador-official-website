'use client';

import BenefitList from '@/components/molecules/BenefitList/BenefitList';
import { Carousel } from '@/components/molecules/Carousel/Carousel';
import { PillarCard } from '@/components/molecules/PillarCard/PillarCard';
import { CTASection } from '@/components/organisms/CTASection/CTASection';
import { HeroSection } from '@/components/organisms/HeroSection/HeroSection';
import { ProgramExploreSection } from '@/components/organisms/ProgramSection/ProgramSection';
import { TestimonialsCarousel } from '@/components/organisms/TestimonialsCarousel/TestimonialsCarousel';
import homeData from '@/content/home.json';
import { CTA_CONTENT } from '@/data/cta';
import { motion } from '@/lib/motion';
import styles from './HomePage.module.css';

const leadershipPrinciples = [
  {
    title: 'Are Right, A Lot',
    subtitle: '遠見卓識，決策精準',
    description: '面對問題時有好的判斷力，願意聽不同意見，也會用實際結果不斷檢驗自己的決定。',
    icon: 'are-right-a-lot',
  },
  {
    title: 'Customer Obsession',
    subtitle: '客戶至上',
    description: '領導者應從客戶出發，逆向工作，努力贏得並保持客戶信任。',
    icon: 'customer-obsession',
  },
  {
    title: 'Ownership',
    subtitle: '主人翁精神',
    description: '領導者是主人翁，不僅僅為自己團隊工作，會為了長遠利益而主動承擔責任。',
    icon: 'ownership',
  },
  {
    title: 'Invent and Simplify',
    subtitle: '創新與簡化',
    description: '勇於創新，持續尋找更簡單、更有效的方法。',
    icon: 'invent-and-simplify',
  },
  {
    title: 'Learn and Be Curious',
    subtitle: '學習與好奇',
    description: '持續學習，保持好奇，主動探索新知。',
    icon: 'learn-and-be-curious',
  },
  {
    title: 'Hire and Develop the Best',
    subtitle: '用人唯才，培育菁英',
    description: '不斷提升人才引進與晉升的標準，為團隊培育未來的領導者。',
    icon: 'hire-and-develop-the-best',
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
                icon={principle.icon}
                imageIndex={index}
              />
            )}
          />
        </motion.div>
      </section>

      {/* 功能區 - 探索大使計畫 */}
      <ProgramExploreSection features={homeData.features} />

      <BenefitList benefits={homeData.benefits} />

      {/* 大使心得 */}
      <TestimonialsCarousel testimonials={homeData.testimonials} />

      {/* CTA 區 */}
      <CTASection
        title={CTA_CONTENT.home.title}
        description={CTA_CONTENT.home.description}
        primaryCTA={CTA_CONTENT.home.primaryCTA}
      />
    </div>
  );
}
