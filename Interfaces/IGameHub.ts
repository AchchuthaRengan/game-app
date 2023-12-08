import { Url } from "url";

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  description_raw: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  rating: number;
  genres: Genres[];
  publishers: Publisher[];
}

interface Publisher {
  id: number;
  name: string;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

export interface Genres {
  id: number;
  name: string;
  slug: string;
  image_background: string;
  description: string;
  games: Game[];
}

export interface GenresResponse {
  count: number;
  results: Genres[];
}

export interface GameResponse {
  count: number;
  results: Game[];
}

export interface APIResponse {
  fetchedGames: Array<any>;
  message?: string;
}
