import type { Actor } from "../types/actor";
import { api } from "./api";



export const getActorById = async (id: string) => {
  const res = await api.get<Actor>(`/person/${id}`);
    
  return res.data;
};