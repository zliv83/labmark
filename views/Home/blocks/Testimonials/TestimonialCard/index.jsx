import { Gelasio } from '@next/font/google';

import Avatar from '@/components/Avatar';
import styles from './TestimonialCard.module.scss';

const font = Gelasio({
  subsets: ['latin'],
  weight: ['400'],
  style: 'italic',
});

export default function TestimonialCard({ avatarImage, quote }) {
  return (
    <div className={styles.testimonialCard}>
      <Avatar className={avatarImage} />
      <blockquote className={styles.blockquotes}>
        <p className={`${styles.text} ${font.className}`}>{quote}</p>
      </blockquote>
    </div>
  );
}
