import { useNavigate } from "react-router-dom";
import type { Movie } from "../../types/movie";
import type { TV } from "../../types/tv";
import Rate from "../UI/Rate/Rate";
import css from "./MovieCard.module.css";

function isMovie(item: Movie | TV): item is Movie {
  return (item as Movie).title !== undefined;
}

type MovieCardProps = {
  movie: Movie | TV;
  type: string;
};

const MovieCard = ({ movie, type }: MovieCardProps) => {
  const navigate = useNavigate();
  const src = `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`;

  if (type === "movie" && isMovie(movie)) {
    return (
      <li
        className={css.card}
        onClick={() => {
          navigate(`/${type}/${movie.id}`);
        }}
      >
        <img className={css.cardImg} src={src} alt={movie.title} />
        <h3 className={css.cardTitle}>{movie.title}</h3>
        <p className={css.cardDate}>{movie.release_date}</p>
        <div className={css.cardTopWrap}>
          <div className={css.cardAverage}>
            <Rate rate={movie.vote_average} />
          </div>
          <p className={css.cardType}>MOVIE</p>
        </div>
      </li>
    );
  } else {
    const tvMovie = movie as TV;
    return (
      <li
        className={css.card}
        onClick={() => {
          navigate(`/tv/${tvMovie.id}`);
        }}
      >
        <img className={css.cardImg} src={src} alt={tvMovie.original_name} />
        <h3 className={css.cardTitle}>{tvMovie.original_name}</h3>
        <p className={css.cardDate}>{tvMovie.first_air_date}</p>
        <div className={css.cardTopWrap}>
          <div className={css.cardAverage}>
            <Rate rate={movie.vote_average} />
          </div>
          <p className={css.cardType}>SERIAL</p>
        </div>
      </li>
    );
  }
};

export default MovieCard;
