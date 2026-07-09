import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import css from "./MovieByIdMain.module.css";
import PageByIdTop from "../../../../components/PageByIdTop/PageByIdTop";
import PageIdNav from "../../../../components/PageIdNav/PageIdNav";
import { useState } from "react";
import PageIdContent from "../../../../components/PageIdContent/PageIdContent";
import Modal from "../../../../components/Modal/Modal";
import { useTrailer } from "../../../../hooks/useTrailer";
import Trailer from "../../../../components/Trailer/Trailer";
import { getById } from "../../../../services/multiService";
import Loader from "../../../../components/Loader/Loader";

const MovieById = () => {
  const [active, setActive] = useState("info");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useQuery({
    queryKey: ["movieById", id],
    queryFn: () => getById("movie", id!),
  });

  const { trailer } = useTrailer(id!, "movie");

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <div className={css.wrap}>
        {data && (
          <PageByIdTop content={data} openModal={() => setIsModalOpen(true)} />
        )}
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
          <PageIdContent active={active} />
        </div>

        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)}>
            <Trailer src={trailer} />
          </Modal>
        )}
      </div>
    );
  }
};

export default MovieById;
