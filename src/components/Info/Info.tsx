import Cast from "../Cast/Cast";
import Recomends from "../Recomends/Recomends";
import css from "./Info.module.css";

const Info = () => {
  return (
    <div className={css.info}>
      <Cast />
      <Recomends />
    </div>
  );
};

export default Info;
