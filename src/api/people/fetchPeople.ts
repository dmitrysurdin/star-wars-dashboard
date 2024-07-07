import { APIUrl } from 'const';
import { PeopleApiResponse } from 'types';
import { api } from '../api';

interface FetchPeopleParams {
  page: number;
}

export const fetchPeople = async ({ page }: FetchPeopleParams) => {
  const response = await api.get<PeopleApiResponse>({ url: APIUrl.People, params: { page } });

  return response;
};
