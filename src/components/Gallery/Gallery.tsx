import { useQuery } from "@tanstack/react-query";
import { getGalleryByMovieId } from "../../services/movieService";
import { usePagintation } from "../../hooks/usePagination";
import { useState } from "react";
import css from "./Gallery.module.css";
// import NavBtn from "../UI/NaVBtn/NavBtn";
import GalleryItem from "../GalleryItem/GalleryItem";
import PaginationsNav from "../PaginationsNav/PaginationsNav";

const Gallery = ({ id }: { id: string }) => {
  const [page, setPage] = useState(0);

  const { data } = useQuery({
    queryKey: ["gallery", id],
    queryFn: () => getGalleryByMovieId(id),
  });

  const { newData, hasAnyItems } = usePagintation({
    data: data?.posters,
    page,
    perPage: 6,
  });

  return (
    <div className={css.pictureListWrap}>
      <ul className={css.pictureList}>
        {data &&
          newData.map((picture) => {
            return <GalleryItem key={picture.file_path} picture={picture} />;
          })}
      </ul>
      <div className={css.btns}>
        <PaginationsNav
          hasAnyItems={hasAnyItems}
          page={page}
          onNext={() => setPage(page + 1)}
          onPrev={() => setPage(0)}
        />
      </div>
    </div>
  );
};

export default Gallery;
