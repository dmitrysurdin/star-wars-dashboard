import { APIUrl } from 'const';
import { CharactersApiResponse } from 'types';
import { api } from '../api';

interface FetchAllCharactersParams {
  page?: number;
  search?: string;
}

export const fetchAllCharacters = async ({ page, search }: FetchAllCharactersParams) => {
  const response = await api.get<CharactersApiResponse>({
    url: APIUrl.People,
    params: { page, search },
  });

  return response;
};
