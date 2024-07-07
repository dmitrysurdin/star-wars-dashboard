import { useCallback, useEffect, useState } from 'react';
import { getAllCharactersData } from 'adapters/getAllCharactersData';
import { People } from 'types';
import { useSearchParams } from 'react-router-dom';
import { fetchAllCharacters } from 'api';
import { DEFAULT_PAGE } from '../const';

const DEFAULT_PEOPLE_DATA = {
  count: null,
  next: '',
  previous: '',
  results: [],
};

export const useDashboard = () => {
  const [peopleData, setPeopleData] = useState<People>(DEFAULT_PEOPLE_DATA);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : DEFAULT_PAGE;

  const searchParam = searchParams.get('search') ?? '';

  const getDashboardData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchAllCharacters({ page, search: searchParam });
      const minimalPeopleData = getAllCharactersData(data);

      setPeopleData(minimalPeopleData);
    } catch (e: unknown) {
      // @ts-ignore
      setError(e?.message ?? 'Failed to fetch data');
    } finally {
      setLoading(false);
    }
  }, [page, searchParam]);

  useEffect(() => {
    getDashboardData();
  }, [getDashboardData]);

  return { data: peopleData, loading, error };
};
