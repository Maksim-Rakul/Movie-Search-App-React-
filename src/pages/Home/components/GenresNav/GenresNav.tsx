import MyButton from "../../../../components/UI/MyButton/MyButton";
import css from "./GenresNav.module.css";

interface GenresNav {
  onClick: (type: string) => void;
  setAll: (genre: number) => void;
  active: string;
}

const GenresNav = ({ onClick, setAll, active }: GenresNav) => {
  const handleClick = (type: string) => {
    onClick(type);
    setAll(0);
  };

  return (
    <div className={css.wrapper}>
      <p>By ganres</p>
      <MyButton
        onClick={() => handleClick("Movie")}
        isActive={active === "Movie"}
      >
        Movie
      </MyButton>
      <MyButton onClick={() => handleClick("TV")} isActive={active === "TV"}>
        TV
      </MyButton>
    </div>
  );
};

export default GenresNav;
