import MyButton from "../../../../components/UI/MyButton/MyButton";
import { useMovieListContext } from "../../../../context/HomeContext";
import type { MovieGenre } from "../../../../types/movie";
import GenreItem from "../GenreItem/GenreItem";
import css from "./GenresList.module.css";

interface GenresListProps {
  genres: MovieGenre[];
}

const GenresList = ({ genres }: GenresListProps) => {
  const { activeGenre, setActiveGenre } = useMovieListContext();
  return (
    <div className={css.wrapper}>
      <ul className={css.genresList}>
        <li>
          <MyButton
            isActive={activeGenre === 0}
            onClick={() => setActiveGenre(0)}
          >
            All
          </MyButton>
        </li>

        {genres.map((genre) => {
          return <GenreItem key={genre.id} genre={genre} genreId={genre.id} />;
        })}
      </ul>
    </div>
  );
};

export default GenresList;
