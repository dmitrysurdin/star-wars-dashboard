import { ChangeEvent, FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Grid, Pagination, Typography } from '@mui/material';
import { Card } from 'components/Card';
import { useDashboard } from './hooks/useDashboard';
import { usePagination } from './hooks/usePagination';
import styles from './Dashboard.module.scss';

export const Dashboard: FC = () => {
  const { data, loading, error } = useDashboard();
  const { currentPage, pagesCount, onPageChange } = usePagination({ page: data?.count });
  const [, setSearchParams] = useSearchParams();

  const handlePageChange = (_: ChangeEvent<unknown>, value: number) => {
    setSearchParams({ page: String(value) });
    onPageChange(value);
  };

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
          {data?.results.map(({ name, id }) => (
            <Grid xs={8} sm={6} md={4} lg={2} key={id} item>
              <Card name={name} id={id} />
            </Grid>
          ))}
        </Grid>
      </div>
      <div className={styles.paginationWrapper}>
        <Pagination count={pagesCount} page={currentPage} onChange={handlePageChange} />
      </div>
    </div>
  );
};
