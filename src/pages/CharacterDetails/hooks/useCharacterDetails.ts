import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { CharacterDetails } from 'types';
import { fetchCharacterDetailsById } from 'api';
import { getCharacterDetailsData } from 'adapters';

export const useCharacterDetails = () => {
  const { id } = useParams<{ id: string }>();

  const [characterDetails, setCharacterDetails] = useState<CharacterDetails | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCharacterDetails = async () => {
      try {
        const data = await fetchCharacterDetailsById({ id });
        const characterDetailsData = getCharacterDetailsData(data);

        setCharacterDetails(characterDetailsData);
      } catch (e) {
        // @ts-ignore
        setError(e?.message ?? 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    getCharacterDetails();
  }, [id]);

  return { data: characterDetails, loading, error, setCharacterDetails };
};
