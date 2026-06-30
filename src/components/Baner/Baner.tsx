import { Swiper, SwiperSlide } from "swiper/react";
import type { Movie } from "../../types/movie";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

interface BanerProps {
  movies: Movie[];
}

const Baner = ({ movies }: BanerProps) => {
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        loop={true}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        speed={1000}
      >
        {movies.map((movie) => {
          const imgSrc = `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`;
          return (
            <SwiperSlide key={movie.id}>
              <img src={imgSrc} alt={movie.overview} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Baner;
