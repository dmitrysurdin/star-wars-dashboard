import { MinimumPersonInfo, People, PeopleApiResponse, PersonApiResponse } from 'types/people';
import { extractIdFromUrl } from 'utils/extractIdFromUrl';

const getMinimalPersonData = (
  peopleResults: Array<PersonApiResponse>
): Array<MinimumPersonInfo> => {
  if (!peopleResults) {
    return [];
  }

  return peopleResults.map((person) => ({
    name: person?.name ?? '',
    id: extractIdFromUrl(person.url),
  }));
};

export const getMinimalPeopleData = (people: PeopleApiResponse): People => ({
  count: people?.count ?? null,
  next: people?.next ?? null,
  previous: people?.previous ?? null,
  results: getMinimalPersonData(people?.results),
});
