import { AlumniHero } from '@/components/organisms/AlumniHero/AlumniHero';
import { AmbassadorDirectory } from '@/components/organisms/AmbassadorDirectory/AmbassadorDirectory';
import { CTASection } from '@/components/organisms/CTASection/CTASection';
import { StorySection } from '@/components/organisms/StorySection/StorySection';
import { SUCCESS_STORIES } from '@/data/alumni';
import { CTA_CONTENT } from '@/data/cta';
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
        title={CTA_CONTENT.alumni.title}
        description={CTA_CONTENT.alumni.description}
        primaryCTA={CTA_CONTENT.alumni.primaryCTA}
      />
    </div>
  );
}
