import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faTiktok,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import styles from './Socials.module.scss';

export default function Socials() {
  const socials = [
    {
      href: 'https://www.facebook.com/',
      icon: faFacebook,
      key: 1,
    },
    {
      href: 'https://twitter.com/',
      icon: faTwitter,
      key: 2,
    },
    {
      href: 'https://www.tiktok.com/',
      icon: faTiktok,
      key: 3,
    },
    {
      href: 'https://www.instagram.com/',
      icon: faInstagram,
      key: 4,
    },
  ];

  const socialLinks = socials.map((social) => (
    <Link href={social.href} key={social.key}>
      <FontAwesomeIcon icon={social.icon} className={styles.icons} />
    </Link>
  ));

  return <div className={styles.socials}>{socialLinks}</div>;
}
