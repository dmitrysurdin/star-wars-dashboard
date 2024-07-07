import { APIUrl } from 'const';
import { PeopleApiResponse } from 'types';
import { api } from '../api';

interface FetchPeopleParams {
  page: number;
  search?: string;
}

export const fetchPeople = async ({ page, search }: FetchPeopleParams) => {
  const response = await api.get<PeopleApiResponse>({
    url: APIUrl.People,
    params: { page, search },
  });

  return response;
};
