import Footer from './Footer';
import styles from './Layout.module.scss';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Layout({ children, invert }) {
  return (
    <div className={styles.layout}>
      <Navbar invert={invert} />
      {children}
      <Footer />
      <Sidebar />
    </div>
  );
}
