import { useCallback, useEffect, useState } from 'react';
import { getAllCharactersData } from 'adapters/getAllCharactersData';
import { Characters } from 'types';
import { useSearchParams } from 'react-router-dom';
import { fetchAllCharacters } from 'api';
import { DEFAULT_PAGE } from '../const';

const DEFAULT_CHARACTERS_DATA = {
  count: null,
  next: '',
  previous: '',
  results: [],
};

export const useDashboard = () => {
  const [characterData, setCharacterData] = useState<Characters>(DEFAULT_CHARACTERS_DATA);

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
      const charactersData = getAllCharactersData(data);

      setCharacterData(charactersData);
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

  return { data: characterData, loading, error };
};
