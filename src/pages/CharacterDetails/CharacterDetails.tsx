import { FC } from 'react';
import { Typography } from '@mui/material';
import styles from './CharacterDetails.module.scss';

export const CharacterDetails: FC = () => (
  <Typography variant="h4" component="h3" className={styles.title}>
    Character Details
  </Typography>
);
