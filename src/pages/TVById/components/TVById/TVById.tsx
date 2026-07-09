import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import css from "./TVById.module.css";
import PageByIdTop from "../../../../components/PageByIdTop/PageByIdTop";
import { useState } from "react";
import Modal from "../../../../components/Modal/Modal";
import { useTrailer } from "../../../../hooks/useTrailer";
import Trailer from "../../../../components/Trailer/Trailer";
import PageIdNav from "../../../../components/PageIdNav/PageIdNav";
import PageIdContent from "../../../../components/PageIdContent/PageIdContent";
import { getById } from "../../../../services/multiService";
import { usePageTypeContext } from "../../../../context/PageContext";

const TVById = () => {
  const [active, setActive] = useState("info");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { id } = useParams<{ id: string }>();
  const { setType } = usePageTypeContext();

  const { data } = useQuery({
    queryKey: ["movieById", id],
    queryFn: async () => {
      await setType("tv");
      return getById("tv", id!);
    },
  });

  console.log(data);

  const { trailer } = useTrailer(id!, "tv");

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
};

export default TVById;
