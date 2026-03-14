'use client';

import { Button } from '@/components/atoms/Button/Button';
import Link from 'next/link';
import styles from './Navigation.module.css';

export interface NavItem {
  label: string;
  href: string;
}

export interface NavigationProps {
  logo?: {
    text: string;
    subtitle?: string;
  };
  items: NavItem[];
  ctaLabel: string;
  ctaHref: string;
}

export function Navigation({ logo, items, ctaLabel, ctaHref }: NavigationProps) {
  return (
    <nav className={styles.nav} role="navigation" aria-label="主要導航">
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>{logo?.text || 'AWS'}</span>
          {logo?.subtitle && <span className={styles.logoSubtitle}>{logo.subtitle}</span>}
        </Link>

        <div className={styles.menu}>
          {items.map((item) => (
            <Link key={item.href} href={item.href} className={styles.menuItem}>
              {item.label}
            </Link>
          ))}
        </div>

        <Button href={ctaHref} variant="primary" size="sm">
          {ctaLabel}
        </Button>
      </div>
    </nav>
  );
}
