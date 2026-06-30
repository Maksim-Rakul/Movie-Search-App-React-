import { useEffect, useState } from "react";
import { getBanerMovies } from "../../services/movieService";
import type { Movie } from "../../types/movie";
import Baner from "../../components/Baner/Baner";

const Home = () => {
  const [movieBaner, setMovieBaner] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchMovieBaner = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const res = await getBanerMovies();
        setMovieBaner(res.results);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieBaner();
  }, []);

  return (
    <div style={{ background: "#fff" }}>
      {isError && <p>Some error</p>}
      {isLoading ? (
        <h2>Loading, please wait...</h2>
      ) : (
        <Baner movies={movieBaner} />
      )}
    </div>
  );
};

export default Home;
