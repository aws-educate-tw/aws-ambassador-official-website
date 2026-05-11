'use client';

import { StoryCategory } from '@/data/alumni';
import { motion } from 'framer-motion';
import { Quote, Star, User } from 'lucide-react';
import { useState } from 'react';

import styles from './StorySection.module.css';

interface StorySectionProps {
  category: StoryCategory;
}

export function StorySection({ category }: StorySectionProps) {
  const alumniKeys = Object.keys(category.alumni);
  const [activeKey, setActiveKey] = useState(alumniKeys[0]);
  const [rotation, setRotation] = useState(0);
  const current = category.alumni[activeKey];

  const handleSwitch = (key: string) => {
    if (key === activeKey) return;
    setRotation((prev) => prev + 180);
    setTimeout(() => setActiveKey(key), 350);
  };

  const nextKey = alumniKeys.find((k) => k !== activeKey) ?? activeKey;
  const isFlipped = Math.round(rotation / 180) % 2 !== 0;
  const frontKey = isFlipped ? nextKey : activeKey;
  const backKey = isFlipped ? activeKey : nextKey;
  const front = category.alumni[frontKey];
  const back = category.alumni[backKey];

  return (
    <section className={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* 標題區 */}
        <div className={styles.header}>
          <h2 className={styles.title}>{category.title}</h2>
          <p className={styles.subtitle}>{category.subtitle}</p>
        </div>

        {/* 主卡片 */}
        <div className={styles.cardPerspective}>
          <div className={styles.card} style={{ transform: `rotateY(${rotation}deg)` }}>
            {[{ data: front, face: 'front' }, { data: back, face: 'back' }].map(({ data, face }) => (
              <div key={face} className={`${styles.cardInner} ${face === 'back' ? styles.cardInnerBack : ''}`}>
                {/* 左側：個人資訊 */}
                <div className={styles.cardLeft}>
                  <div className={styles.profileRow}>
                    {data.image ? (
                      <img src={data.image} alt={data.name} className={styles.avatar} />
                    ) : (
                      <div className={styles.avatarPlaceholder}>
                        <User size={48} color="rgba(255,255,255,0.5)" />
                      </div>
                    )}
                    <h3 className={styles.name}>{data.name}</h3>
                  </div>

                  <div className={styles.info}>
                    <p className={styles.ambassadorTitle}>{data.title}</p>

                    <div className={styles.tags}>
                      {data.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className={styles.highlights}>
                      {data.highlights.map((h, i) => (
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
                  <div className={styles.quoteIconWrapper}>
                    <Quote size={40} className={styles.quoteIcon} color="#FF9900" />
                  </div>

                  <p className={styles.quote}>&ldquo;{data.quote}&rdquo;</p>

                  <h4 className={styles.careerTitle}>職涯發展歷程</h4>
                  <div className={styles.careerPath}>
                    {data.careerPath.map((step) => (
                      <div key={step.id} className={styles.careerStep}>
                        <div className={styles.stepBadge}>{step.id}</div>
                        <p className={styles.stepText}>{step.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className={styles.interviewer}>
                    訪談大使：
                    <br />
                    {data.interviewer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 切換按鈕（多位校友時才顯示） */}
        {alumniKeys.length > 1 && (
          <div className={styles.switcher}>
            {alumniKeys.map((key) => (
              <button
                key={key}
                onClick={() => handleSwitch(key)}
                className={`${styles.switchBtn} ${activeKey === key ? styles.switchBtnActive : ''}`}
              >
                {key}
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}
