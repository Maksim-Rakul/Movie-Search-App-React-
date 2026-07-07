import type { Picture } from "../../types/multi";
import css from "./GalleryItem.module.css";

interface GalleryItemProps {
  picture: Picture;
  onClick: (index: number) => void;
  openModal: () => void;
  index: number;
}

const GalleryItem = ({
  picture,
  onClick,
  openModal,
  index,
}: GalleryItemProps) => {
  const src = `https://image.tmdb.org/t/p/w1280/${picture.file_path}`;

  const handleClick = () => {
    onClick(index);
    openModal();
  };

  return (
    <li className={css.galleryItem} onClick={handleClick}>
      <img className={css.galleryImg} src={src} alt="#" />
    </li>
  );
};

export default GalleryItem;
