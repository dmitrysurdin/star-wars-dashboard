export interface CharacterApiResponse {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: Array<string>;
  species: Array<string>;
  vehicles: Array<string>;
  starships: Array<string>;
  created: string;
  edited: string;
  url: string;
}

export interface CharactersApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<CharacterApiResponse>;
}

export interface MinimumCharacterInfo {
  name: string;
  id: string;
}

export interface Characters {
  count: number | null;
  next: string | null;
  previous: string | null;
  results: Array<MinimumCharacterInfo>;
}

export interface CharacterDetails {
  name: string;
  height: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
  gender: string;
}
