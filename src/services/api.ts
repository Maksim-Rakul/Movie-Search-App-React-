import axios from "axios";
import type { MultiSearch } from "../types/multi";

interface GetKeywordHTTPResponse {
  results: MultiSearch[]
}

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjdjZTM4ZjYwYWMzZDU0Njk2Yzk5MTFlYmVmYmViYSIsIm5iZiI6MTc1NzI2MDgxMS43OTgsInN1YiI6IjY4YmRhYzBiNzYxOGJkMzVjMTFiYzc5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J7vV5ffLSgkB9qdJhbdhjkhNpcc8zxloY_nIsnnG63Q`,
  },
});

export const getKeyword = async (keyword: string) => {
    const res = await api.get<GetKeywordHTTPResponse>(`/search/multi?query=${keyword}`);
    console.log(res.data);
    
    return res.data;
}
