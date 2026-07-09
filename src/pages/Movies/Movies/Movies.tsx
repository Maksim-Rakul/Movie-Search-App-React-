import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getMoviesByType } from "../../../services/movieService";
import TypeNav from "../../../components/TypeNav/TypeNav";
import MovieByGenreList from "../../../components/MovieByGenreList/MovieByGenreList";
import Loader from "../../../components/Loader/Loader";

const Movies = () => {
  const [type, setType] = useState("popular");
  const { data, isLoading } = useQuery({
    queryKey: ["moviesPage", type],
    queryFn: () => getMoviesByType(type),
  });

  return (
    <section className="container">
      <TypeNav
        types={[
          { route: "popular", name: "Popular" },
          { route: "now_playing", name: "Now playing" },
          { route: "top_rated", name: "Top Rated" },
          { route: "upcoming", name: "Upcoming" },
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

export default Movies;
