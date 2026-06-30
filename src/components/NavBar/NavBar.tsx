import css from "./NavBar.module.css";

const NavBar = () => {
  return (
    <ul className={css.navBar}>
      <li>Home</li>
      <li>Movies</li>
      <li>TVs</li>
      <li>Trends</li>
    </ul>
  );
};

export default NavBar;
