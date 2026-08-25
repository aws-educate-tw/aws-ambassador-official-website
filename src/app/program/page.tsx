'use client';

import { BenefitsSection } from '@/components/organisms/BenefitsSection/BenefitsSection';
import { CTASection } from '@/components/organisms/CTASection/CTASection';
import { FAQSection } from '@/components/organisms/FAQSection/FAQSection';
import { MissionSection } from '@/components/organisms/MissionSection/MissionSection';
import { PageBanner } from '@/components/organisms/PageBanner/PageBanner';
import { QualificationsSection } from '@/components/organisms/QualificationsSection/QualificationsSection';
import { RolesSection } from '@/components/organisms/RolesSection/RolesSection';
import { SideProjectSection } from '@/components/organisms/SideProjectSection/SideProjectSection';
import { SkillsSection } from '@/components/organisms/SkillsSection/SkillsSection';
import { TimelineSection } from '@/components/organisms/TimelineSection/TimelineSection';
import { CTA_CONTENT } from '@/data/cta';
import styles from './program.module.css';

export default function ProgramPage() {
  return (
    <div className={styles.page}>
      <PageBanner
        title="關於 AWS Educate 雲端校園大使"
        descriptions={[
          'AWS Educate 台灣雲端校園大使計畫由 Amazon Web Services 支持，旨在培育台灣下一代雲端技術人才。我們提供完整的學習資源、實作機會和產業連結，讓學生在校園時期就能累積實戰經驗。',
          '大使們不僅學習 AWS 雲端技術，更透過舉辦活動、分享知識、領導專案等方式，培養領導力、溝通力和創新思維。我們相信，每位大使都能成為推動台灣科技產業發展的重要力量。',
        ]}
        ctaButton={{ label: '立即申請', href: 'https://www.instagram.com/awseducatestdambtw/' }}
      />

      <SkillsSection />
      <BenefitsSection />
      <MissionSection />
      <SideProjectSection />
      <QualificationsSection />
      <TimelineSection />
      <RolesSection />
      <FAQSection />

      <CTASection
        title={CTA_CONTENT.program.title}
        description={CTA_CONTENT.program.description}
        primaryCTA={CTA_CONTENT.program.primaryCTA}
      />
    </div>
  );
}
