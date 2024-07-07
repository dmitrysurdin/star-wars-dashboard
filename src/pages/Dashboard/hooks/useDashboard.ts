import { useCallback, useEffect, useState } from 'react';
import { fetchPeople } from 'api';
import { getMinimalPeopleData } from 'adapters/getMinimalPeopleData';
import { People } from 'types';
import { useSearchParams } from 'react-router-dom';
import { DEFAULT_PAGE } from '../const';

export const useDashboard = () => {
  const [peopleData, setPeopleData] = useState<People>({
    count: null,
    next: '',
    previous: '',
    results: [],
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : DEFAULT_PAGE;

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchPeople({ page });
      const minimalData = getMinimalPeopleData(data, page);

      setPeopleData(minimalData);
    } catch (e: unknown) {
      // @ts-ignore
      setError(e?.message ?? 'Failed to fetch data');
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data: peopleData, loading, error };
};
