import { useQuery } from "@tanstack/react-query"
import { getById } from "../../../services/multiService"
import type { TV } from "../../../types/tv"

export const useSeasons = (id: string) => {
    const { data } = useQuery({
        queryKey: ['seasons', id],
        queryFn: () => getById<TV>('tv', id)
    })

    return {data: data?.seasons}
}