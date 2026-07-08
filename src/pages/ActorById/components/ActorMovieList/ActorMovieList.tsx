import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getMoviesByActorId } from "../../../../services/actorService";
import MovieByGenreList from "../../../../components/MovieByGenreList/MovieByGenreList";

const ActorMovieList = () => {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["actorMovies", id],
    queryFn: () => getMoviesByActorId(id!),
  });

  return (
    <div>
      {data && <MovieByGenreList moviesList={data.cast} type="movie" />}
    </div>
  );
};

export default ActorMovieList;
