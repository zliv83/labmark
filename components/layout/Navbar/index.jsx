import { useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

import styles from './Navbar.module.scss';
import Logo from '@/components/layout/Logo';
import useScrollPosition from '@/lib/useScrollPosition';
import { SidebarContext } from '@/lib/SidebarProvider';

export default function Navbar({ invert }) {
  const scrollPosition = useScrollPosition();
  const trigger = scrollPosition > 50;
  const { sidebarOpen, sidebarToggle } = useContext(SidebarContext);

  const style = () => {
    if (invert && !trigger) return styles.navbarInvert;
    if (invert && trigger) return styles.navbarTrigger;
    return styles.navbar;
  };

  return (
    <div className={style()}>
      <Logo />
      <FontAwesomeIcon
        className={styles.icon}
        icon={sidebarOpen ? faX : faBars}
        onClick={sidebarToggle}
      />
    </div>
  );
}
