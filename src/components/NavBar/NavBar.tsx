import { Link } from "react-router-dom";
import css from "./NavBar.module.css";

const NavBar = () => {
  return (
    <ul className={css.navBar}>
      <li>
        <Link className={css.link} to={"/"}>
          <img src="/icons/home.svg" alt="" className={css.icon} />
          Home
        </Link>
      </li>
      <li>
        <Link className={css.link} to={"/movies"}>
          <img src="/icons/movies.svg" alt="" className={css.icon} />
          Movies
        </Link>
      </li>
      <li>
        <Link className={css.link} to={"/tv"}>
          <img src="/icons/tvs.svg" alt="" className={css.icon} />
          TVs
        </Link>
      </li>
      <li>
        <Link className={css.link} to={"/trends"}>
          <img src="/icons/trends.svg" alt="" className={css.icon} />
          Trends
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
