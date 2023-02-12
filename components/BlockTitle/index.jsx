import styles from './BlockTitle.module.scss';

export default function BlockTitle({ title, className }) {
  return (
    <div className={`${styles.titleContainer} ${className}`}>
      <span className={styles.title}>{title}</span>
    </div>
  );
}
