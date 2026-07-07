export interface MultiSearch {
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    media_type: string
    original_name?: string;
    original_title?: string;
    overview: string;
    poster_path: string;
    name?: string;
    title?: string;
    vote_average: number;
    first_air_date?: string;
    release_date?: string;
}

interface Author {
    avatar_path: string;
    name: string;
    rating: number;
}

export interface Review {
    author_details: Author;
    created_at: string
    content: string;
}

export interface Video {
    id: string;
    key: string
    name: string;
    type: string
}

export interface Picture {
    file_path: string
}