export interface PersonApiResponse {
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

export interface PeopleApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<PersonApiResponse>;
}

export interface MinimumPersonInfo {
  name: string;
  id: string;
}

export interface People {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<MinimumPersonInfo>;
}
