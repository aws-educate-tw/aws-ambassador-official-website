import { Button } from '@/components/atoms/Button/Button';
import { ArrowLeft, ArrowRight, Bell, Star, User } from 'lucide-react';
import styles from './EventsPage.module.css';

const PROGRAM_DESCRIPTION =
  '「AWS Educate 證照陪跑計畫」專為嚮往雲端與 AI 領域的學生打造。結合官方精選課程、實戰工作坊與大使專屬社群。計畫也提供證照考古題及延伸學習資源的 Notion 資源統整，並設有雲端大使親自解惑的 Discord & Line 專屬社群互動問答，讓初入雲端 & AI 領域的同學，都能順利考取 Certified Cloud Practitioner 或 Certified AI Practitioner，完成任務還可獲得獎勵！';

const TESTIMONIAL = {
  role: '證照陪跑計畫成員',
  quote: '從來沒想過雲端技術可以這麼有趣！大使學長姐們用 Lambda 和 API Gateway 帶我們實作，三小時的工作坊收穫滿滿！',
  rating: 5,
};

const testimonials = [TESTIMONIAL, TESTIMONIAL, TESTIMONIAL];

const activityBlocks = [
  {
    id: 'workshop',
    title: '關於 AWS 技術工作坊',
    description: PROGRAM_DESCRIPTION,
  },
  {
    id: 'career-matching',
    title: '關於 AWS 人才媒合會',
    description: PROGRAM_DESCRIPTION,
  },
  {
    id: 'career-sharing',
    title: 'AWS Career sharing',
    description: PROGRAM_DESCRIPTION,
  },
  {
    id: 'other-events',
    title: '其他活動（ex. UAD）',
    description: PROGRAM_DESCRIPTION,
  },
];

function EventPhoto() {
  return (
    <div className={styles.photoPlaceholder} role="img" aria-label="AWS Educate 校園大使活動照片">
      <User size={48} strokeWidth={1.5} aria-hidden="true" />
    </div>
  );
}

function TestimonialGrid() {
  return (
    <div className={styles.testimonialGrid}>
      {testimonials.map((testimonial, index) => (
        <article key={index} className={styles.testimonialCard}>
          <div className={styles.testimonialHeader}>
            <div className={styles.testimonialAvatar} aria-hidden="true">
              <User size={20} />
            </div>
            <span className={styles.testimonialRole}>{testimonial.role}</span>
          </div>
          <div className={styles.testimonialRating} aria-label={`評分 ${testimonial.rating} 顆星`}>
            {Array.from({ length: testimonial.rating }, (_, i) => (
              <Star key={i} size={16} fill="#ff9900" color="#ff9900" />
            ))}
          </div>
          <p className={styles.testimonialQuote}>{testimonial.quote}</p>
        </article>
      ))}

      <div className={styles.pagination}>
        <button type="button" className={styles.pageButton} aria-label="上一頁">
          <ArrowLeft size={16} aria-hidden="true" />
          上一頁
        </button>
        <button type="button" className={styles.pageButton} aria-label="下一頁">
          下一頁
          <ArrowRight size={16} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

interface ActivityBlockProps {
  title: string;
  description: string;
  isReversed?: boolean;
}

function ActivityBlock({ title, description, isReversed = false }: ActivityBlockProps) {
  const activityIntroClassName = isReversed
    ? `${styles.activityIntro} ${styles.activityIntroReversed}`
    : styles.activityIntro;

  return (
    <div className={styles.activityBlock}>
      <div className={activityIntroClassName}>
        <EventPhoto />
        <div className={styles.activityContent}>
          <h3 className={styles.activityTitle}>{title}</h3>
          <p className={styles.activityDescription}>{description}</p>
        </div>
      </div>

      <TestimonialGrid />

      <div className={styles.moreInfoRow}>
        <span className={styles.divider} aria-hidden="true" />
        <Button href="/program" variant="ghost" size="sm" className={styles.moreInfoButton}>
          查看更多資訊
          <ArrowRight size={16} aria-hidden="true" />
        </Button>
        <span className={styles.divider} aria-hidden="true" />
      </div>
    </div>
  );
}

export default function EventsPage() {
  return (
    <div className={styles.page}>
      <section className={styles.headerSection} aria-labelledby="events-heading">
        <h1 id="events-heading" className={styles.headerTitle}>
          AWS Educate 活動中心
        </h1>
        <p className={styles.headerSubtitle}>
          學習與交流機會，從技術工作坊到職涯講座，與 AWS 社群一同成長。參與實作活動，累積實戰經驗，拓展專業人脈網絡。
        </p>
      </section>

      <section className={styles.introSection} aria-labelledby="program-intro-heading">
        <EventPhoto />
        <div className={styles.introContent}>
          <h2 id="program-intro-heading" className={styles.introTitle}>
            關於 AWS Educate 證照陪跑計畫
          </h2>
          <p className={styles.introDescription}>{PROGRAM_DESCRIPTION}</p>
        </div>
      </section>

      <span className={styles.sectionDivider} aria-hidden="true" />

      <section className={styles.recordsSection} aria-labelledby="event-records-heading">
        <div className={styles.recordsHeading}>
          <h2 id="event-records-heading" className={styles.recordsTitle}>
            活動紀錄
          </h2>
          <p className={styles.recordsSubtitle}>
            探索過往精彩時刻。本區活動主要對象為「AWS Educate 證照陪跑計劃」學員，請密切關注後續動態。
          </p>
        </div>

        {activityBlocks.map((block, index) => (
          <ActivityBlock
            key={block.id}
            title={block.title}
            description={block.description}
            isReversed={index % 2 === 0}
          />
        ))}
      </section>

      <section className={styles.subscribeSection} aria-labelledby="subscribe-heading">
        <h2 id="subscribe-heading" className={styles.subscribeTitle}>
          想要第一時間收到活動通知？
        </h2>
        <p className={styles.subscribeDescription}>加入我們的社群，掌握最新活動資訊與獨家優惠</p>
        <Button
          href="https://www.instagram.com/awseducatestdambtw/"
          target="_blank"
          rel="noopener noreferrer"
          size="md"
          className={styles.subscribeButton}
        >
          加入我們社群
          <Bell size={18} aria-hidden="true" />
        </Button>
      </section>
    </div>
  );
}
