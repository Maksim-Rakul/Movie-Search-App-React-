import { Link } from "react-router-dom";
import type { MultiSearch } from "../../../types/multi";
import css from "./SearchedItem.module.css";

interface SearchedItemProps {
  movie: MultiSearch;
  onClick: () => void;
}

const SearchedItem = ({ movie, onClick }: SearchedItemProps) => {
  const src = `https://image.tmdb.org/t/p/w1280/${movie.poster_path}`;
  const title = movie.title || movie.original_name;
  return (
    <Link to={`/${movie.media_type}/${movie.id}`} onClick={onClick}>
      <li className={css.item}>
        <img className={css.img} src={src} alt={title} />
        <h3 className={css.name}>{title}</h3>
      </li>
    </Link>
  );
};

export default SearchedItem;

// {}
