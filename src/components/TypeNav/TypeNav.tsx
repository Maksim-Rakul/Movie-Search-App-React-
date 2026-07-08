import MyButton from "../UI/MyButton/MyButton";
import css from "./TypeNav.module.css";

interface BtnInfo<T = string | number> {
  route: T;
  name: string;
}

interface TypeNavProps<T = string | number> {
  types: BtnInfo<T>[];
  onClick: (type: T) => void;
  active: T;
}

const TypeNav = <T extends string | number>({
  types,
  onClick,
  active,
}: TypeNavProps<T>) => {
  return (
    <ul className={css.nav}>
      {types.map((type) => {
        const isActive = active === type.route;
        return (
          <li key={String(type.route)}>
            <MyButton isActive={isActive} onClick={() => onClick(type.route)}>
              {type.name}
            </MyButton>
          </li>
        );
      })}
    </ul>
  );
};

export default TypeNav;
