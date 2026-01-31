'use client';

import {
  TestimonialCard,
  TestimonialCardProps,
} from '@/components/molecules/TestimonialCard/TestimonialCard';
import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from './TestimonialsCarousel.module.css';

export interface TestimonialsCarouselProps {
  title: string;
  subtitle?: string;
  testimonials: TestimonialCardProps[];
}

export function TestimonialsCarousel({ title, subtitle, testimonials }: TestimonialsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.section} aria-labelledby="testimonials-heading">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={styles.header}
      >
        <h2 id="testimonials-heading" className={styles.title}>
          {title}
        </h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={styles.carouselWrapper}
      >
        <TestimonialCard {...testimonials[activeIndex]} />

        <div className={styles.dots} role="tablist" aria-label="選擇推薦">
          {testimonials.map((_, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`推薦 ${index + 1}`}
              className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ''}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
