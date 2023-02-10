import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SidebarNav.module.scss';

export default function SidebarNav({ icon, title, href }) {
  return (
    <div className={styles.sidebarNav}>
      <FontAwesomeIcon className={styles.icon} icon={icon} />
      <Link href={href}>
        <span className={styles.title}>{title}</span>
      </Link>
    </div>
  );
}
