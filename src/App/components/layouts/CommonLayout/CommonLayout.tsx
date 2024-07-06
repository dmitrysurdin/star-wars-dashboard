import { Outlet } from 'react-router';
import styles from './CommonLayout.module.scss';

export const CommonLayout = () => (
  <div className={styles.layout}>
    <div className={styles.content}>
      <Outlet />
    </div>
  </div>
);
