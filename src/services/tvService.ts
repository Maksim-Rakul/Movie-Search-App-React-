import type { TV, TvGenre } from "../types/tv"
import { api } from "./api"

interface TvHTTTPResponse {
    results: TV[]
}

interface TvGenresHTTPResponse {
  genres: TvGenre[]
}

export const getTvGenres = async (): Promise<TvGenresHTTPResponse> => {
  const res = await api.get<TvGenresHTTPResponse>('/genre/tv/list')

  return res.data
}

export const getPopularTV = async (): Promise<TvHTTTPResponse> => {
    const res = await api.get<TvHTTTPResponse>("/tv/popular");
    
  return res.data;
};

export const getTopRatedTV = async (): Promise<TvHTTTPResponse> => {
    const res = await api.get<TvHTTTPResponse>("/tv/top_rated");
    
  return res.data;
};

export const getTVByGenres = async (serialId: number) => {
  const res = await api.get("/discover/tv", {
    params: {
      with_genres: serialId,
    },
  });

  return res.data;
};

export const getTvByType = async (type: string) => {
  const res = await api.get<TvHTTTPResponse>(`/tv/${type}`)

  return res.data
}

export const getTvById = async (id: string) => {
  const res = await api.get<TV>(`/tv/${id}`);

  return res.data;
};