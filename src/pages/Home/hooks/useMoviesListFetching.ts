import { useEffect, useState } from "react"
import type { Movie } from "../../../types/movie"
import { getBanerMovies, getMoviesByGenres, getPopularMovie, getSoonMovie, getTopRatedMovie } from "../../../services/movieService"
import { getPopularTV, getTopRatedTV } from "../../../services/tvService"
import type { TV } from "../../../types/tv"

interface AllMovie {
    movies: Movie[] | TV[];
    name: string;
}

export const useMoviesListFetching = (genreId: number, genreType: string) => {
    const [allMovies, setAllMovies] = useState<AllMovie[]>([])

    const [moviesByGenre, setMovieByGenre] = useState<Movie[] | TV[]>()

    const [isLoadingList, setIsLoadingList] = useState(false)
    const [isErrorList, setIsErrorList] = useState(false)

    useEffect(() => {
        const fetching = async () => {
            setIsErrorList(false)
            setIsLoadingList(true)
            try {
                const cinema = await getBanerMovies()
                const popular = await getPopularMovie()
                const top = await getTopRatedMovie()
                const soon = await getSoonMovie()
                const popularTv = await getPopularTV()
                const topTv = await getTopRatedTV()

                setAllMovies([{movies: cinema.results, name: 'cinema'}])
                setAllMovies((prev) => [...prev, {movies: popular.results, name: 'popular'}])
                setAllMovies((prev) => [...prev, {movies: top.results, name: 'top'}])
                setAllMovies((prev) => [...prev, {movies: soon.results, name: 'soon'}])
                setAllMovies((prev) => [...prev, {movies: popularTv.results, name: 'popularTv'}])
                setAllMovies((prev) => [...prev, {movies: topTv.results, name: 'topTv'}])

            } catch {
                setIsErrorList(true)
            } finally {
                setIsLoadingList(false)  
            }
        }

        const fetchingByGenre = async (genreId: number) => {
            setIsErrorList(false)
            setIsLoadingList(true)
            try {
                const movieByGenre = await getMoviesByGenres(genreId)
                
                setMovieByGenre(movieByGenre.results)
                
            } catch {
                setIsErrorList(true)
            } finally {
                setIsLoadingList(false)  
            }
        }

        if (genreId !== 0) {
            fetchingByGenre(genreId)
        } else {
            fetching()
        }

    }, [genreId, genreType])

    if (genreId !== 0) {
        return {
            isLoadingList,
            isErrorList,
            type: "genre",
            movies: moviesByGenre
            }
    } else {
        return {
            isLoadingList,
            isErrorList,
            type: 'all',
            movies: allMovies
        }
    }
}