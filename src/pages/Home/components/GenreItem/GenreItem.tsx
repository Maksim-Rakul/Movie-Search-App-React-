import MyButton from "../../../../components/UI/MyButton/MyButton";
import type { MovieGenre } from "../../../../types/movie";
import { useMovieListContext } from "../../../../context/HomeContext";

interface GenreItemProps {
  genre: MovieGenre;
  genreId: number;
}

const GenreItem = ({ genre, genreId }: GenreItemProps) => {
  const { activeGenre, setActiveGenre } = useMovieListContext();

  return (
    <li>
      <MyButton
        isActive={genreId === activeGenre}
        onClick={() => setActiveGenre(genre.id)}
      >
        {genre.name}
      </MyButton>
    </li>
  );
};

export default GenreItem;
