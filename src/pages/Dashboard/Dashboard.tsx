import { FC } from 'react';
import { Grid, Typography } from '@mui/material';
import { Card } from 'components/Card';
import styles from './Dashboard.module.scss';

export const Dashboard: FC = () => (
  <div>
    <Typography variant="h4" component="h3" className={styles.title}>
      All Characters
    </Typography>
    <div className={styles.contentWrapper}>
      <Grid container spacing={2}>
        <Grid item xs={8} sm={6} md={4} lg={2}>
          <Card id="1" />
        </Grid>
        <Grid item xs={8} sm={6} md={4} lg={2}>
          <Card id="2" />
        </Grid>
        <Grid item xs={8} sm={6} md={4} lg={2}>
          <Card id="3" />
        </Grid>
        <Grid item xs={8} sm={6} md={4} lg={2}>
          <Card id="4" />
        </Grid>
      </Grid>
    </div>
  </div>
);
