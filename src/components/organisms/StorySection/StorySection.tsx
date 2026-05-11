'use client';

import { StoryCategory } from '@/data/alumni';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useRef, useState } from 'react';


import styles from './StorySection.module.css';

interface StorySectionProps {
  category: StoryCategory;
}

function AlumniCardContent({ data }: { data: StoryCategory['alumni'][string] }) {
  return (
    <>
      <div className={styles.cardLeft}>
        <div className={styles.profileRow}>
          <img src={data.image} alt={data.name} className={styles.avatar} />
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
                <Star size={20} color="#FF9900" />
                <p className={styles.highlightText}>{h}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.cardLeftFooter}>
          <button className={styles.interviewBtn}>查看更多訪談資訊</button>
        </div>
      </div>

      <div className={styles.cardRight}>
        <div className={styles.quoteIconWrapper}>
          <Quote size={40} color="#FF9900" />
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
    </>
  );
}

type Phase = 'idle' | 'flipping';

const FLIP_DURATION = 600; // ms，需與 CSS transition 一致

export function StorySection({ category }: StorySectionProps) {
  const alumniKeys = Object.keys(category.alumni);
  const [activeKey, setActiveKey] = useState(alumniKeys[0]);
  const [phase, setPhase] = useState<Phase>('idle');
  const [rotation, setRotation] = useState(0);
  const pendingKey = useRef<string | null>(null);

  const handleSwitch = (key: string) => {
    if (key === activeKey || phase !== 'idle') return;
    pendingKey.current = key;
    setPhase('flipping');
    setRotation((prev) => prev + 180);
    // 翻到側面（一半時間）時換內容
    setTimeout(() => {
      setActiveKey(pendingKey.current!);
    }, FLIP_DURATION / 2);
  };

  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget || e.propertyName !== 'transform') return;
    pendingKey.current = null;
    setPhase('idle');
  };

  // 奇數次翻轉後卡片背面朝前，補反向旋轉抵消鏡像
  const isOdd = Math.round(rotation / 180) % 2 !== 0;
  const innerStyle = isOdd ? { transform: 'rotateY(180deg)' } : undefined;

  return (
    <section className={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.header}>
          <h2 className={styles.title}>{category.title}</h2>
          <p className={styles.subtitle}>{category.subtitle}</p>
        </div>

        <div className={styles.cardPerspective}>
          <div
            className={styles.card}
            style={{ transform: `rotateY(${rotation}deg)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {alumniKeys.map((key) => {
              const isActive = key === activeKey;
              return (
                <div
                  key={key}
                  className={styles.cardInner}
                  style={{
                    ...(!isActive ? { position: 'absolute', top: 0, left: 0, visibility: 'hidden', pointerEvents: 'none' } : {}),
                    ...(isOdd ? { transform: 'rotateY(180deg)' } : {}),
                  }}
                  aria-hidden={!isActive}
                >
                  <AlumniCardContent data={category.alumni[key]} />
                </div>
              );
            })}
          </div>
        </div>

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
