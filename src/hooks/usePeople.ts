import { useCallback, useEffect, useState } from 'react';
import { fetchPeople } from 'api';
import { getMinimalPeopleData } from 'adapters/getMinimalPeopleData';
import { MinimumPersonInfo } from 'types';

const DEFAULT_PAGE = 1;

interface UsePeopleParams {
  page?: number;
}

export const usePeople = ({ page = DEFAULT_PAGE }: UsePeopleParams = {}) => {
  const [peopleData, setPeopleData] = useState<Array<MinimumPersonInfo>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchPeople({ page });
      const minimalData = getMinimalPeopleData(data, page);

      setPeopleData(minimalData.results);
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
