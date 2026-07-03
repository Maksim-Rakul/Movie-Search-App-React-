import { getBanerMovies, getMovieGenres } from "../../../services/movieService";
import { getTvGenres } from "../../../services/tvService";
import type { Movie, MovieGenre } from "../../../types/movie";
import { useEffect, useState } from "react";

export const useHomeTopFetch = () => {
    const [movieData, setMovieData] = useState<Movie[]>([])
    const [movieGenres, setMovieGenres] = useState<MovieGenre[]>([])
    const [tvGenres, setTvGenres] = useState<MovieGenre[]>([])

    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const fetching = async () => {
            setIsError(false)
            setIsLoading(true)
            try {
                const movie = await getBanerMovies()
                const movieGenres = await getMovieGenres()
                const tvGenres = await getTvGenres()
                
                setMovieData(movie.results)
                setMovieGenres(movieGenres.genres)
                setTvGenres(tvGenres.genres)
            } catch {
                setIsError(true)
            } finally {
              setIsLoading(false)  
            }
        }
            fetching()
    }, [])

    return{ movie: movieData, genresMovie: movieGenres, tvGenres: tvGenres, isLoading, isError}
    
}