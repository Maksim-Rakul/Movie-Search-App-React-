import type { Video } from "../../types/multi";
import css from "./VideoItem.module.css";

interface VideoItemProps {
  video: Video;
}

const VideoItem = ({ video }: VideoItemProps) => {
  const url = `https://www.youtube-nocookie.com/embed/${video.key}`;

  return (
    <li className={css.videoItem}>
      <iframe
        className={css.video}
        src={url}
        title={video.name || "Video"}
      ></iframe>
    </li>
  );
};

export default VideoItem;
