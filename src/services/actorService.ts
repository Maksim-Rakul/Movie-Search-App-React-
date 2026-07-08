import type { Actor } from "../types/actor";
import type { Movie } from "../types/movie";
import type { TV } from "../types/tv";
import { api } from "./api";

interface ActorMoviesRes {
  cast: Movie[]
}

interface ActorTvsRes {
  cast: TV[]
}

export const getActorById = async (id: string) => {
  const res = await api.get<Actor>(`/person/${id}`);

  return res.data;
};

export const getMoviesByActorId = async (id: string) => {
  const res = await api.get<ActorMoviesRes>(`/person/${id}/movie_credits`);

  return res.data;
};

export const getSerialsByActorId = async (id: string) => {
  const res = await api.get<ActorTvsRes>(`/person/${id}/tv_credits`);
  
  return res.data;
};

export const getImgByActorId = async (id: string) => {
  const res = await api.get(`/person/${id}/images`);

  return res.data;
};