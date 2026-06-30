import { Swiper, SwiperSlide } from "swiper/react";
import type { Movie } from "../../../../types/movie";
import { Autoplay, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import css from "./Baner.module.css";
import BanerItem from "../BanerItem/BanerItem";

interface BanerProps {
  movies: Movie[];
}

const Baner = ({ movies }: BanerProps) => {
  return (
    <div className={css.baner}>
      <Swiper
        modules={[Autoplay, Scrollbar]}
        loop={true}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        scrollbar={{ draggable: true }}
        speed={1000}
      >
        {movies.map((movie) => {
          const imgSrc = `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`;
          return (
            <SwiperSlide
              key={movie.id}
              className={css.slide}
              style={{ backgroundImage: `url(${imgSrc})` }}
            >
              <BanerItem movie={movie} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Baner;
