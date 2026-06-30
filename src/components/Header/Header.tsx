import { useState } from "react";
import css from "./Header.module.css";
import Logo from "../UI/Logo/Logo";
import SearchBar from "../UI/SearchBar/SearchBar";
import NavBar from "../NavBar/NavBar";
import MobileMenuBtn from "../UI/MobileMenuBtn/MobileMenuBtn";

const Header = () => {
  const [query, setQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChange = (query: string) => {
    setQuery(query);
  };

  return (
    <header className={`${css.header} container`}>
      <div className={` ${css.headerWrapper}`}>
        <Logo />
        <NavBar />
        <SearchBar
          value={query}
          onChange={handleChange}
          type="text"
          name="search"
        />
        <MobileMenuBtn
          isOpen={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>
    </header>
  );
};

export default Header;
