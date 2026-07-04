import type { MultiSearch } from "../types/multi";
import { api } from "./api";


interface GetKeywordHTTPResponse {
  results: MultiSearch[]
}

export const getKeyword = async (keyword: string) => {
    const res = await api.get<GetKeywordHTTPResponse>(`/search/multi?query=${keyword}`);
    
    return res.data;
}

export const getByTrands = async (type: string, time: string) => {
  const res = await api.get(`/trending/${type}/${time}`);

  return res.data;
};