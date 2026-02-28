import styles from './StatCard.module.css';

export interface StatCardProps {
  number: string;
  label: string;
  description: string;
}

export function StatCard({ number, label, description }: StatCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.number} aria-label={`統計數字: ${number}`}>
        {number}
      </div>
      <div className={styles.label}>{label}</div>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
