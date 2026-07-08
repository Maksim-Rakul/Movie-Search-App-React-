import ActorById from "../pages/ActorById/ActorById";
import Home from "../pages/Home/Home";
import MovieById from "../pages/MovieById/components/MovieByIdMain/MovieByIdMain";
import Movies from "../pages/Movies/Movies/Movies";
import Trends from "../pages/Trends/Trends";
import TV from "../pages/TV/TV";
import TVById from "../pages/TVById/components/TVById/TVById";

export const publicRoutes = [
    {
        path: '/',
        element: Home
    },
    {
        path: '/movies',
        element: Movies
    },
    {
        path: '/tv',
        element: TV
    },
    {
        path: '/trends',
        element: Trends
    },
    {
        path: '/movie/:id',
        element: MovieById
    },
    {
        path: '/tv/:id',
        element: TVById
    },
    {
        path: '/actor/:id',
        element: ActorById
    }

]