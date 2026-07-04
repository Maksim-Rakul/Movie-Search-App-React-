import { useState } from "react";
import css from "./Trends.module.css";
import { useQuery } from "@tanstack/react-query";
import TypeNav from "../../components/TypeNav/TypeNav";
import MovieByGenreList from "../../components/MovieByGenreList/MovieByGenreList";
import Loader from "../../components/Loader/Loader";
import { getByTrands } from "../../services/multiService";

const Trends = () => {
  const [type, setType] = useState("all");
  const [day, setDay] = useState("day");

  const { data, isLoading } = useQuery({
    queryKey: ["moviesPage", type, day],
    queryFn: () => getByTrands(type, day),
  });

  return (
    <section className="container">
      <div className={css.trendsNav}>
        <TypeNav
          types={[
            { route: "all", name: "All" },
            { route: "movie", name: "Movies" },
            { route: "tv", name: "TVs" },
          ]}
          onClick={setType}
          active={type}
        />
        <TypeNav
          types={[
            { route: "day", name: "Day" },
            { route: "week", name: "Week" },
          ]}
          onClick={setDay}
          active={day}
        />
      </div>
      {isLoading && <Loader />}

      {data?.results && (
        <MovieByGenreList type="movie" moviesList={data.results} />
      )}
    </section>
  );
};

export default Trends;
