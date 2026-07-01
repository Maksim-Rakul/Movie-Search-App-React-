import { useEffect, useState } from "react"
import type { Movie } from "../../../types/movie"
import { getBanerMovies, getMoviesByGenres, getPopularMovie, getSoonMovie, getTopRatedMovie } from "../../../services/movieService"
import { getPopularTV, getTopRatedTV } from "../../../services/tvService"
import type { TV } from "../../../types/tv"

export const useMoviesListFetching = (genreId: number, genreType: string) => {
    const [cinemaMovie, setCinemaMovie] = useState<Movie[]>([])
    const [popularMovie, setPopularMovie] = useState<Movie[]>([])
    const [topMovie, setTopMovie] = useState<Movie[]>([])
    const [soonMovie, setSoonMovie] = useState<Movie[]>([])
    const [popularTv, setPopularTv] = useState<TV[]>([])
    const [topTv, setTopTv] = useState<TV[]>([])

    const [moviesByGenre, setMovieByGenre] = useState<Movie[]>()

    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const fetching = async () => {
            setIsError(false)
            setIsLoading(true)
            try {
                const cinema = await getBanerMovies()
                const popular = await getPopularMovie()
                const top = await getTopRatedMovie()
                const soon = await getSoonMovie()
                const popularTv = await getPopularTV()
                const topTv = await getTopRatedTV()
                
                setTopTv(topTv.results)
                setPopularTv(popularTv.results)
                setSoonMovie(soon.results)
                setTopMovie(top.results)
                setPopularMovie(popular.results)
                setCinemaMovie(cinema.results)

            } catch {
                setIsError(true)
            } finally {
                setIsLoading(false)  
            }
        }

        const fetchingByGenre = async (genreId: number) => {
            setIsError(false)
            setIsLoading(true)
            try {
                const movieByGenre = await getMoviesByGenres(genreId)
                
                setMovieByGenre(movieByGenre.results)

            } catch {
                setIsError(true)
            } finally {
                setIsLoading(false)  
            }
        }

        if (genreId !== 0) {
            fetchingByGenre(genreId)
        } else {
            fetching()
        }

    }, [genreId, genreType])

    return {
        cinema: cinemaMovie,
        popular: popularMovie,
        top: topMovie,
        soon: soonMovie,
        popularTv,
        topTv,
        moviesByGenre,
        isLoading,
        isError
    }
}