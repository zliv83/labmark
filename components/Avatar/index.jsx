import styles from './Avatar.module.scss';

export default function Avatar({ className }) {
  return <div className={`${styles.avatar} ${className}`} />;
}
