import { useParams } from "react-router-dom";
import ActorTop from "./components/ActorTop/ActorTop";
import { useQuery } from "@tanstack/react-query";
import { getActorById } from "../../services/actorService";
import { useState } from "react";
import PageIdNav from "../../components/PageIdNav/PageIdNav";
import ActorIdContent from "./components/ActorContent/ActorContent";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

const ActorById = () => {
  const [active, setActive] = useState("movies");

  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["actor", id],
    queryFn: () => getActorById(id!),
  });

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <div className="container">
      {data && <ActorTop actor={data} />}
      <PageIdNav
        items={[
          { name: "Movies", value: "movies" },
          { name: "Tvs", value: "tvs" },
          { name: "Photo", value: "photo" },
        ]}
        activeItems={active}
        onClick={(name: string) => setActive(name)}
      />

      <ActorIdContent active={active} />
    </div>
  );
};

export default ActorById;
