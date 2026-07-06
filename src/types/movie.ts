import type { TV } from "./tv";

export interface Movie {
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    title: string;
    vote_average: number;
    vote_count: number;
    genres: MovieGenre[]
    runtime: string
    original_language: string;
    budget: number
    tagline: string
}

export interface MovieGenre {
    id: number;
    name: string
}

export interface MovieList {
  cinema?: Movie[];
  popular?: Movie[];
  soon?: Movie[];
  top?: Movie[];
  popularTv?: TV[];
  topTv?: TV[];
}

export interface AllMovieAndTypes {
    movies: Movie[] | TV[];
    type: 'movie' | 'tv'
}

export interface AllMovieFetchProps {
    cinema: AllMovieAndTypes;
    popular: AllMovieAndTypes;
    topRated: AllMovieAndTypes;
    commingSoon: AllMovieAndTypes;
    popularTv: AllMovieAndTypes
    topRatedTv: AllMovieAndTypes
}