import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import styles from './Main.module.scss';

export default function Main({ children }) {
  return (
    <div className={styles.main}>
      <Navbar />
      {children}
      <Sidebar />
    </div>
  );
}
