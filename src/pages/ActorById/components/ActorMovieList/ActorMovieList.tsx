import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getMoviesByActorId } from "../../../../services/actorService";
import MovieByGenreList from "../../../../components/MovieByGenreList/MovieByGenreList";
import Loader from "../../../../components/Loader/Loader";
import Error from "../../../../components/Error/Error";

const ActorMovieList = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["actorMovies", id],
    queryFn: () => getMoviesByActorId(id!),
  });

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <div>
      {data && <MovieByGenreList moviesList={data.cast} type="movie" />}
    </div>
  );
};

export default ActorMovieList;
