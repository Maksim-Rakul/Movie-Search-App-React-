import MyButton from "../../../../components/UI/MyButton/MyButton";
import css from "./GenresNav.module.css";

interface GenresNav {
  onClick: (type: string) => void;
  active: string;
}

const GenresNav = ({ onClick, active }: GenresNav) => {
  return (
    <div className={css.wrapper}>
      <p>By ganres</p>
      <MyButton onClick={() => onClick("Movie")} isActive={active === "Movie"}>
        Movie
      </MyButton>
      <MyButton onClick={() => onClick("TV")} isActive={active === "TV"}>
        TV
      </MyButton>
    </div>
  );
};

export default GenresNav;
