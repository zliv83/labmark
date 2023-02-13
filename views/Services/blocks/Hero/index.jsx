import Button from '@/components/Button';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <div className={styles.background}>
      <div className={styles.overlay} />
      <div className={styles.titleContainer}>
        <span className={styles.title}>Craftsmanship Guaranteed</span>
        <span className={styles.subtitle}>
          We go to great lengths to see that our work is done right the first
          time.
        </span>
        <Button className={styles.button}>Schedule Consultation</Button>
      </div>
    </div>
  );
}
