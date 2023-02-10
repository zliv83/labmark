import { useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

import styles from './Navbar.module.scss';
import Logo from '@/components/layout/Logo';
import useScrollPosition from '@/lib/useScrollPosition';
import { SidebarContext } from '@/lib/SidebarProvider';

export default function Navbar() {
  const scrollPosition = useScrollPosition();
  const trigger = scrollPosition > 50;
  const { sidebarOpen, sidebarToggle } = useContext(SidebarContext);

  return (
    <div
      className={styles.navbar}
      style={{
        boxShadow: trigger ? '1px 2px 5px 1px rgba(0, 0, 0, 0.2)' : 'none',
      }}
    >
      <Logo />
      <FontAwesomeIcon
        className={styles.icon}
        icon={sidebarOpen ? faX : faBars}
        onClick={sidebarToggle}
      />
    </div>
  );
}
