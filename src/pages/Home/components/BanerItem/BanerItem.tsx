import { useNavigate } from "react-router-dom";
import type { Movie } from "../../../../types/movie";
import css from "./BanerItem.module.css";
import Rate from "../../../../components/UI/Rate/Rate";
import { useState } from "react";

interface BanerItemProps {
  movie: Movie;
}

const BanerItem = ({ movie }: BanerItemProps) => {
  const [isMore, setIsMore] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={`container ${css.wrapper}`}>
      <div className={css.content}>
        <div>
          <Rate rate={movie.vote_average} />
        </div>
        <h2 className={css.title}>{movie.title}</h2>
        <p className={`${css.desc} ${isMore && css.open}`}>{movie.overview}</p>
        <div className={css.btnWrapper}>
          <button
            className={`${css.btn}`}
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <span>ICON</span>
            Watch
          </button>
          <button
            className={`${css.btn} ${css.more}`}
            onClick={() => setIsMore(!isMore)}
          >
            <span>ICON</span>
            {isMore ? "Less" : "More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BanerItem;
