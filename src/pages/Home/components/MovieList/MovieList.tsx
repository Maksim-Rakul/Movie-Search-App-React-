import type { Movie } from "../../../../types/movie";
import type { TV } from "../../../../types/tv";

interface AllMovie {
  movies: Movie[] | TV[];
  name: string;
}

interface MovieListProps {
  movies: Movie[] | TV[] | AllMovie[];
  type: string;
}

const MovieList = ({ movies, type }: MovieListProps) => {
  console.log(movies);
  console.log(type);

  return <div></div>;
};

export default MovieList;
