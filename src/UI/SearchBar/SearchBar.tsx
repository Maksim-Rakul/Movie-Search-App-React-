interface SearchBarProps {
  value: string;
  onChange: (query: string) => void;
  type: string;
}

const SearchBar = ({ onChange, ...props }: SearchBarProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return <input {...props} onChange={handleChange} />;
};

export default SearchBar;
