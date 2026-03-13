'use client';

import { Button } from '@/components/atoms/Button/Button';
import Image from 'next/image';
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
  activeItemHref?: string;
}

export function Navigation({
  logo,
  items,
  ctaLabel,
  ctaHref,
  activeItemHref,
}: Readonly<NavigationProps>) {
  const highlightedHref = activeItemHref ?? items[1]?.href;

  return (
    <nav className={styles.nav} role="navigation" aria-label="主要導航">
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/Nav_mascot.svg"
            alt="AWS Educate TW mascot"
            width={44}
            height={52}
            className={styles.logoIcon}
            priority
          />
          <span className={styles.logoText}>
            {logo?.subtitle ? `${logo.text} ${logo.subtitle}` : logo?.text || 'AWS Educate TW'}
          </span>
        </Link>

        <div className={styles.menu}>
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.menuItem} ${item.href === highlightedHref ? styles.menuItemActive : ''}`}
              aria-current={item.href === highlightedHref ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Button href={ctaHref} size="md" className={styles.ctaButton}>
          {ctaLabel}
        </Button>
      </div>
    </nav>
  );
}
