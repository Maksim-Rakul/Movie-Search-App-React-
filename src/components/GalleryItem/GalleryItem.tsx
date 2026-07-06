import type { Picture } from "../../types/multi";
import css from "./GalleryItem.module.css";

interface GalleryItemProps {
  picture: Picture;
}

const GalleryItem = ({ picture }: GalleryItemProps) => {
  const src = `https://image.tmdb.org/t/p/w1280/${picture.file_path}`;
  return (
    <li className={css.galleryItem}>
      <img className={css.galleryImg} src={src} alt="#" />
    </li>
  );
};

export default GalleryItem;
