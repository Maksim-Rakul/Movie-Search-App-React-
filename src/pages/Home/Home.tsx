import { useEffect, useState } from "react";
import Baner from "./components/Baner/Baner";
import GenresList from "./components/GenresList/GenresList";
import { useHomeTopFetch } from "./hooks/useHomeTopFetch";
import { MovieListContext } from "../../context/HomeContext";
import GenresNav from "./components/GenresNav/GenresNav";
import { useMoviesListFetching } from "./hooks/useMoviesListFetching";

const Home = () => {
  const [activeGenre, setActiveGenre] = useState<number>(0);
  const [genreType, setGenreType] = useState("Movie");

  const { movie, genresMovie, tvGenres, isLoading, isError } =
    useHomeTopFetch();

  const movieList = useMoviesListFetching(activeGenre, genreType);

  useEffect(() => {
    console.log(movieList);
  }, [movieList]);

  if (isLoading) {
    return <h2 style={{ color: "white" }}>Loading, please wait...</h2>;
  } else {
    return (
      <div>
        <Baner movies={movie} />
        <div className="container">
          {isError && <p>Some error</p>}
          <GenresNav onClick={setGenreType} active={genreType} />

          <MovieListContext.Provider value={{ activeGenre, setActiveGenre }}>
            {genreType === "Movie" ? (
              <GenresList genres={genresMovie} activeBtn={activeGenre} />
            ) : (
              <GenresList genres={tvGenres} activeBtn={activeGenre} />
            )}
          </MovieListContext.Provider>
        </div>
      </div>
    );
  }
};

export default Home;
