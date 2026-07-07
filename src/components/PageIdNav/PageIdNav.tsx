import css from "./PageIdNav.module.css";

interface Item {
  name: string;
  value: string;
}

interface PageIdNavProps {
  items: Item[];
  activeItems: string;
  onClick: (i: string) => void;
}

const PageIdNav = ({ items, activeItems, onClick }: PageIdNavProps) => {
  return (
    <ul className={css.navList}>
      {items.map((item) => {
        return (
          <li
            key={item.value}
            onClick={() => onClick(item.value)}
            className={item.value === activeItems ? css.active : ""}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default PageIdNav;
