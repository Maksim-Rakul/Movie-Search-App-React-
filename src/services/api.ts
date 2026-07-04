import axios from "axios";


export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjdjZTM4ZjYwYWMzZDU0Njk2Yzk5MTFlYmVmYmViYSIsIm5iZiI6MTc1NzI2MDgxMS43OTgsInN1YiI6IjY4YmRhYzBiNzYxOGJkMzVjMTFiYzc5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J7vV5ffLSgkB9qdJhbdhjkhNpcc8zxloY_nIsnnG63Q`,
  },
});

