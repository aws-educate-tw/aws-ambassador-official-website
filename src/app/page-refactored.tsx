'use client';

import { FeatureCard } from '@/components/molecules/FeatureCard/FeatureCard';
import { PillarCard } from '@/components/molecules/PillarCard/PillarCard';
import { StatCard } from '@/components/molecules/StatCard/StatCard';
import { CTASection } from '@/components/organisms/CTASection/CTASection';
import { Footer } from '@/components/organisms/Footer/Footer';
import { HeroSection } from '@/components/organisms/HeroSection/HeroSection';
import { Navigation } from '@/components/organisms/Navigation/Navigation';
import { TestimonialsCarousel } from '@/components/organisms/TestimonialsCarousel/TestimonialsCarousel';
import { contentRepository } from '@/lib/repositories/contentRepository';
import { motion } from 'framer-motion';
import { use } from 'react';
import styles from './HomePage.module.css';

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

/**
 * 首頁 - 完全重構版本
 * - 所有重複區塊已抽象為可重用元件
 * - 完全移除 inline styles，使用 CSS Modules
 * - 所有內容從 JSON 驅動，易於維護與串接後端
 */
export default function HomePage() {
  // 使用 Repository 模式取得資料（未來可替換為 API）
  const homeData = use(contentRepository.getHomePageData());
  const navData = use(contentRepository.getNavigationData());
  const footerData = use(contentRepository.getFooterData());

  return (
    <div className={styles.page}>
      {/* 導航欄 */}
      <Navigation {...navData} />

      {/* 英雄區 */}
      <HeroSection {...homeData.hero} />

      {/* 統計區 */}
      <section className={styles.statsSection} aria-labelledby="stats-heading">
        <h2 id="stats-heading" className="sr-only">
          統計數據
        </h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.statsGrid}
        >
          {homeData.statistics.map((stat, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <StatCard {...stat} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 功能區 */}
      <section className={styles.featuresSection} aria-labelledby="features-heading">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={styles.sectionHeader}
        >
          <h2 id="features-heading" className={styles.sectionTitle}>
            主要資訊
          </h2>
          <p className={styles.sectionSubtitle}>探索大使計畫的各個方面</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.featuresGrid}
        >
          {homeData.features.map((feature) => (
            <motion.div key={feature.id} variants={fadeInUp}>
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 四大支柱 */}
      <section className={styles.pillarsSection} aria-labelledby="pillars-heading">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={styles.sectionHeader}
        >
          <h2 id="pillars-heading" className={styles.sectionTitle}>
            四大支柱
          </h2>
          <p className={styles.sectionSubtitle}>成為大使的核心價值</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.pillarsGrid}
        >
          {homeData.pillars.map((pillar, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <PillarCard {...pillar} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 推薦輪播 */}
      <TestimonialsCarousel
        title="成功故事"
        subtitle="聆聽我們的大使怎麼說"
        testimonials={homeData.testimonials}
      />

      {/* CTA 區 */}
      <CTASection
        title={homeData.cta_section.title}
        description={homeData.cta_section.description}
        primaryCTA={homeData.cta_section.primary_cta}
        secondaryCTA={homeData.cta_section.secondary_cta}
        deadline={homeData.cta_section.deadline}
      />

      {/* 頁尾 */}
      <Footer {...footerData} />
    </div>
  );
}
