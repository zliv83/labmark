import Link from 'next/link';

import Button from '@/components/Button';
import styles from './ServiceCard.module.scss';

export default function ServiceCard({ className, title }) {
  return (
    <div className={`${styles.serviceCard} ${className}`}>
      <div className={styles.overlay} />
      <span className={styles.title}>{title}</span>

      <Button href="/services" className={styles.button}>
        <Link href="/services">More Info</Link>
      </Button>
    </div>
  );
}
