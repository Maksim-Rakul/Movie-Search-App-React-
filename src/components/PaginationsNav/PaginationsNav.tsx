import NavBtn from "../UI/NaVBtn/NavBtn";
import css from "./PaginationsNav.module.css";

interface PaginationsNavProps {
  hasAnyItems: boolean;
  page: number;
  onNext: () => void;
  onPrev: () => void;
}

const PaginationsNav = ({
  hasAnyItems,
  page,
  onNext,
  onPrev,
}: PaginationsNavProps) => {
  return (
    <div className={css.btns}>
      {hasAnyItems && <NavBtn onClick={onNext}>Load more</NavBtn>}
      {page >= 1 && <NavBtn onClick={onPrev}>Return</NavBtn>}
    </div>
  );
};

export default PaginationsNav;
