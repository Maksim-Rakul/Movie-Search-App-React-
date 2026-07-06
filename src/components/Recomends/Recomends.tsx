import { useQuery } from "@tanstack/react-query";
import MyTitle from "../UI/MyTitle/MyTitle";
import { getRecByMovieId } from "../../services/movieService";
import MovieSliderList from "../MovieSliderList/MovieSliderList";

interface RecomendsProps {
  id: string;
}

const Recomends = ({ id }: RecomendsProps) => {
  const { data } = useQuery({
    queryKey: ["recomends", id],
    queryFn: () => getRecByMovieId(id),
  });

  return (
    <div>
      <MyTitle name="Recomends" />
      {data && (
        <MovieSliderList
          movies={{
            movies: data.results,
          }}
          type="movie"
        />
      )}
    </div>
  );
};

export default Recomends;
