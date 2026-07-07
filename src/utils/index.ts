import type { Movie } from "../types/movie";
import type { TV } from "../types/tv";

export const getYear = (date: string | undefined) => {
    if (!date) {
        return
    }

    const year = new Date(date)
    return (year.getFullYear());
}

export const convertTime = (time: string | undefined) => {
    if (!time) {
        return
    }

    const hours = Math.floor(+time / 60)
    const minutes = +time % 60

    return `${hours}h ${minutes}min`   
}

export const converBudget = (budget: number | undefined) => {
    if (!budget) {
        return
    }

    const convertedBudget = (budget / 1000000);

    if (convertedBudget < 1) {
        return `${convertedBudget * 1000}Th`
    } else {
        return `${convertedBudget}M`
    }
}

export function isMovie(item: Movie | TV): item is Movie {
  return (item as Movie).title !== undefined;
}