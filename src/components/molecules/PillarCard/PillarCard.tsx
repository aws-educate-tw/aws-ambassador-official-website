import styles from './PillarCard.module.css';

export interface PillarCardProps {
  title: string;
  description: string;
  icon?: string;
}

const ICON_MAP: Record<string, string> = {
  Learn: '📚',
  Build: '🔨',
  Share: '🤝',
  Lead: '👑',
};

export function PillarCard({ title, description, icon }: PillarCardProps) {
  const displayIcon = icon || ICON_MAP[title] || '✨';

  return (
    <article className={styles.card}>
      <div className={styles.icon} aria-hidden="true">
        {displayIcon}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
