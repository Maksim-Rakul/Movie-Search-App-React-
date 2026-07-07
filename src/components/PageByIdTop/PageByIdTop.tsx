import type { Movie } from "../../types/movie";
import type { TV } from "../../types/tv";
import { converBudget, convertTime, getYear, isMovie } from "../../utils";
import Rate from "../UI/Rate/Rate";
import css from "./PageByIdTop.module.css";

interface PageByIdTop {
  content: Movie | TV;
  type: "movie" | "tv";
}

const PageByIdTop = ({ content, type }: PageByIdTop) => {
  const bgImg = `https://image.tmdb.org/t/p/w1280/${content.backdrop_path}`;
  const posterImg = `https://image.tmdb.org/t/p/w1280/${content.poster_path}`;

  const movieOrTv = () => {
    if (type === "movie" && isMovie(content)) {
      return (
        <div>
          <h2 className={css.title}>{content.title}</h2>

          <div className={css.subInfo}>
            <p>{getYear(content.release_date)}</p>
            <p>{convertTime(content.runtime)}</p>
            <p>{content.original_language?.toUpperCase()}</p>
            <p>{converBudget(content.budget)}</p>
          </div>

          <Rate rate={content.vote_average} />

          <p className={css.quote}>"{content.tagline}"</p>
        </div>
      );
    } else {
      const tv = content as TV;
      return (
        <div>
          <h2 className={css.title}>{tv.original_name}</h2>

          <Rate rate={tv.vote_average} />

          <div className={css.subInfo}>
            <p>{getYear(tv.first_air_date)}</p>

            <p>{tv.original_language.toUpperCase()}</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className={css.bg} style={{ backgroundImage: `url(${bgImg})` }}>
      <div className={`${css.topWrap} container`}>
        <img className={css.topImg} src={posterImg} alt="" />
        <div>
          <ul className={css.genresList}>
            {content.genres.map((genre) => {
              return (
                <li key={genre.id} className={css.genresItem}>
                  {genre.name}
                </li>
              );
            })}
          </ul>

          {movieOrTv()}

          <p className={css.desc}>{content.overview}</p>

          <button className={css.trailerBtn}>
            <span>ic</span> Trailer
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageByIdTop;
