import Gallery from "../Gallery/Gallery";
import VideoList from "../VideoList/VideoList";

const Media = ({ id }: { id: string }) => {
  return (
    <div>
      <VideoList id={id} />
      <Gallery id={id} />
    </div>
  );
};

export default Media;
