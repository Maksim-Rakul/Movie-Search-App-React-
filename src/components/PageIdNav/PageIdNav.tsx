import css from "./PageIdNav.module.css";

interface PageIdNavProps {
  items: string[];
  activeItems: string;
  onClick: (i: string) => void;
}

const PageIdNav = ({ items, activeItems, onClick }: PageIdNavProps) => {
  return (
    <ul className={css.navList}>
      {items.map((item) => {
        return (
          <li
            key={item}
            onClick={() => onClick(item)}
            className={item === activeItems ? css.active : ""}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default PageIdNav;
