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
import styles from './program.module.css';

export default function ProgramPage() {
  return (
    <div className={styles.page}>
      <PageBanner
        title="關於 AWS Educate Taiwan 雲端校園大使"
        backgroundImages={[
          '/images/program/IMG_6117.JPG',
          '/images/program/IMG_6118.JPG',
          '/images/program/IMG_6169.JPG',
          '/images/program/IMG_6184.JPG',
          '/images/program/IMG_6281.JPG',
          '/images/program/IMG_6407.JPG',
          '/images/program/IMG_6512.JPG',
          '/images/program/IMG_4415-2.JPG',
        ]}
        descriptions={[
          'AWS Educate 台灣雲端校園大使計畫由 Amazon Web Services 支持，旨在培育台灣下一代雲端技術人才。我們提供完整的學習資源、實作機會和產業連結，讓學生在校園時期就能累積實戰經驗。',
          '大使們不僅學習 AWS 雲端技術，更透過舉辦活動、分享知識、領導專案等方式，培養領導力、溝通力和創新思維。我們相信，每位大使都能成為推動台灣科技產業發展的重要力量。',
        ]}
        ctaButton={{
          label: '立即申請成為大使',
          href: 'https://www.surveycake.com/s/PbDLv?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZnRzaATtQkFwZG9mAmZkaWQWUMjT8I56MrNzrHPMS2TKHNIuOEBEemV4dG4DYWVtAjExAHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp7hGrY_67KERuZFmaU-MX_HGwxwbrSOLhtM6ip64LA4qAfxCD0XQOeespmzf_aem_AjY1E_eJJ55edAawaX_-UQ&utm_id=97760_v0_s00_e0_tv3',
        }}
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
        title="準備好加入了嗎？"
        description="加入 AWS Educate Taiwan 雲端校園大使，與我們一起探索雲端世界！"
        primaryCTA={{
          label: '立即申請成為大使',
          href: 'https://www.instagram.com/awseducatestdambtw/',
        }}
        deadline="申請截止日：2025 年 10 月 3 日"
      />
    </div>
  );
}
