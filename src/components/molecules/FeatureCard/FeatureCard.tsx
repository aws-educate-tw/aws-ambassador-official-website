import Link from 'next/link';
import styles from './FeatureCard.module.css';

export interface FeatureCardProps {
  id: string;
  title: string;
  description: string;
  icon?: string;
  cta: {
    label: string;
    href: string;
  };
}

export function FeatureCard({ title, description, icon = '📌', cta }: FeatureCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.iconWrapper} aria-hidden="true">
        {icon}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <Link href={cta.href} className={styles.link} aria-label={`${title} - ${cta.label}`}>
        {cta.label} →
      </Link>
    </article>
  );
}
