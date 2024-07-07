import { APIUrl } from 'const';
import { PeopleApiResponse } from 'types';
import { api } from '../api';

interface FetchAllCharactersParams {
  page?: number;
  search?: string;
}

export const fetchAllCharacters = async ({ page, search }: FetchAllCharactersParams) => {
  const response = await api.get<PeopleApiResponse>({
    url: APIUrl.People,
    params: { page, search },
  });

  return response;
};
