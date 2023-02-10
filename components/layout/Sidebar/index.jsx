import { useContext } from 'react';

import {
  faCircleInfo,
  faHouse,
  faEnvelope,
  faBellConcierge,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Sidebar.module.scss';
import Backdrop from '@/components/utilities/Backdrop';
import { SidebarContext } from '@/lib/SidebarProvider';
import Logo from '../Logo';
import SidebarNav from './SidebarNav';
import Socials from '../Socials';

export default function Sidebar() {
  const { sidebarOpen, sidebarToggle } = useContext(SidebarContext);

  const links = [
    {
      href: '/',
      title: 'Home',
      icon: faHouse,
      key: 1,
    },
    {
      href: '/contact',
      title: 'Contact',
      icon: faEnvelope,
      key: 2,
    },
    {
      href: '/services',
      title: 'Services',
      icon: faBellConcierge,
      key: 3,
    },
    {
      href: '/about',
      title: 'About',
      icon: faCircleInfo,
      key: 4,
    },
  ];

  const navLinks = links.map((link) => (
    <SidebarNav
      href={link.href}
      title={link.title}
      icon={link.icon}
      key={link.key}
    />
  ));

  return (
    <>
      <div
        className={styles.sideBar}
        style={{
          transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
        }}
      >
        <Logo className={styles.logo} />
        <div className={styles.navLinks}>{navLinks}</div>
        <div className={styles.socials}>
          <Socials />
        </div>
      </div>
      <Backdrop show={sidebarOpen} backdropClose={sidebarToggle} />
    </>
  );
}
