import Gallery from "../../../../components/Gallery/Gallery";
import ActorMovieList from "../ActorMovieList/ActorMovieList";
import ActorTvList from "../ActorTvList/ActorTvList";

interface PageIdContentProps {
  active: string;
}

const ActorIdContent = ({ active }: PageIdContentProps) => {
  switch (active) {
    case "movies":
      return <ActorMovieList key={"movie"} />;
    case "tvs":
      return <ActorTvList key={"tv"} />;
    case "photo":
      return <Gallery />;
  }
};

export default ActorIdContent;
