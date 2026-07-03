import { useState } from "react";
import Baner from "./components/Baner/Baner";
import { useHomeTopFetch } from "./hooks/useHomeTopFetch";
import { MovieListContext } from "../../context/HomeContext";
import { useMoviesListFetching } from "./hooks/useMoviesListFetching";
import HomeNavBar from "./components/HomeNavBar/HomeNavBar";
import MovieCategoryList from "./components/MovieCategoryList/MovieCategoryList";
import MovieByGenreList from "./components/MovieByGenreList/MovieByGenreList";
import { useFetchByGenres } from "./hooks/useFetchByGenres";

const Home = () => {
  const [activeGenre, setActiveGenre] = useState<number>(0);
  const [genreType, setGenreType] = useState("Movie");

  const { movie, genresMovie, tvGenres, isLoading, isError } =
    useHomeTopFetch();
  const { movies, isLoadingList } = useMoviesListFetching();
  const { list } = useFetchByGenres({ id: activeGenre, type: genreType });

  console.log(list);

  return (
    <div>
      {!isLoading && <Baner movies={movie} />}
      <div className="container">
        {isError && <p>Some error</p>}

        <MovieListContext.Provider
          value={{ activeGenre, setActiveGenre, genreType, setGenreType }}
        >
          <HomeNavBar genresMovie={genresMovie} tvGenres={tvGenres} />
        </MovieListContext.Provider>

        {isLoadingList ? (
          <p>Loading</p>
        ) : activeGenre !== 0 ? (
          list?.list && (
            <MovieByGenreList moviesList={list?.list} type={list?.type} />
          )
        ) : (
          <MovieCategoryList movies={movies} />
        )}
      </div>
    </div>
  );
};

export default Home;
