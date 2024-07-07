import { APIUrl } from 'const';
import { PersonApiResponse } from 'types';
import { api } from '../api';

interface FetchCharacterDetailsByIdParams {
  id?: string;
}

export const fetchCharacterDetailsById = async ({ id }: FetchCharacterDetailsByIdParams) => {
  const response = await api.get<PersonApiResponse>({
    url: `${APIUrl.People}/${id}`,
  });

  return response;
};
