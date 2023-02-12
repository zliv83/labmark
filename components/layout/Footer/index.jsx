import Socials from '../Socials';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.copyright}>
        © {new Date().getFullYear()} Labmark Roofing Siding Exteriors, Powel,
        Ohio - All rights reserved
      </span>
      <div className={styles.divider} />
      <Socials />
    </footer>
  );
}
