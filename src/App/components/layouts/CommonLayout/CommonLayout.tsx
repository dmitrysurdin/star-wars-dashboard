import { Outlet } from 'react-router';
import { Navbar } from 'components/NavBar';
import styles from './CommonLayout.module.scss';

export const CommonLayout = () => (
  <>
    <Navbar />
    <div className={styles.content}>
      <Outlet />
    </div>
  </>
);
