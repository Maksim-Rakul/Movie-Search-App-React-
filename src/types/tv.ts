export interface TV {
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    name: string;
    vote_average: number;
}

export interface TvGenre {
    id: number;
    name: string
}