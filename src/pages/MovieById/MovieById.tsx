import { useParams } from "react-router-dom";

const MovieById = () => {
  const { movieId } = useParams();

  return <div>Movie By ID: {movieId}</div>;
};

export default MovieById;
