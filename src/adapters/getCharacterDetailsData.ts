import { CharacterDetails, CharacterApiResponse } from 'types/characters';

export const getCharacterDetailsData = (character: CharacterApiResponse): CharacterDetails => ({
  name: character?.name ?? '',
  height: character?.height ?? '',
  mass: character?.mass ?? '',
  hairColor: character?.hair_color ?? '',
  skinColor: character?.skin_color ?? '',
  eyeColor: character?.eye_color ?? '',
  birthYear: character?.birth_year ?? '',
  gender: character?.gender ?? '',
});
