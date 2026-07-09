import { useQuery } from "@tanstack/react-query";
import VideoItem from "../VideoItem/VideoItem";
import css from "./VideoList.module.css";
import { useState } from "react";
import { usePagintation } from "../../hooks/usePagination";
import PaginationsNav from "../PaginationsNav/PaginationsNav";
import { getVideoById } from "../../services/multiService";
import { usePageTypeContext } from "../../context/PageContext";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import NotFound from "../NotFound/NotFound";
import MyTitle from "../UI/MyTitle/MyTitle";
import Error from "../Error/Error";

const VideoList = () => {
  const [page, setPage] = useState(0);

  const { type } = usePageTypeContext();
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["media"],
    queryFn: () => getVideoById(type, id!),
  });

  const { newData, hasAnyItems } = usePagintation({
    data: data?.results,
    page,
    perPage: 3,
  });

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  if (!data?.results || data.results.length === 0) {
    return <NotFound />;
  }

  return (
    <div className={css.videoListWrap}>
      <MyTitle name="Video" />
      {newData.length > 0 && (
        <div>
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
      )}
    </div>
  );
};

export default VideoList;
