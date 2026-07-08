import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getActorById } from "../../services/actorSrvice";
import ActorTop from "./components/ActorTop/ActorTop";

const ActorById = () => {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["actor", id],
    queryFn: () => getActorById(id!),
  });

  console.log(data);

  const src = `https://image.tmdb.org/t/p/w1280/${data?.profile_path}`;

  return (
    <div className="container">
      {data && (
        <ActorTop
          src={src}
          name={data?.name}
          known_for_department={data.known_for_department}
          birthday={data.birthday}
          place_of_birth={data.place_of_birth}
          biography={data.biography}
        />
      )}
    </div>
  );
};

export default ActorById;
