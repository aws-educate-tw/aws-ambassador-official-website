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
}: Readonly<CarouselProps<T>>) {
  const doubled = [...items, ...items];

  const trackStyle = {
    '--carousel-duration': `${duration}s`,
    '--carousel-gap': `${gap}px`,
  } as CSSProperties;

  return (
    <section
      className={[styles.wrapper, pauseOnHover && styles.pauseOnHover, className]
        .filter(Boolean)
        .join(' ')}
      aria-label={ariaLabel}
    >
      <div className={styles.track} style={trackStyle}>
        {doubled.map((item, index) => {
          const originalIndex = index % items.length;
          const copyIndex = Math.floor(index / items.length);
          const isClone = copyIndex > 0;
          const baseKey = keyExtractor ? keyExtractor(item, originalIndex) : originalIndex;
          return (
            <div
              key={`${String(baseKey)}-${copyIndex}`}
              className={[styles.item, itemClassName].filter(Boolean).join(' ')}
              aria-hidden={isClone || undefined}
            >
              {renderItem(item, originalIndex)}
            </div>
          );
        })}
      </div>
    </section>
  );
}
