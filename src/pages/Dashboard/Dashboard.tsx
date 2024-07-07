import { FC } from 'react';
import { Grid, Typography } from '@mui/material';
import { Card } from 'components/Card';
import styles from './Dashboard.module.scss';
import { usePeople } from '../../hooks/usePeople';

export const Dashboard: FC = () => {
  const { data, loading, error } = usePeople();

  if (loading) {
    return <p>...Loading</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <Typography variant="h4" component="h3" className={styles.title}>
        All Characters
      </Typography>
      <div className={styles.contentWrapper}>
        <Grid container spacing={2}>
          {data.map(({ name, id }) => (
            <Grid xs={8} sm={6} md={4} lg={2} key={id} item>
              <Card name={name} id={id} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};
