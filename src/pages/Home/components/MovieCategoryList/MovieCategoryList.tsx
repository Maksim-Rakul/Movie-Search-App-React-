import MovieSliderList from "../../../../components/MovieSliderList/MovieSliderList";
import type { AllMovieFetchProps } from "../../../../types/movie";
import css from "./MovieCategoryList.module.css";

interface MovieCategoryListProps {
  movies: AllMovieFetchProps;
}

const MovieCategoryList = ({ movies }: MovieCategoryListProps) => {
  return (
    <div className={css.movies}>
      <MovieSliderList
        movies={movies.cinema}
        name="Now in cinema"
        type={movies.cinema.type}
      />
      <MovieSliderList
        movies={movies.popular}
        name="Popular movies"
        type={movies.popular.type}
      />
      <MovieSliderList
        movies={movies.topRated}
        name="Top Rated Movie"
        type={movies.topRated.type}
      />
      <MovieSliderList
        movies={movies.commingSoon}
        name="Comming soon"
        type={movies.commingSoon.type}
      />
      <MovieSliderList
        movies={movies.popularTv}
        name="Comming soon"
        type={movies.popularTv.type}
      />
      <MovieSliderList
        movies={movies.topRatedTv}
        name="Comming soon"
        type={movies.topRatedTv.type}
      />
    </div>
  );
};

export default MovieCategoryList;
