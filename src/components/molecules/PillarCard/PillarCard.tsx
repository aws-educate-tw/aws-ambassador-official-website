import Image from 'next/image';
import styles from './PillarCard.module.css';

export interface PillarCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageIndex: number;
}

const PRINCIPLE_IMAGES = [
  '/images/Learning.png',
  '/images/Implementation.png',
  '/images/Sharing.png',
  '/images/Lead.png',
] as const;

const ICON_VARIANTS = [
  styles['principle-card__icon-shell--blue'],
  styles['principle-card__icon-shell--sand'],
  styles['principle-card__icon-shell--rose'],
  styles['principle-card__icon-shell--mint'],
] as const;

export function PillarCard({
  title,
  subtitle,
  description,
  imageIndex,
}: Readonly<PillarCardProps>) {
  const imageSrc = PRINCIPLE_IMAGES[imageIndex % PRINCIPLE_IMAGES.length];
  const iconVariantClass = ICON_VARIANTS[imageIndex % ICON_VARIANTS.length];

  return (
    <article className={styles['principle-card']}>
      <div
        className={`${styles['principle-card__icon-shell']} ${iconVariantClass}`}
        aria-hidden="true"
      >
        <Image
          src={imageSrc}
          alt=""
          width={80}
          height={80}
          className={styles['principle-card__character-image']}
        />
      </div>

      <h3 className={styles['principle-card__heading-group']}>
        <span className={styles['principle-card__title']}>{title}</span>
        <span className={styles['principle-card__subtitle']}>{subtitle}</span>
      </h3>
      <p className={styles['principle-card__description']}>{description}</p>
    </article>
  );
}
