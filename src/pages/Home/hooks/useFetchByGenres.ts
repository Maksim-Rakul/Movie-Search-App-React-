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

export const useFetchByGenres = ({id, type}: useFetchBuGenresProps) => {
    const [list, setList] = useState<useFetchByGenresRes | null>(null)

    useEffect(() => {
        const fetchMovieByGenre = async (id: number) => {
            const res = await getMoviesByGenres(id)

            setList({list: res.results, type: 'movie'})
        }

        const fetchTVByGenre = async (id: number) => {
            const res = await getTVByGenres(id)

            setList({list: res.results, type: 'tv'})
        }


        if (type === 'Movie') {
            fetchMovieByGenre(id)
        }

        if (type === 'TV') {
            fetchTVByGenre(id)
        }
    }, [id, type])

    return {list}
}