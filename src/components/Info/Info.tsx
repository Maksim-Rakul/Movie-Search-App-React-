import Cast from "../Cast/Cast";
import Recomends from "../Recomends/Recomends";
import css from "./Info.module.css";

interface InfoProps {
  id: string;
}

const Info = ({ id }: InfoProps) => {
  return (
    <div className={css.info}>
      <Cast id={id} />
      <Recomends id={id} />
    </div>
  );
};

export default Info;
