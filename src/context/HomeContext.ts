import { createContext, useContext} from "react";

interface MovieListContextType {
    activeGenre: number;
    setActiveGenre: (genreId: number) => void;
    genreType: string
    setGenreType: (type: string) => void
};

export const MovieListContext = createContext<MovieListContextType | null>(null);

export const useMovieListContext = () => {
    const context = useContext(MovieListContext)

    if (!context) {
        throw new Error("GenreItem must be used within a MovieListProvider");
    }
    
    return context
}