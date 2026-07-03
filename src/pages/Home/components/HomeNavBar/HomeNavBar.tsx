import GenresList from "../GenresList/GenresList";
import GenresNav from "../GenresNav/GenresNav";
import { useMovieListContext } from "../../../../context/HomeContext";
import type { MovieGenre } from "../../../../types/movie";
import type { TvGenre } from "../../../../types/tv";

interface HomeNavBarProprs {
  genresMovie: MovieGenre[];
  tvGenres: TvGenre[];
}

const HomeNavBar = ({ genresMovie, tvGenres }: HomeNavBarProprs) => {
  const { genreType, setGenreType, setActiveGenre } = useMovieListContext();
  return (
    <div>
      <GenresNav
        onClick={setGenreType}
        active={genreType}
        setAll={setActiveGenre}
      />

      {genreType === "Movie" ? (
        <GenresList genres={genresMovie} />
      ) : (
        <GenresList genres={tvGenres} />
      )}
    </div>
  );
};

export default HomeNavBar;
