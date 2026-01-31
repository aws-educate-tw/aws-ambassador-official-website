'use client';

import { TestimonialCardProps } from '@/components/molecules/TestimonialCard/TestimonialCard';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import styles from './TestimonialsCarousel.module.css';

export interface TestimonialsCarouselProps {
  title: string;
  subtitle?: string;
  testimonials: TestimonialCardProps[];
}

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

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  return (
    <section className={styles.section} aria-labelledby="testimonials-heading">
      <div className={styles.header}>
        <span className={styles.tag}>大使的真心話</span>
        <h2 id="testimonials-heading" className={styles.title}>
          來自大使的好評回饋
        </h2>
        <p className={styles.description}>
          學習是一段充滿挑戰的旅程,我們的使命是與你攜手解決學習過程中的問題,讓你的學習旅程更輕鬆順利,能夠自信地迎接每一個挑戰。
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={styles.grid}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div key={index} variants={fadeInUp} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.userInfo}>
                <div className={styles.avatar}>{testimonial.name.charAt(0)}</div>
                <div className={styles.userDetails}>
                  <h4 className={styles.name}>{testimonial.name}</h4>
                  <p className={styles.role}>{testimonial.role}</p>
                  <p className={styles.company}>{testimonial.company}</p>
                </div>
              </div>
              <div className={styles.rating}>
                {[...Array(testimonial.rating || 5)].map((_, i) => (
                  <Star key={i} size={18} fill="#ff9900" color="#ff9900" />
                ))}
              </div>
            </div>
            <p className={styles.quote}>「{testimonial.quote}」</p>
          </motion.div>
        ))}
      </motion.div>

      <div className={styles.footer}>
        <button className={styles.button}>
          查看更多大使資訊 <ArrowRight className={styles.buttonIcon} size={20} />
        </button>
      </div>
    </section>
  );
}
