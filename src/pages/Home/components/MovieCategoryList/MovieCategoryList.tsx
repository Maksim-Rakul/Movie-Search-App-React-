import type { AllMovieFetchProps } from "../../../../types/movie";
import MovieList from "../MovieList/MovieList";

interface MovieCategoryListProps {
  movies: AllMovieFetchProps;
}

const MovieCategoryList = ({ movies }: MovieCategoryListProps) => {
  console.log(movies);

  return (
    <div>
      <MovieList
        movies={movies.cinema}
        name="Now in cinema"
        type={movies.cinema.type}
      />
      <MovieList
        movies={movies.popular}
        name="Popular movies"
        type={movies.popular.type}
      />
      <MovieList
        movies={movies.topRated}
        name="Top Rated Movie"
        type={movies.topRated.type}
      />
      <MovieList
        movies={movies.commingSoon}
        name="Comming soon"
        type={movies.commingSoon.type}
      />
      <MovieList
        movies={movies.popularTv}
        name="Comming soon"
        type={movies.popularTv.type}
      />
      <MovieList
        movies={movies.topRatedTv}
        name="Comming soon"
        type={movies.topRatedTv.type}
      />
    </div>
  );
};

export default MovieCategoryList;
