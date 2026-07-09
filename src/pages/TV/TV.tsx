import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getTvByType } from "../../services/tvService";
import TypeNav from "../../components/TypeNav/TypeNav";
import MovieByGenreList from "../../components/MovieByGenreList/MovieByGenreList";
import Loader from "../../components/Loader/Loader";

const TV = () => {
  const [type, setType] = useState("popular");
  const { data, isLoading } = useQuery({
    queryKey: ["moviesPage", type],
    queryFn: () => getTvByType(type),
  });

  return (
    <section className="container">
      <TypeNav
        types={[
          { route: "popular", name: "Popular" },
          { route: "top_rated", name: "Top Rated" },
          { route: "airing_today", name: "Airing today" },
          { route: "on_the_air", name: "On the air" },
        ]}
        onClick={setType}
        active={type}
      />

      {isLoading && <Loader />}

      {data?.results && (
        <MovieByGenreList type="movie" moviesList={data.results} />
      )}
    </section>
  );
};

export default TV;
