'use client';

import { StoryCategory } from '@/data/alumni';
import { Quote, Star } from 'lucide-react';
import { useState } from 'react';

import styles from './StorySection.module.css';

interface StorySectionProps {
  category: StoryCategory;
}

export function StorySection({ category }: StorySectionProps) {
  const alumniKeys = Object.keys(category.alumni);
  const [activeKey, setActiveKey] = useState(alumniKeys[0]);
  const current = category.alumni[activeKey];

  return (
    <section className={styles.section}>
      {/* 標題區 */}
      <div className={styles.header}>
        <h2 className={styles.title}>{category.title}</h2>
        <p className={styles.subtitle}>{category.subtitle}</p>
      </div>

      {/* 主卡片：左側深色 + 右側淺色 */}
      <div className={styles.card}>
        {/* 左側：個人資訊 */}
        <div className={styles.cardLeft}>
          <div className={styles.profileRow}>
            <img src={current.image} alt={current.name} className={styles.avatar} />
            <h3 className={styles.name}>{current.name}</h3>
          </div>

          <div className={styles.info}>
            <p className={styles.ambassadorTitle}>{current.title}</p>

            <div className={styles.tags}>
              {current.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>

            <div className={styles.highlights}>
              {current.highlights.map((h, i) => (
                <div key={i} className={styles.highlightItem}>
                  <Star className={styles.starIcon} size={20} color="#FF9900" />
                  <p className={styles.highlightText}>{h}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.cardLeftFooter}>
            <button className={styles.interviewBtn}>查看更多訪談資訊</button>
          </div>
        </div>

        {/* 右側：引言與職涯歷程 */}
        <div className={styles.cardRight}>
          {/* 引言裝飾 */}
          <div className={styles.quoteIconWrapper}>
            <Quote size={40} className={styles.quoteIcon} color="#FF9900" />
          </div>

          <p className={styles.quote}>&ldquo;{current.quote}&rdquo;</p>

          <h4 className={styles.careerTitle}>職涯發展歷程</h4>
          <div className={styles.careerPath}>
            {current.careerPath.map((step) => (
              <div key={step.id} className={styles.careerStep}>
                <div className={styles.stepBadge}>{step.id}</div>
                <p className={styles.stepText}>{step.text}</p>
              </div>
            ))}
          </div>

          <div className={styles.interviewer}>
            訪談大使：
            <br />
            {current.interviewer}
          </div>
        </div>
      </div>

      {/* 切換按鈕（多位校友時才顯示） */}
      {alumniKeys.length > 1 && (
        <div className={styles.switcher}>
          {alumniKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActiveKey(key)}
              className={`${styles.switchBtn} ${activeKey === key ? styles.switchBtnActive : ''}`}
            >
              {key}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
