import { ReactComponent as NavIcon } from 'assets/icons/Cone.svg';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { AppRoute } from '../../const';

export const Navbar = () => (
  <div className={styles.wrapper}>
    <Link to={AppRoute.Dashboard} className={styles.link}>
      <NavIcon className={styles.icon} />
      <h2 className={styles.text}>StarWars Dashboard</h2>
    </Link>
  </div>
);
