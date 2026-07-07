import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import css from "./MovieByIdMain.module.css";
import PageByIdTop from "../../../../components/PageByIdTop/PageByIdTop";
import { getMovieById } from "../../../../services/movieService";
import PageIdNav from "../../../../components/PageIdNav/PageIdNav";
import { useState } from "react";
import PageIdContent from "../PageIdContent/PageIdContent";
import Modal from "../../../../components/Modal/Modal";

const MovieById = () => {
  const [active, setActive] = useState("info");
  const [isModalOpen, setIsModalOpen] = useState(true);

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
          items={[
            { name: "Info", value: "info" },
            { name: "Actors", value: "actors" },
            { name: "Reviews", value: "reviews" },
            { name: "Media", value: "media" },
          ]}
          activeItems={active}
          onClick={(name: string) => setActive(name)}
        />
        <PageIdContent active={active} id={movieId} />
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>Modal</Modal>
      )}
    </div>
  );
};

export default MovieById;
