import {
  MinimumCharacterInfo,
  Characters,
  CharactersApiResponse,
  CharacterApiResponse,
} from 'types/characters';
import { extractIdFromUrl } from 'utils/extractIdFromUrl';

const getMinimumCharacterData = (
  charactersResults: Array<CharacterApiResponse>
): Array<MinimumCharacterInfo> => {
  if (!charactersResults) {
    return [];
  }

  return charactersResults.map((character) => ({
    name: character?.name ?? '',
    id: extractIdFromUrl(character.url),
  }));
};

export const getAllCharactersData = (characters: CharactersApiResponse): Characters => ({
  count: characters?.count ?? null,
  next: characters?.next ?? null,
  previous: characters?.previous ?? null,
  results: getMinimumCharacterData(characters?.results),
});
