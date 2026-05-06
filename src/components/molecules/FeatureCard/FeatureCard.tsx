import { ArrowRight, Calendar, Gift, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import styles from './FeatureCard.module.css';

export interface FeatureCardProps {
  id: string;
  title: string;
  description: string;
  icon?: string;
  tag?: string;
  cta: {
    label: string;
    href: string;
  };
}

const iconMap = {
  trophy: Gift,
  gift: Gift,
  calendar: Calendar,
  'graduation-cap': GraduationCap,
} as const;

export function FeatureCard({ id, title, description, icon = '📌', tag, cta }: FeatureCardProps) {
  const IconComponent = iconMap[icon as keyof typeof iconMap];

  return (
    <article id={id} className={styles.card}>
      <div className={styles.iconWrapper} aria-hidden="true">
        {IconComponent ? <IconComponent size={16} strokeWidth={2} /> : icon}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {tag ? <span className={styles.tag}>{tag}</span> : null}
      <Link href={cta.href} className={styles.link} aria-label={`${title} - ${cta.label}`}>
        <span>{cta.label}</span>
        <ArrowRight size={12} strokeWidth={2.5} />
      </Link>
    </article>
  );
}
