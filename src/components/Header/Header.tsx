import css from "./Header.module.css";
import Logo from "../UI/Logo/Logo";
import SearchBar from "../UI/SearchBar/SearchBar";
import NavBar from "../NavBar/NavBar";
import MobileMenu from "../UI/MobileMenuBtn/MobileMenu";

const Header = () => {
  return (
    <header className={`container`}>
      <div className={` ${css.headerWrapper}`}>
        <Logo />
        <div className={css.deskNav}>
          <NavBar />
        </div>
        <SearchBar />
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
