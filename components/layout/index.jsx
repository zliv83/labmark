import styles from './Layout.module.scss';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Navbar />
      {children}
      <Sidebar />
    </div>
  );
}
