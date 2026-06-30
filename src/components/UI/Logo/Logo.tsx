import { Link } from "react-router-dom";
import css from "./Logo.module.css";

const Logo = () => {
  return (
    <>
      <Link to="/" className={css.link}>
        <div className={css.logo}>H</div>
        <p className={css.logoText}>CineScope</p>
      </Link>
    </>
  );
};

export default Logo;
