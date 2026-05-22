'use client';

import { Button } from '@/components/atoms/Button/Button';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [clientPath, setClientPath] = useState<string | null>(null);
  useEffect(() => {
    setClientPath(pathname ?? null);
  }, [pathname]);

  const highlightedHref = activeItemHref ?? clientPath;
  const isExternalCta = /^https?:\/\//.test(ctaHref);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : originalOverflow;

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className={styles.nav} role="navigation" aria-label="主要導航">
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
          <Image
            src="/images/AWS_Educate_Logo.svg"
            alt="AWS Educate logo"
            width={42}
            height={50}
            className={styles.logoIcon}
            priority
          />
          <span className={styles.logoText}>
            {logo?.subtitle ? `${logo.text} ${logo.subtitle}` : logo?.text || 'AWS Educate Taiwan'}
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

        <Button
          href={ctaHref}
          size="md"
          className={styles.ctaButton}
          target={isExternalCta ? '_blank' : undefined}
          rel={isExternalCta ? 'noopener noreferrer' : undefined}
        >
          {ctaLabel}
        </Button>

        <button
          type="button"
          className={styles.mobileMenuToggle}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation-menu"
          aria-label={isMobileMenuOpen ? '關閉選單' : '開啟選單'}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen ? (
        <button
          type="button"
          className={`${styles.mobileMenuOverlay} ${styles.mobileMenuOverlayOpen}`}
          onClick={closeMobileMenu}
          aria-label="關閉選單遮罩"
        />
      ) : null}

      <div
        id="mobile-navigation-menu"
        className={`${styles.mobileMenuPanel} ${isMobileMenuOpen ? styles.mobileMenuPanelOpen : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className={styles.mobileMenuHeader}>
          <span className={styles.mobileMenuTitle}>導覽選單</span>
          <button
            type="button"
            className={styles.mobileMenuClose}
            aria-label="關閉選單"
            onClick={closeMobileMenu}
          >
            <X size={22} />
          </button>
        </div>

        <div className={styles.mobileMenuList}>
          {items.map((item) => (
            <Link
              key={`mobile-${item.href}`}
              href={item.href}
              className={`${styles.mobileMenuItem} ${item.href === highlightedHref ? styles.mobileMenuItemActive : ''}`}
              aria-current={item.href === highlightedHref ? 'page' : undefined}
              onClick={closeMobileMenu}
            >
              <span>{item.label}</span>
              {item.href === highlightedHref ? (
                <span className={styles.mobileMenuBadge}>目前</span>
              ) : null}
            </Link>
          ))}
        </div>

        <Button
          href={ctaHref}
          size="md"
          className={styles.mobileCtaButton}
          target={isExternalCta ? '_blank' : undefined}
          rel={isExternalCta ? 'noopener noreferrer' : undefined}
        >
          {ctaLabel}
        </Button>
      </div>
    </nav>
  );
}
