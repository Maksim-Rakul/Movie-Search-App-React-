import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSerialsByActorId } from "../../../../services/actorService";
import MovieByGenreList from "../../../../components/MovieByGenreList/MovieByGenreList";

const ActorTvList = () => {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["actorTvs", id],
    queryFn: () => getSerialsByActorId(id!),
  });

  const uniqueCast = data?.cast
    ? Array.from(new Map(data.cast.map((item) => [item.id, item])).values())
    : [];

  return (
    <div>{data && <MovieByGenreList moviesList={uniqueCast} type="tv" />}</div>
  );
};

export default ActorTvList;
