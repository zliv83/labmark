import { Gelasio } from '@next/font/google';

import Avatar from '@/components/Avatar';
import Rating from './Rating';
import styles from './TestimonialCard.module.scss';

const font = Gelasio({
  subsets: ['latin'],
  weight: ['400'],
  style: 'italic',
});

export default function TestimonialCard({ avatarImage, quote, stars, name }) {
  return (
    <div className={styles.testimonialCard}>
      <Avatar className={avatarImage} />
      <Rating stars={stars} />
      <blockquote className={styles.blockquotes}>
        <p className={`${styles.text} ${font.className}`}>{quote}</p>
      </blockquote>
      <span className={styles.credit}>{name}</span>
    </div>
  );
}
