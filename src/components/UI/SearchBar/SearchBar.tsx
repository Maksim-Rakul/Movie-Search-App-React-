import css from "./SearchBar.module.css";

interface SearchBarProps {
  value: string;
  onChange: (query: string) => void;
  type: string;
  name: string;
}

const SearchBar = ({ onChange, ...props }: SearchBarProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return <input className={css.searchBar} {...props} onChange={handleChange} />;
};

export default SearchBar;
