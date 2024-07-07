import { FC } from 'react';
import { CircularProgress } from '@mui/material';
import styles from './Loader.module.scss';

export const Loader: FC = () => (
  <div className={styles.loader}>
    <CircularProgress data-testid="loader" />
  </div>
);
