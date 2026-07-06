import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../services/movieService";
import css from "./MovieById.module.css";
import { converBudget, convertTime, getYear } from "../../utils";
import Rate from "../../components/UI/Rate/Rate";

const MovieById = () => {
  const { movieId } = useParams<{ movieId: string }>();

  const { data } = useQuery({
    queryKey: ["movieById", movieId],
    queryFn: () => getMovieById(movieId!),
  });

  console.log(data);

  const bgImg = `https://image.tmdb.org/t/p/w1280/${data?.backdrop_path}`;
  const posterImg = `https://image.tmdb.org/t/p/w1280/${data?.poster_path}`;

  return (
    <div className={css.wrap}>
      {data && (
        <div className={css.bg} style={{ backgroundImage: `url(${bgImg})` }}>
          <div className={`${css.topWrap} container`}>
            <img className={css.topImg} src={posterImg} alt="" />
            <ul className={css.genresList}>
              {data?.genres.map((genre) => {
                return (
                  <li key={genre.id} className={css.genresItem}>
                    {genre.name}
                  </li>
                );
              })}
            </ul>
            <h2 className={css.title}>{data?.title}</h2>

            <div className={css.subInfo}>
              <p>{getYear(data?.release_date)}</p>
              <p>{convertTime(data?.runtime)}</p>
              <p>{data?.original_language?.toUpperCase()}</p>
              <p>{converBudget(data?.budget)}</p>
            </div>

            <Rate rate={data?.vote_average} />

            <p className={css.quote}>"{data.tagline}"</p>

            <p className={css.desc}>{data.overview}</p>

            <button className={css.trailerBtn}>
              <span>ic</span> Trailer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieById;
