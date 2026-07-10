'use client';

import { CSSProperties, Key, ReactNode } from 'react';
import styles from './Carousel.module.css';

export interface CarouselProps<T> {
  items: readonly T[];
  renderItem: (item: T, index: number) => ReactNode;
  keyExtractor?: (item: T, index: number) => Key;
  /** Time in seconds for the track to scroll through one full loop. */
  duration?: number;
  /** Gap between items in pixels. */
  gap?: number;
  pauseOnHover?: boolean;
  className?: string;
  itemClassName?: string;
  ariaLabel?: string;
}

export function Carousel<T>({
  items,
  renderItem,
  keyExtractor,
  duration = 40,
  gap = 20,
  pauseOnHover = true,
  className,
  itemClassName,
  ariaLabel,
}: CarouselProps<T>) {
  const doubled = [...items, ...items];

  const trackStyle = {
    '--carousel-duration': `${duration}s`,
    '--carousel-gap': `${gap}px`,
    animationPlayState: pauseOnHover ? undefined : 'running',
  } as CSSProperties;

  return (
    <div className={[styles.wrapper, className].filter(Boolean).join(' ')} aria-label={ariaLabel}>
      <div className={styles.track} style={trackStyle}>
        {doubled.map((item, index) => (
          <div
            key={keyExtractor ? keyExtractor(item, index) : index}
            className={[styles.item, itemClassName].filter(Boolean).join(' ')}
          >
            {renderItem(item, index)}
          </div>
        ))}
      </div>
    </div>
  );
}
