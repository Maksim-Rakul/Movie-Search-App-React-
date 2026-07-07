import type { Actor } from "../types/actor";
import type { Movie } from "../types/movie";
import type { MultiSearch, Picture, Review, Video } from "../types/multi";
import type { TV } from "../types/tv";
import { api } from "./api";

export type Type = "movie" | "tv";

interface GetKeywordHTTPResponse {
  results: MultiSearch[]
}

interface ActorsHTTPResponse {
  cast: Actor[]
}

interface RecHTTPResponse {
  results: Movie[] | TV[]
}

interface ReviewsHTTPResponse {
  results: Review[]
}

interface VideoHTTPResponse {
  results: Video[]
}

interface PictureHTTPResponse {
  posters: Picture[]
}


export const getKeyword = async (keyword: string) => {
    const res = await api.get<GetKeywordHTTPResponse>(`/search/multi?query=${keyword}`);
    
    return res.data;
}

export const getByTrands = async (type: string, time: string) => {
  const res = await api.get(`/trending/${type}/${time}`);

  return res.data;
};

// PAGE API EDNPOINTS

export const getById = async (type: string, id: string) => {
  const res = await api.get<TV | Movie>(`/${type}/${id}`);

  return res.data;
};

export const getActorsById = async (type: string, id: string) => {
  const res = await api.get<ActorsHTTPResponse>(`/${type}/${id}/credits`);
  
  return res.data;
};

export const getRecById = async (type: string, id: string) => {
  const res = await api.get<RecHTTPResponse>(`/${type}/${id}/recommendations`);

  return res.data;
};

export const getReviewsById = async (type: string, id: string) => {
  const res = await api.get<ReviewsHTTPResponse>(`/${type}/${id}/reviews`);

  return res.data;
};

export const getVideoById = async (type: string, id: string) => {
  const res = await api.get<VideoHTTPResponse>(`/${type}/${id}/videos`);

  return res.data;
};

export const getImgById = async (type: string, id: string) => {
   const res = await api.get<PictureHTTPResponse>(`/${type}/${id}/images`);

  return res.data;
};