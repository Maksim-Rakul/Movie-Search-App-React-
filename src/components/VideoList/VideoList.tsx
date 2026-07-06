import { useQuery } from "@tanstack/react-query";
import { getVideoByMovieId } from "../../services/movieService";
import VideoItem from "../VideoItem/VideoItem";
import css from "./VideoList.module.css";
import { useState } from "react";
import { usePagintation } from "../../hooks/usePagination";
import NavBtn from "../UI/NaVBtn/NavBtn";

const VideoList = ({ id }: { id: string }) => {
  const [page, setPage] = useState(0);

  const { data } = useQuery({
    queryKey: ["media"],
    queryFn: () => getVideoByMovieId(id),
  });

  const { newData, hasAnyItems } = usePagintation({
    data: data?.results,
    page,
    perPage: 3,
  });

  return (
    <div className={css.videoListWrap}>
      <ul className={css.videoList}>
        {data &&
          newData.map((video) => {
            return <VideoItem key={video.id} video={video} />;
          })}
      </ul>
      <div className={css.btns}>
        {hasAnyItems && (
          <NavBtn onClick={() => setPage(page + 1)}>Load more</NavBtn>
        )}
        {page >= 1 && <NavBtn onClick={() => setPage(0)}>Return</NavBtn>}
      </div>
    </div>
  );
};

export default VideoList;
