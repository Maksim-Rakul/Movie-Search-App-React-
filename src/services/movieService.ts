import type { Movie, MovieGenre } from "../types/movie";
import { api } from "./api";

interface MovieHTTPResponse {
    results: Movie[]
}

interface MovieGenresHTTPResponse {
  genres: MovieGenre[]
}


export const getBanerMovies = async (): Promise<MovieHTTPResponse> => {
    const res = await api.get<MovieHTTPResponse>("/movie/now_playing");

    return res.data
};

export const getMovieGenres = async (): Promise<MovieGenresHTTPResponse> => {
  const res = await api.get<MovieGenresHTTPResponse>('/genre/movie/list')

  return res.data
}

export const getMoviesByGenres = async (genreId: number): Promise<MovieHTTPResponse> => {
  const res = await api.get<MovieHTTPResponse>("/discover/movie", {
    params: {
      with_genres: genreId,
    },
  });

  return res.data;
};

export const getPopularMovie = async (): Promise<MovieHTTPResponse> => {
  const res = await api.get<MovieHTTPResponse>("/movie/popular");
  return res.data;
};

export const getTopRatedMovie = async (): Promise<MovieHTTPResponse> => {
  const res = await api.get<MovieHTTPResponse>("/movie/top_rated");

  return res.data;
};

export const getSoonMovie = async (): Promise<MovieHTTPResponse> => {
  const res = await api.get<MovieHTTPResponse>("/movie/upcoming");

  return res.data;
};

