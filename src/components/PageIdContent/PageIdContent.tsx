import Seasons from "../../pages/TVById/components/Seasons/Seasons";
import Cast from "../Cast/Cast";
import Info from "../Info/Info";
import Media from "../Media/Media";
import Reviews from "../Reviews/Reviews";

interface PageIdContentProps {
  active: string;
}

const PageIdContent = ({ active }: PageIdContentProps) => {
  switch (active) {
    case "info":
      return <Info />;
    case "actors":
      return <Cast />;
    case "seasons":
      return <Seasons />;
    case "reviews":
      return <Reviews />;
    case "media":
      return <Media />;
  }
};

export default PageIdContent;
