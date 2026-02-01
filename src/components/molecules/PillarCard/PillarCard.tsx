import Image from 'next/image';
import styles from './PillarCard.module.css';

export interface PillarCardProps {
  title: string;
  description: string;
  icon?: string;
}

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

function getWrapperVariant(title: string) {
  if (title === '學習' || title === 'Learn') return styles.learn;
  if (title === '實作' || title === 'Build') return styles.build;
  if (title === '分享' || title === 'Share') return styles.share;
  if (title === '領導' || title === 'Lead') return styles.lead;
  return styles.defaultVariant;
}

export function PillarCard({ title, description, icon }: PillarCardProps) {
  const imageSrc = PILLAR_IMAGES[title];
  const variantClass = getWrapperVariant(title);

  return (
    <article className={styles.card}>
      <div className={`${styles.iconWrapper} ${variantClass}`} aria-hidden="true">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt=""
            width={160}
            height={160}
            className={styles.pillarImage}
            priority
          />
        ) : (
          <span className={styles.fallbackIcon}>{icon ?? '✨'}</span>
        )}
      </div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
