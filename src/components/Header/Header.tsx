import { useState } from "react";
import Logo from "../../UI/Logo/Logo";
import SearchBar from "../../UI/SearchBar/SearchBar";
import css from "./Header.module.css";

const Header = () => {
  const [query, setQuery] = useState("");

  const handleChange = (query: string) => {
    setQuery(query);
  };

  return (
    <header className={css.header}>
      <Logo />
      <SearchBar value={query} onChange={handleChange} type="text" />
      <button></button>
    </header>
  );
};

export default Header;
