import { AlumniHero } from '@/components/organisms/AlumniHero/AlumniHero';
import { AmbassadorDirectory } from '@/components/organisms/AmbassadorDirectory/AmbassadorDirectory';
import { CTASection } from '@/components/organisms/CTASection/CTASection';
import { StorySection } from '@/components/organisms/StorySection/StorySection';
import { SUCCESS_STORIES } from '@/data/alumni';
import styles from './alumni.module.css';

export default function AlumniPage() {
  return (
    <div className={styles.page}>
      <AlumniHero />

      <StorySection category={SUCCESS_STORIES.career} />
      <StorySection category={SUCCESS_STORIES.tech} />
      <StorySection category={SUCCESS_STORIES.cross} />

      <AmbassadorDirectory />

      <CTASection
        title="想加入這個優秀的校友網絡嗎？"
        description="加入我們的社群，掌握最新活動資訊與獨家優惠"
        primaryCTA={{ label: '追蹤粉專', href: 'https://www.instagram.com/awseducatestdambtw/' }}
      />
    </div>
  );
}
