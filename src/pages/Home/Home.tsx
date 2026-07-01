import { useState } from "react";
import Baner from "./components/Baner/Baner";
import { useHomeTopFetch } from "./hooks/useHomeTopFetch";
import { MovieListContext } from "../../context/HomeContext";
import { useMoviesListFetching } from "./hooks/useMoviesListFetching";
import MovieList from "./components/MovieList/MovieList";
import HomeNavBar from "./components/HomeNavBar/HomeNavBar";

const Home = () => {
  const [activeGenre, setActiveGenre] = useState<number>(0);
  const [genreType, setGenreType] = useState("Movie");

  const { movie, genresMovie, tvGenres, isLoading, isError } =
    useHomeTopFetch();

  const { type, movies } = useMoviesListFetching(activeGenre, genreType);

  if (isLoading) {
    return <h2 style={{ color: "white" }}>Loading, please wait...</h2>;
  } else {
    return (
      <div>
        <Baner movies={movie} />
        <div className="container">
          {isError && <p>Some error</p>}

          <MovieListContext.Provider
            value={{ activeGenre, setActiveGenre, genreType, setGenreType }}
          >
            <HomeNavBar genresMovie={genresMovie} tvGenres={tvGenres} />
          </MovieListContext.Provider>

          {/* <HomeNavBar
            setGenreType={setGenreType}
            genreType={genreType}
            activeGenre={activeGenre}
            setActiveGenre={setActiveGenre}
            genresMovie={genresMovie}
            tvGenres={tvGenres}
          /> */}

          {movies && <MovieList movies={movies} type={type} />}
        </div>
      </div>
    );
  }
};

export default Home;
