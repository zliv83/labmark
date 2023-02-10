/* eslint-disable react/jsx-one-expression-per-line */
import Button from '@/components/Button';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <div className={styles.background}>
      <div className={styles.overlay} />
      <div className={styles.titleContainer}>
        <span className={styles.title}>Labmark has you covered!</span>
        <span className={styles.subtitle}>
          Exteriors, Roofing, Siding, & Gutters <br />
          We do it all!
        </span>
        <Button className={styles.button}>Contact Us</Button>
      </div>
    </div>
  );
}
