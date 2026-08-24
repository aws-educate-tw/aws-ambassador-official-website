'use client';

import { Button } from '@/components/atoms/Button/Button';
import { Carousel } from '@/components/molecules/Carousel/Carousel';
import { TestimonialCardProps } from '@/components/molecules/TestimonialCard/TestimonialCard';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import styles from './TestimonialsCarousel.module.css';

export interface TestimonialsCarouselProps {
  testimonials: TestimonialCardProps[];
}

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  return (
    <section className={styles.section} aria-labelledby="testimonials-heading">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={styles.header}
      >
        <h2 id="testimonials-heading" className={styles.title}>
          來自大使的好評推薦
        </h2>
        <p className={styles.subtitle}>聽聽大使們的真實心聲</p>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <Carousel
          items={testimonials}
          duration={60}
          gap={0}
          ariaLabel="大使心得輪播"
          keyExtractor={(t, index) => `${t.name}-${index}`}
          renderItem={(t) => (
            <div className={styles.card}>
              <div className={styles.rating} aria-label={`評分 ${t.rating ?? 5} 顆星`}>
                {[...Array(t.rating || 5)].map((_, i) => (
                  <Star key={i} size={14} className={styles.star} />
                ))}
              </div>
              <p className={styles.quote}>{t.quote}</p>
              <div className={styles.userInfo}>
                <div className={styles.avatar} aria-hidden="true">
                  {t.name.charAt(0)}
                </div>
                <div className={styles.userDetails}>
                  <p className={styles.name}>{t.name}</p>
                  <p className={styles.role}>{t.role}</p>
                </div>
              </div>
            </div>
          )}
        />
      </motion.div>

      <div className={styles.footer}>
        <Button href="/alumni" variant="secondary">
          查看校友專區 <ArrowRight size={14} />
        </Button>
      </div>
    </section>
  );
}
