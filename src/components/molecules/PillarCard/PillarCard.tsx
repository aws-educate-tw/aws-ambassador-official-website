import Image from 'next/image';
import styles from './PillarCard.module.css';

export interface PillarCardProps {
  title: string;
  description: string;
  icon?: string;
}

// 四大核心理念圖片映射
const PILLAR_IMAGES: Record<string, string> = {
  學習: '/images/Learning.png',
  Learn: '/images/Learning.png',
  實作: '/images/Implementation.png',
  Build: '/images/Implementation.png',
  分享: '/images/Sharing.png',
  Share: '/images/Sharing.png',
  領導: '/images/Lead.png',
  Lead: '/images/Lead.png',
};

export function PillarCard({ title, description, icon }: PillarCardProps) {
  const imageSrc = PILLAR_IMAGES[title];

  return (
    <article className={styles.card}>
      <div className={styles.icon} aria-hidden="true">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            width={160}
            height={160}
            className={styles.pillarImage}
            priority
          />
        ) : (
          icon || '✨'
        )}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
