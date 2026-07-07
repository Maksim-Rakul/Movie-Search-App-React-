import { useQuery } from "@tanstack/react-query";
import MyTitle from "../UI/MyTitle/MyTitle";
import MovieSliderList from "../MovieSliderList/MovieSliderList";
import { getRecById } from "../../services/multiService";
import { usePageTypeContext } from "../../context/PageContext";
import { useParams } from "react-router-dom";

const Recomends = () => {
  const { type } = usePageTypeContext();

  const { id } = useParams<{ id: string }>();

  const { data } = useQuery({
    queryKey: ["recomends", id],
    queryFn: () => getRecById(type, id!),
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
