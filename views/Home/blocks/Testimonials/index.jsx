import BlockTitle from '@/components/BlockTitle';
import TestimonialCard from './TestimonialCard';
import styles from './Testimonials.module.scss';

export default function Testimonials() {
  const cards = [
    {
      avatarImage: styles.avatar1,
      key: 1,
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      avatarImage: styles.avatar2,
      key: 2,
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      avatarImage: styles.avatar3,
      key: 3,
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];
  const testimonials = cards.map((card) => (
    <TestimonialCard
      key={card.key}
      avatarImage={card.avatarImage}
      quote={card.quote}
    />
  ));
  return (
    <div className={styles.testimonials}>
      <BlockTitle title="Testimonials" className={styles.blockTitle} />
      {testimonials}
    </div>
  );
}
