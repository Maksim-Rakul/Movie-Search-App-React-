import { useQuery } from "@tanstack/react-query"
import { getVideoById } from "../services/multiService"


export const useTrailer = (id: string, type: string): {trailer: string} => {

    const { data } = useQuery({
        queryKey: ['trailer', id, type],
        queryFn: () => getVideoById(type, id)
    })

    const trailer = data?.results.find((video) => video.type === 'Trailer')

    return {trailer: `https://www.youtube-nocookie.com/embed/${trailer?.key}`}
}