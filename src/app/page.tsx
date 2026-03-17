'use client';

import { PillarCard } from '@/components/molecules/PillarCard/PillarCard';
import { CTASection } from '@/components/organisms/CTASection/CTASection';
import { HeroSection } from '@/components/organisms/HeroSection/HeroSection';
import { Navigation } from '@/components/organisms/Navigation/Navigation';
import { TestimonialsCarousel } from '@/components/organisms/TestimonialsCarousel/TestimonialsCarousel';
import homeData from '@/content/home.json';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, GraduationCap, Trophy, Users } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
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

const navigationData = {
  logo: { text: 'AWS', subtitle: 'Educate Ambassador' },
  items: [
    { label: '首頁', href: '/' },
    { label: '大使計畫總覽', href: '#program' },
    { label: '活動中心', href: '#events' },
    { label: '校友專區', href: '#alumni' },
    { label: '聯絡我們', href: '#contact' },
  ],
  ctaLabel: '立即申請',
  ctaHref: '/apply',
};

export default function HomePage() {
  return (
    <div className={styles.page}>
      {/* Navigation */}
      <Navigation {...navigationData} />

      {/* HeroSection */}
      <HeroSection {...homeData.hero} />

      {/* 功能區 - 探索大使計畫 */}
      <section className={styles.programExploreSection}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={styles.sectionHeader}
        >
          <h2 className={styles.sectionTitle}>探索大使計畫</h2>
          <p className={styles.sectionSubtitle}>從學習到就業，一站式雲端職涯培育平台</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.programGrid}
        >
          {[
            {
              id: 'program-overview',
              icon: <Trophy />,
              title: '大使計畫總覽',
              desc: '探索完整的大使成長旅程，從申請到認證，全方位培育雲端人才',
              tag: '7屆累積 168+ 位大使',
              btn: '了解計畫詳情',
            },
            {
              id: 'events-center',
              icon: <Calendar />,
              title: '活動中心',
              desc: '參與技術工作坊、黑客松、職涯講座，與業界專家面對面交流',
              tag: '年度 50+ 場活動',
              btn: '查看活動日曆',
            },
            {
              id: 'alumni-hub',
              icon: <GraduationCap />,
              title: '校友專區',
              desc: '見證大使們從校園走向職場的成功故事，加入優秀的校友網絡',
              tag: '快加入我們',
              btn: '探索校友故事',
            },
            {
              id: 'contact-us',
              icon: <Users />,
              title: '聯絡我們',
              desc: '有任何問題？加入我們的社群，或直接聯繫大使團隊',
              tag: '加入我們社群',
              btn: '立即聯繫',
            },
          ].map((card) => (
            <motion.div key={card.id} variants={fadeInUp}>
              <div className={styles.programCard}>
                <div className={styles.programIconWrapper}>
                  {React.cloneElement(card.icon, { size: 28 })}
                </div>
                <h3 className={styles.programCardTitle}>{card.title}</h3>
                <p className={styles.programCardDesc}>{card.desc}</p>
                <div className={styles.programCardFooter}>
                  <span className={styles.programTag}>{card.tag}</span>
                  <button className={styles.programButton}>
                    {card.btn} <ArrowRight className={styles.buttonIcon} size={16} />
                  </button>
                </div>
              </div>
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
            四大核心理念
          </h2>
          <p className={styles.sectionSubtitle}>Learn · Build · Share · Lead</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.pillarsGrid}
        >
          {homeData.pillars.map((pillar) => (
            <motion.div key={`pillar-${pillar.title}`} variants={fadeInUp}>
              <PillarCard {...pillar} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 六大優勢 */}
      {homeData.benefits && (
        <section className={styles.benefitsSection} aria-labelledby="benefits-heading">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2 id="benefits-heading" className={styles.sectionTitle}>
              成為大使的六大優勢
            </h2>
            <p className={styles.sectionSubtitle}>全方位支持你的雲端職涯發展</p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={styles.benefitsGrid}
          >
            {homeData.benefits.map((benefit, index) => (
              <motion.div key={`benefit-${index}-${benefit.text}`} variants={fadeInUp}>
                <div
                  className={`${styles.benefitCard} ${benefit.highlight ? styles.highlight : ''}`}
                >
                  <div className={styles.benefitIcon}>
                    <Image src={benefit.icon} alt={benefit.text} width={24} height={24} />
                  </div>
                  <span className={styles.benefitText}>{benefit.text}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}

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
        deadline={homeData.cta_section.deadline}
      />
    </div>
  );
}
