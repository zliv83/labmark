import Button from '@/components/Button';
import styles from './ServiceCard.module.scss';

export default function ServiceCard({ className, title }) {
  return (
    <div className={`${styles.serviceCard} ${className}`}>
      <div className={styles.overlay} />
      <span className={styles.title}>{title}</span>
      <Button className={styles.button}>More Info</Button>
    </div>
  );
}
