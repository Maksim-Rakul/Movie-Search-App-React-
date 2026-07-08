import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getImgByActorId } from "../../../../services/actorService";

const ActorPhotos = () => {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["actorList", id],
    queryFn: () => getImgByActorId(id!),
  });

  console.log(data);

  return <div></div>;
};

export default ActorPhotos;
