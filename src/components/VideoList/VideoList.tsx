import { useQuery } from "@tanstack/react-query";
import { getVideoByMovieId } from "../../services/movieService";
import VideoItem from "../VideoItem/VideoItem";
import css from "./VideoList.module.css";
import { useState } from "react";
import { usePagintation } from "../../hooks/usePagination";
import PaginationsNav from "../PaginationsNav/PaginationsNav";

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

  console.log(data);

  return (
    <div className={css.videoListWrap}>
      <ul className={css.videoList}>
        {data &&
          newData.map((video) => {
            return <VideoItem key={video.id} video={video} />;
          })}
      </ul>
      <PaginationsNav
        hasAnyItems={hasAnyItems}
        page={page}
        onNext={() => setPage(page + 1)}
        onPrev={() => setPage(0)}
      />
    </div>
  );
};

export default VideoList;
