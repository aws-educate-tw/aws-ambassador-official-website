'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from './PillarCard.module.css';

export interface PillarCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  imageIndex: number;
}

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
  icon,
  imageIndex,
}: Readonly<PillarCardProps>) {
  const [imageFailed, setImageFailed] = useState(false);
  const iconVariantClass = ICON_VARIANTS[imageIndex % ICON_VARIANTS.length];

  return (
    <article className={styles['principle-card']}>
      <div
        className={`${styles['principle-card__icon-shell']} ${iconVariantClass}`}
        aria-hidden="true"
      >
        {!imageFailed && (
          <Image
            src={`/images/LP/${icon}.png`}
            alt=""
            width={80}
            height={80}
            className={styles['principle-card__character-image']}
            onError={() => setImageFailed(true)}
          />
        )}
      </div>

      <h3 className={styles['principle-card__heading-group']}>
        <span className={styles['principle-card__title']}>{title}</span>
        <span className={styles['principle-card__subtitle']}>{subtitle}</span>
      </h3>
      <p className={styles['principle-card__description']}>{description}</p>
    </article>
  );
}
