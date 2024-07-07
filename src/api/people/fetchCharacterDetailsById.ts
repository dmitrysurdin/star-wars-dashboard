import { APIUrl } from 'const';
import { CharacterApiResponse } from 'types';
import { api } from '../api';

interface FetchCharacterDetailsByIdParams {
  id?: string;
}

export const fetchCharacterDetailsById = async ({ id }: FetchCharacterDetailsByIdParams) => {
  const response = await api.get<CharacterApiResponse>({
    url: `${APIUrl.People}/${id}`,
  });

  return response;
};
