import { useEffect, useState } from "react"
import { getBanerMovies, getPopularMovie, getSoonMovie, getTopRatedMovie } from "../../../services/movieService"
import type { AllMovieFetchProps} from "../../../types/movie"
import { getPopularTV, getTopRatedTV } from "../../../services/tvService";

export const useMoviesListFetching = () => {
    const [allMovies, setAllMovies] = useState<AllMovieFetchProps>({
        cinema: { movies: [], type: 'movie' },
        popular: { movies: [], type: 'movie' },
        topRated: { movies: [], type: 'movie' },
        commingSoon: { movies: [], type: 'movie' },
        popularTv: { movies: [], type: 'tv' },
        topRatedTv: { movies: [], type: 'tv' }
    })
    const [isLoadingList, setIsLoadingList] = useState(false)
    const [isErrorList, setIsErrorList] = useState(false)

    useEffect(() => {
        const fetching = async () => {
            
            try {
                setIsErrorList(false)
            setIsLoadingList(true)
                const cinema = await getBanerMovies()
                const popular = await getPopularMovie()
                const topRated = await getTopRatedMovie()
                const commingSoon = await getSoonMovie()
                const popularTv = await getPopularTV()
                const topRatedTv = await getTopRatedTV()

                setAllMovies({
                    cinema: {movies: cinema.results, type: 'movie'},
                    popular: {movies: popular.results, type: 'movie'},
                    topRated: {movies: topRated.results, type: 'movie'},
                    commingSoon: {movies: commingSoon.results, type: 'movie'},
                    popularTv: { movies: popularTv.results, type: 'tv' },
                    topRatedTv: {movies: topRatedTv.results, type: 'tv'}
                })
            } catch {
                setIsErrorList(true)
            } finally {
                setIsLoadingList(false)  
            }
        }

        fetching()
    }, [])

    return {
        isLoadingList,
        isErrorList,
        movies: allMovies
    }
    
}