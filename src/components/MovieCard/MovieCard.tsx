import { useNavigate } from "react-router-dom";
import type { Movie } from "../../types/movie";
import type { TV } from "../../types/tv";
import Rate from "../UI/Rate/Rate";
import css from "./MovieCard.module.css";
import { getYear, isMovie } from "../../utils";
import { usePageTypeContext } from "../../context/PageContext";
import Untitled from "../Untitled/Untitled";

type MovieCardProps = {
  movie: Movie | TV;
  type: string;
};

const MovieCard = ({ movie, type }: MovieCardProps) => {
  const { setType } = usePageTypeContext();

  const navigate = useNavigate();
  const src = `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`;

  if (type === "movie" && isMovie(movie)) {
    return (
      <li
        className={css.card}
        onClick={() => {
          setType("movie");
          navigate(`/movie/${movie.id}`);
        }}
      >
        <div className={css.imgWrap}>
          {movie.backdrop_path ? (
            <img src={src} className={css.cardImg} alt={movie.original_title} />
          ) : (
            <Untitled />
          )}
          <div className={css.playBtn}>
            <img
              src="/icons/whitePlay.svg"
              alt="play-btn"
              className={css.playIcon}
            />
          </div>
        </div>
        <h3 className={css.cardTitle}>{movie.title}</h3>
        <p className={css.cardDate}>{getYear(movie.release_date)}</p>
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
          setType("tv");
          navigate(`/tv/${tvMovie.id}`);
        }}
      >
        <div className={css.imgWrap}>
          {movie.backdrop_path ? (
            <img
              src={src}
              className={css.cardImg}
              alt={tvMovie.original_name}
            />
          ) : (
            <Untitled />
          )}
          <div className={css.playBtn}>
            <img
              src="/icons/whitePlay.svg"
              alt="play-btn"
              className={css.playIcon}
            />
          </div>
        </div>
        <h3 className={css.cardTitle}>{tvMovie.original_name}</h3>
        <p className={css.cardDate}>{getYear(tvMovie.first_air_date)}</p>
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
