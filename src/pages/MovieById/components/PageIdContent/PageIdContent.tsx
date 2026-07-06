import Cast from "../../../../components/Cast/Cast";
import Info from "../../../../components/Info/Info";
import Media from "../../../../components/Media/Media";
import Reviews from "../../../../components/Reviews/Reviews";

interface PageIdContentProps {
  active: string;
  id: string | undefined;
}

const PageIdContent = ({ active, id }: PageIdContentProps) => {
  if (!id) {
    return;
  }

  switch (active) {
    case "info":
      return <Info id={id} />;
    case "actors":
      return <Cast id={id} />;
    case "reviews":
      return <Reviews id={id} />;
    case "media":
      return <Media id={id} />;
  }
};

export default PageIdContent;
