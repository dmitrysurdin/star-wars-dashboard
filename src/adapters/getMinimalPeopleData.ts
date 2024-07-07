import { MinimumPersonInfo, People, PeopleApiResponse, PersonApiResponse } from 'types/people';
import { ITEMS_PER_PAGE } from '../pages/Dashboard';

const getMinimalPersonData = (
  peopleResults: Array<PersonApiResponse>,
  page: number
): Array<MinimumPersonInfo> => {
  if (!peopleResults) {
    return [];
  }

  return peopleResults.map((person, index) => ({
    name: person?.name ?? '',
    id: ((page - 1) * ITEMS_PER_PAGE + index + 1).toString(),
  }));
};

export const getMinimalPeopleData = (people: PeopleApiResponse, page: number): People => ({
  count: people?.count ?? null,
  next: people?.next ?? null,
  previous: people?.previous ?? null,
  results: getMinimalPersonData(people?.results, page),
});
