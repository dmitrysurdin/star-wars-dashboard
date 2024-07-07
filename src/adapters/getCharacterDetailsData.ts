import { CharacterDetails, PersonApiResponse } from 'types/people';

export const getCharacterDetailsData = (person: PersonApiResponse): CharacterDetails => ({
  name: person?.name ?? '',
  height: person?.height ?? '',
  mass: person?.mass ?? '',
  hairColor: person?.hair_color ?? '',
  skinColor: person?.skin_color ?? '',
  eyeColor: person?.eye_color ?? '',
  birthYear: person?.birth_year ?? '',
  gender: person?.gender ?? '',
});
