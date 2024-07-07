import { ChangeEvent, FC, useCallback, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Grid, Pagination, TextField, Typography } from '@mui/material';
import debounce from 'lodash/debounce';
import { Card } from 'components/Card';
import { Loader } from 'components/Loader/Loader';
import { SEARCH_DEBOUNCE_TIMER, DEFAULT_PAGE } from './const';
import { useDashboard } from './hooks/useDashboard';
import { usePagination } from './hooks/usePagination';
import styles from './Dashboard.module.scss';

export const Dashboard: FC = () => {
  const [searchText, setSearchText] = useState('');

  const { data, loading, error } = useDashboard();
  const { currentPage, pagesCount, onPageChange } = usePagination({ page: data?.count });
  const [, setSearchParams] = useSearchParams();

  const handlePageChange = (_: ChangeEvent<unknown>, value: number) => {
    setSearchParams({ page: String(value) });
    onPageChange(value);
  };

  // eslint-disable-next-line
  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setSearchParams({ search: value, page: String(DEFAULT_PAGE) });
      onPageChange(DEFAULT_PAGE);
    }, SEARCH_DEBOUNCE_TIMER),
    []
  );

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    debouncedSearch(event.target.value);
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <Typography variant="h4" component="h3" className={styles.title}>
        All Characters
      </Typography>
      <TextField
        label="Search"
        variant="filled"
        value={searchText}
        onChange={handleSearchChange}
        className={styles.searchField}
      />
      {loading ? (
        <Loader />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};
