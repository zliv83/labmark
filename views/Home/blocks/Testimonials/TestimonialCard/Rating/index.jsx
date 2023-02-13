import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import styles from './Rating.module.scss';

export default function Rating({ stars }) {
  return (
    <div className={styles.rating}>
      <FontAwesomeIcon
        icon={faStar}
        className={stars >= 1 ? styles.checked : styles.unchecked}
      />
      <FontAwesomeIcon
        icon={faStar}
        className={stars >= 2 ? styles.checked : styles.unchecked}
      />
      <FontAwesomeIcon
        icon={faStar}
        className={stars >= 3 ? styles.checked : styles.unchecked}
      />
      <FontAwesomeIcon
        icon={faStar}
        className={stars >= 4 ? styles.checked : styles.unchecked}
      />
      <FontAwesomeIcon
        icon={faStar}
        className={stars >= 5 ? styles.checked : styles.unchecked}
      />
    </div>
  );
}
