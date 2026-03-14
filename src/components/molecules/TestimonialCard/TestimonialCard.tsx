import Image from 'next/image';
import styles from './TestimonialCard.module.css';

export interface TestimonialCardProps {
  name: string;
  role: string;
  company?: string;
  quote: string;
  avatar?: string;
  rating?: number;
}

export function TestimonialCard({
  name,
  role,
  company,
  quote,
  avatar,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div className={styles.avatar} aria-label={`${name} 的頭像`}>
          {avatar ? (
            <Image
              src={avatar}
              alt={`${name} profile picture`}
              fill
              sizes="64px"
              className={styles.avatarImage}
            />
          ) : (
            <div className={styles.avatarPlaceholder} />
          )}
        </div>
        <div className={styles.info}>
          <div className={styles.name}>{name}</div>
          <div className={styles.role}>
            {role}
            {company && ` • ${company}`}
          </div>
        </div>
      </div>

      {rating !== undefined && (
        <div className={styles.rating} aria-label={`評分: ${rating} 顆星`}>
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={i < rating ? styles.starFilled : styles.starEmpty}>
              ★
            </span>
          ))}
        </div>
      )}

      <blockquote className={styles.quote}>
        <p>&quot;{quote}&quot;</p>
      </blockquote>
    </article>
  );
}
