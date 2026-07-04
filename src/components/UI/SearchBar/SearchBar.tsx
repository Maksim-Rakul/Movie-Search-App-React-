import { useQuery } from "@tanstack/react-query";
import css from "./SearchBar.module.css";
import { useState } from "react";
import SearchedItem from "../SearchedItem/SearchedItem";
import { useDebounce } from "use-debounce";
import { getKeyword } from "../../../services/multiService";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 300);

  const { data } = useQuery({
    queryKey: ["searchQuery", debouncedQuery],
    queryFn: () => getKeyword(debouncedQuery),
    enabled: query !== "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div className={css.searchBarWrap}>
      <div className={css.inputWrap}>
        <input
          className={css.searchBar}
          name="search"
          type="text"
          onChange={handleChange}
          value={query}
        />
        {query !== "" && (
          <button onClick={() => setQuery("")} className={css.clearBtn}>
            X
          </button>
        )}
      </div>

      {data?.results && (
        <div className={css.resultWrap}>
          <ul>
            {data.results.map((movie) => {
              return (
                <SearchedItem
                  key={movie.id}
                  movie={movie}
                  onClick={() => setQuery("")}
                />
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
