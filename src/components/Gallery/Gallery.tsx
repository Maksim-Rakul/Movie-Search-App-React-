import { useQuery } from "@tanstack/react-query";
import { getGalleryByMovieId } from "../../services/movieService";
import { usePagintation } from "../../hooks/usePagination";
import { useState } from "react";
import css from "./Gallery.module.css";
import NavBtn from "../UI/NaVBtn/NavBtn";
import GalleryItem from "../GalleryItem/GalleryItem";

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
        {hasAnyItems && (
          <NavBtn onClick={() => setPage(page + 1)}>Load more</NavBtn>
        )}
        {page >= 1 && <NavBtn onClick={() => setPage(0)}>Return</NavBtn>}
      </div>
    </div>
  );
};

export default Gallery;
