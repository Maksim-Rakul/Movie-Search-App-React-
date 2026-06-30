import { getBanerMovies } from "../../services/movieService";
import Baner from "./components/Baner/Baner";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["banerMove"],
    queryFn: getBanerMovies,
  });

  return (
    <div style={{ background: "#fff" }}>
      {isError && <p>Some error</p>}
      {isLoading ? (
        <h2>Loading, please wait...</h2>
      ) : (
        data?.results && <Baner movies={data?.results} />
      )}
    </div>
  );
};

export default Home;
