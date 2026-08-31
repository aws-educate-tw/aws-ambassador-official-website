'use client';

import { Button } from '@/components/atoms/Button/Button';
import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';
import Image from 'next/image';
import styles from './events.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function EventsPage() {
  return (
    <div className={styles.page}>
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
          活動中心
        </motion.h1>
        <motion.h2 className={styles.titleSub} variants={fadeInUp}>
          Coming Soon
        </motion.h2>
      </motion.section>

      {/* Photo Section */}
      <motion.section
        className={styles.photoSection}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className={styles.comingSoonBanner}>
          <span className={styles.comingSoonText}>
            精彩活動內容正在籌備中 ... Coming Soon ...
          </span>
        </div>

        <div className={styles.photoWrapper}>
          <Image
            src="/images/ComingSoonPagePhoto.JPG"
            alt="AWS Educate Taiwan 大使團隊合照"
            fill
            sizes="(min-width: 768px) 578px, 100vw"
            className={styles.photoImage}
            priority
          />
        </div>

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
            target="_blank"
            rel="noopener noreferrer"
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
    </div>
  );
}
