import styles from './Button.module.scss';

export default function Button({ className, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.button} ${className}`}
    >
      {children}
    </button>
  );
}
