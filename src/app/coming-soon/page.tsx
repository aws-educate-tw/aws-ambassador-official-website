'use client';

import { Button } from '@/components/atoms/Button/Button';
import { Footer } from '@/components/organisms/Footer/Footer';
import { Navigation } from '@/components/organisms/Navigation/Navigation';
import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';
import styles from './ComingSoonPage.module.css';

const navigationData = {
  logo: { text: 'AWS', subtitle: 'Educate Taiwan' },
  items: [
    { label: '首頁', href: '/' },
    { label: '大使計畫總覽', href: '/program' },
    { label: '活動中心', href: '/events' },
    { label: '校友專區', href: '/alumni' },
  ],
  ctaLabel: '追蹤粉專',
  ctaHref: 'https://www.instagram.com/awseducatestdambtw/',
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ComingSoonPage() {
  return (
    <div className={styles.page}>
      <Navigation {...navigationData} />

      {/* Title Section */}
      <motion.section
        className={styles.titleSection}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        <motion.h1 className={styles.titleMain} variants={fadeInUp}>
          AWS Educate Taiwan
        </motion.h1>
        <motion.h2 className={styles.titleSub} variants={fadeInUp}>
          Student Cloud Ambassador
        </motion.h2>
      </motion.section>

      {/* Photo Section */}
      <motion.section
        className={styles.photoSection}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {/* Decorative blobs */}
        <div className={`${styles.blob} ${styles.blobTeal}`} aria-hidden="true" />
        <div className={`${styles.blob} ${styles.blobPink}`} aria-hidden="true" />
        <div className={`${styles.blob} ${styles.blobGreen}`} aria-hidden="true" />
        <div className={`${styles.blob} ${styles.blobLavender}`} aria-hidden="true" />

        <div className={styles.comingSoonBanner}>
          <span className={styles.comingSoonText}>
            精彩官網正在醞釀中 ... Coming Soon ...
          </span>
        </div>

        <div
          className={styles.photoWrapper}
          role="img"
          aria-label="AWS Educate Taiwan 大使團隊合照"
        />

        <p className={styles.photoCaption}>大使們在社群上等你們喔！</p>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className={styles.ctaSection}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>想要第一時間收到活動通知？</h2>
          <p className={styles.ctaDescription}>
            加入我們的社群，掌握最新活動資訊與獨家優惠
          </p>
          <Button
            href="https://www.instagram.com/awseducatestdambtw/"
            variant="primary"
            size="lg"
            className={styles.ctaButton}
          >
            <span className={styles.ctaButtonContent}>
              加入我們的社群
              <Bell size={18} />
            </span>
          </Button>
        </div>
      </motion.section>

      <Footer
        brandTitle="AWS Educate Taiwan"
        brandSubtexts={['賦能創新 · 連結未來', 'AWS Educate', 'Taiwan Cloud Ambassador']}
      />
    </div>
  );
}
