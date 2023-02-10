import styles from './Logo.module.scss';

export default function Logo({ className }) {
  return <span className={`${styles.logo} ${className}`}>labmark</span>;
}
