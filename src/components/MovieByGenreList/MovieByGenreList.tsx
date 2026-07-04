import type { Movie } from "../../types/movie";
import type { TV } from "../../types/tv";
import MovieCard from "../MovieCard/MovieCard";
import css from "./MovieByGenreList.module.css";

interface MovieByGenreListProps {
  moviesList: Movie[] | TV[];
  type: "movie" | "tv";
}

const MovieByGenreList = ({ moviesList, type }: MovieByGenreListProps) => {
  return (
    <div>
      <ul className={css.list}>
        {moviesList.map((movie) => {
          return <MovieCard movie={movie} type={type} key={movie.id} />;
        })}
      </ul>
    </div>
  );
};

export default MovieByGenreList;
