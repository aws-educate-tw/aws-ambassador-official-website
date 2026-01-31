import styles from './Footer.module.css';

export interface FooterProps {
  copyright: string;
  links?: Array<{
    label: string;
    href: string;
  }>;
}

export function Footer({ copyright, links }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        {links && links.length > 0 && (
          <nav className={styles.links} aria-label="頁尾連結">
            {links.map((link) => (
              <a key={link.href} href={link.href} className={styles.link}>
                {link.label}
              </a>
            ))}
          </nav>
        )}

        <p className={styles.copyright}>
          © {currentYear} {copyright}
        </p>
      </div>
    </footer>
  );
}
