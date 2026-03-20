'use client';

import { PillarCard } from '@/components/molecules/PillarCard/PillarCard';
import { CTASection } from '@/components/organisms/CTASection/CTASection';
import { Footer } from '@/components/organisms/Footer/Footer';
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

// Header
const navigationData = {
  logo: { text: 'AWS', subtitle: 'Educate Ambassador' },
  items: [
    { label: '首頁', href: '#' },
    { label: '大使計畫總覽', href: '#program' },
    { label: '活動中心', href: '#events' },
    { label: '校友專區', href: '#alumni' },
    { label: '聯絡我們', href: '#contact' },
  ],
  ctaLabel: '立即申請',
  ctaHref: '/apply',
};

// Footer
const footerData = {
  copyright: 'AWS Educate Taiwan Campus Ambassador Program',
  links: [
    { label: '隱私政策', href: '/privacy' },
    { label: '使用條款', href: '/terms' },
    { label: '聯絡我們', href: '/contact' },
  ],
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
          className={styles.principlesHeader}
        >
          <p className={styles.principlesEyebrow}>At Amazon, it is still Day 1</p>
          <h2 id="pillars-heading" className={styles.principlesTitle}>
            Amazon Leadership Principles
          </h2>
          <p className={styles.principlesSubtitle}>
            以亞馬遜領導力準則為核心，培養未來雲端領導者
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.pillarsGrid}
        >
          {leadershipPrinciples.map((principle, index) => (
            <motion.div key={`pillar-${principle.title}`} variants={fadeInUp}>
              <PillarCard
                title={principle.title}
                subtitle={principle.subtitle}
                description={principle.description}
                imageIndex={index}
              />
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

      {/* 頁尾 */}
      <Footer {...footerData} />
    </div>
  );
}
