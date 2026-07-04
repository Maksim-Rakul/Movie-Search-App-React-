import { Link } from "react-router-dom";
import css from "./NavBar.module.css";

const NavBar = () => {
  return (
    <ul className={css.navBar}>
      <li>
        <Link className={css.link} to={"/"}>
          Home
        </Link>
      </li>
      <li>
        <Link className={css.link} to={"/movies"}>
          Movies
        </Link>
      </li>
      <li>
        <Link className={css.link} to={"/tv"}>
          TVs
        </Link>
      </li>
      <li>
        <Link className={css.link} to={"/trends"}>
          Trends
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
