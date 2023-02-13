import Link from 'next/link';

import styles from './Logo.module.scss';

export default function Logo({ className }) {
  return (
    <Link href="/">
      <span className={`${styles.logo} ${className}`}>labmark</span>
    </Link>
  );
}
