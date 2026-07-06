import type { Actor } from "../types/actor";
import type { Movie, MovieGenre } from "../types/movie";
import type { Picture, Review, Video } from "../types/multi";
import { api } from "./api";

interface MovieHTTPResponse {
    results: Movie[]
}

interface MovieGenresHTTPResponse {
  genres: MovieGenre[]
}

interface MovieActorsHTTPResponse {
  cast: Actor[]
}

interface MovieReviewsHTTPResponse {
  results: Review[]
}

interface MovieVideoHTTPResponse {
  results: Video[]
}

interface MoviePictureHTTPResponse {
  posters: Picture[]
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

export const getMoviesByType = async (type: string) => {
  const res = await api.get<MovieHTTPResponse>(`/movie/${type}`)

  return res.data
}

export const getMovieById = async (id: string) => {
  const res = await api.get<Movie>(`/movie/${id}`);

  return res.data;
};

export const getActorsByMovieId = async (id: string) => {
  const res = await api.get<MovieActorsHTTPResponse>(`/movie/${id}/credits`);
  
  return res.data;
};

export const getRecByMovieId = async (id: string) => {
  const res = await api.get<MovieHTTPResponse>(`/movie/${id}/recommendations`);

  return res.data;
};

export const getReviewsByMovieId = async (id: string) => {
  const res = await api.get<MovieReviewsHTTPResponse>(`/movie/${id}/reviews`);

  return res.data;
};

export const getVideoByMovieId = async (id: string) => {
  const res = await api.get<MovieVideoHTTPResponse>(`/movie/${id}/videos`);

  return res.data;
};

export const getGalleryByMovieId = async (id: string) => {
  const res = await api.get<MoviePictureHTTPResponse>(`/movie/${id}/images`);

  return res.data;
};