import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import css from "./MovieByIdMain.module.css";
import PageByIdTop from "../../../../components/PageByIdTop/PageByIdTop";
import { getMovieById } from "../../../../services/movieService";
import PageIdNav from "../../../../components/PageIdNav/PageIdNav";
import { useState } from "react";
import PageIdContent from "../PageIdContent/PageIdContent";

const MovieById = () => {
  const [active, setActive] = useState("reviews");

  const { movieId } = useParams<{ movieId: string }>();

  const { data } = useQuery({
    queryKey: ["movieById", movieId],
    queryFn: () => getMovieById(movieId!),
  });

  return (
    <div className={css.wrap}>
      {data && <PageByIdTop content={data} type="movie" />}
      <div className="container">
        <PageIdNav
          items={["info", "actors", "reviews", "media"]}
          activeItems={active}
          onClick={(name: string) => setActive(name)}
        />
        <PageIdContent active={active} id={movieId} />
      </div>
    </div>
  );
};

export default MovieById;
