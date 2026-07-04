import MyButton from "../UI/MyButton/MyButton";
import css from "./TypeNav.module.css";

interface BtnInfo {
  route: string;
  name: string;
}

interface TypeNav {
  types: BtnInfo[];
  onClick: (type: string) => void;
  active: string;
}

const TypeNav = ({ types, onClick, active }: TypeNav) => {
  return (
    <ul className={css.nav}>
      {types.map((type) => {
        return (
          <li key={type.route}>
            <MyButton
              isActive={active === type.route}
              onClick={() => onClick(type.route)}
            >
              {type.name}
            </MyButton>
          </li>
        );
      })}
    </ul>
  );
};

export default TypeNav;
