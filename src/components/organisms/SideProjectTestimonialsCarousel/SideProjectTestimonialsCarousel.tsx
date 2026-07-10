'use client';

import { Carousel } from '@/components/molecules/Carousel/Carousel';
import { TestimonialCardProps } from '@/components/molecules/TestimonialCard/TestimonialCard';
import styles from './SideProjectTestimonialsCarousel.module.css';

export interface SideProjectTestimonialsCarouselProps {
  testimonials: TestimonialCardProps[];
}

export function SideProjectTestimonialsCarousel({ testimonials }: SideProjectTestimonialsCarouselProps) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>歷屆大使心得與回饋</h2>
        <p className={styles.subheading}>歷屆大使參加計畫後的想法</p>
      </div>

      <Carousel
        items={testimonials}
        duration={32}
        gap={20}
        ariaLabel="歷屆大使心得輪播"
        keyExtractor={(t, index) => `${t.name}-${index}`}
        renderItem={(t) => (
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.avatar}>{t.name.charAt(0)}</div>
              <div className={styles.userDetails}>
                <p className={styles.name}>{t.name}</p>
                <p className={styles.role}>{t.role}</p>
                <p className={styles.company}>{t.company}</p>
              </div>
            </div>
            <p className={styles.quote}>{t.quote}</p>
          </div>
        )}
      />

      <div className={styles.footer}>
        <a href="#events" className={styles.button}>
          查看更多大使計畫活動
        </a>
      </div>
    </section>
  );
}
