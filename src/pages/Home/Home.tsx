import { useState } from "react";
import Baner from "./components/Baner/Baner";
import { useHomeTopFetch } from "./hooks/useHomeTopFetch";
import { MovieListContext } from "../../context/HomeContext";
import { useMoviesListFetching } from "./hooks/useMoviesListFetching";
import HomeNavBar from "./components/HomeNavBar/HomeNavBar";
import MovieCategoryList from "./components/MovieCategoryList/MovieCategoryList";
import { useFetchByGenres } from "./hooks/useFetchByGenres";
import MovieByGenreList from "../../components/MovieByGenreList/MovieByGenreList";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

const Home = () => {
  const [activeGenre, setActiveGenre] = useState<number>(0);
  const [genreType, setGenreType] = useState("Movie");

  const { movie, genresMovie, tvGenres, isLoading, isError } =
    useHomeTopFetch();
  const { movies, isLoadingList } = useMoviesListFetching();
  const { list, isListError } = useFetchByGenres({
    id: activeGenre,
    type: genreType,
  });

  if (isLoading && isLoadingList) {
    return <Loader />;
  } else {
    return (
      <>
        {isError && <Error />}

        <Baner movies={movie} />

        <section className="container">
          <MovieListContext.Provider
            value={{ activeGenre, setActiveGenre, genreType, setGenreType }}
          >
            {genresMovie.length > 0 && (
              <HomeNavBar genresMovie={genresMovie} tvGenres={tvGenres} />
            )}
          </MovieListContext.Provider>

          {isLoadingList || isListError ? (
            <div>
              {isLoadingList && <Loader />}
              {isListError && <Error />}
            </div>
          ) : activeGenre !== 0 ? (
            list?.list && (
              <MovieByGenreList moviesList={list?.list} type={list?.type} />
            )
          ) : (
            <MovieCategoryList movies={movies} />
          )}
        </section>
      </>
    );
  }
};

export default Home;
