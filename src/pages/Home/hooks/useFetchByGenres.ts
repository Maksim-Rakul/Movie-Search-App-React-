import { useEffect, useState } from "react"
import type { TV } from "../../../types/tv"
import type { Movie } from "../../../types/movie"
import { getMoviesByGenres } from "../../../services/movieService"
import { getTVByGenres } from "../../../services/tvService"

interface useFetchBuGenresProps {
    id: number
    type: string
}

interface useFetchByGenresRes {
    list: Movie[] | TV[];
    type: 'movie' | 'tv'
}

type FetchCallback = (id: number) => Promise<void>;

export const useFetchByGenres = ({id, type}: useFetchBuGenresProps) => {
    const [list, setList] = useState<useFetchByGenresRes | null>(null)
    const [isListLoading, setIsListLoading] = useState(false)
    const [isListError, setIsListError] = useState(false)

    async function fetchByGenres(callback: FetchCallback, id: number) {
        try {
            setIsListLoading(true)
            setIsListError(false)

            await callback(id)
        } catch {
            setIsListError(true)
        } finally {
            setIsListLoading(false)
        }
    }

    useEffect(() => {
        
        
        const fetchMovieByGenre = async (id: number) => {
            fetchByGenres(async (id: number) => {
                const res = await getMoviesByGenres(id)
                setList({list: res.results, type: 'movie'})
            }, id)
            
        }

        const fetchTVByGenre = async (id: number) => {
            fetchByGenres(async (id: number) => {
                const res = await getTVByGenres(id)
                setList({ list: res.results, type: 'tv' })
            }, id)
        }


        if (type === 'Movie') {
            fetchMovieByGenre(id)
        }

        if (type === 'TV') {
            fetchTVByGenre(id)
           }
       
    }, [id, type])

    return {list, isListLoading, isListError}
}