import { useQuery } from "@tanstack/react-query";
import { usePagintation } from "../../hooks/usePagination";
import { useState } from "react";
import css from "./Gallery.module.css";
import GalleryItem from "../GalleryItem/GalleryItem";
import PaginationsNav from "../PaginationsNav/PaginationsNav";
import Modal from "../Modal/Modal";
import type { Picture } from "../../types/multi";
import { getImgById } from "../../services/multiService";
import { usePageTypeContext } from "../../context/PageContext";
import { useParams } from "react-router-dom";

const Gallery = () => {
  const [page, setPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(0);
  const { id } = useParams<{ id: string }>();

  const { type } = usePageTypeContext();

  const { data } = useQuery({
    queryKey: ["gallery", id],
    queryFn: () => getImgById(type, id!),
  });

  const { newData, hasAnyItems } = usePagintation<Picture>({
    data: data?.posters,
    page,
    perPage: 6,
  });

  const handleNext = () => {
    if (selectedImg >= newData.length - 1) {
      console.log("retern to first");
      setSelectedImg(0);
      return;
    }

    setSelectedImg(selectedImg + 1);
  };

  const handlePrev = () => {
    if (selectedImg === 0) {
      console.log("retern to last");
      setSelectedImg(newData.length - 1);
      return;
    }

    setSelectedImg(selectedImg - 1);
  };

  return (
    <div className={css.pictureListWrap}>
      <ul className={css.pictureList}>
        {data &&
          newData.map((picture, index) => {
            return (
              <GalleryItem
                key={picture.file_path}
                picture={picture}
                onClick={setSelectedImg}
                openModal={() => setIsModalOpen(true)}
                index={index}
              />
            );
          })}
      </ul>

      <PaginationsNav
        hasAnyItems={hasAnyItems}
        page={page}
        onNext={() => setPage(page + 1)}
        onPrev={() => setPage(0)}
      />

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <img
            src={`https://image.tmdb.org/t/p/w1280/${newData[selectedImg].file_path}`}
            alt=""
          />
          <div className={css.btns}>
            <button className={`${css.navBtn}`} onClick={handlePrev}>
              {"<"}
            </button>
            <button className={`${css.navBtn}`} onClick={handleNext}>
              {">"}
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Gallery;
