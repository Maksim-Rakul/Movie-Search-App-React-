import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSerialsByActorId } from "../../../../services/actorService";
import MovieByGenreList from "../../../../components/MovieByGenreList/MovieByGenreList";
import Loader from "../../../../components/Loader/Loader";
import Error from "../../../../components/Error/Error";

const ActorTvList = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["actorTvs", id],
    queryFn: () => getSerialsByActorId(id!),
  });

  const uniqueCast = data?.cast
    ? Array.from(new Map(data.cast.map((item) => [item.id, item])).values())
    : [];

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <div>{data && <MovieByGenreList moviesList={uniqueCast} type="tv" />}</div>
  );
};

export default ActorTvList;
