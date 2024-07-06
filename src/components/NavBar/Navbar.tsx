import { ReactComponent as NavIcon } from 'assets/icons/Cone.svg';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import styles from './Navbar.module.scss';
import { AppRoute } from '../../const';

export const Navbar = () => (
  <div className={styles.wrapper}>
    <Link to={AppRoute.Dashboard} className={styles.link}>
      <NavIcon className={styles.icon} />
      <Typography variant="h6" component="h2" className={styles.text}>
        StarWars Dashboard
      </Typography>
    </Link>
  </div>
);
