import { SwiperSlide, Swiper } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import css from "./MovieSliderList.module.css";
import "swiper/css";
import { useRef } from "react";
import type { Movie } from "../../types/movie";
import type { TV } from "../../types/tv";
import MovieCard from "../MovieCard/MovieCard";

interface AllMovieAndTypes {
  movies: Movie[] | TV[];
}

interface MovieListProps {
  movies: AllMovieAndTypes;
  name?: string;
  type: string;
}

const MovieSliderList = ({ movies, name, type }: MovieListProps) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className={css.listWrap}>
      <h2 className={css.listCategory}>{name}</h2>
      <div className={css.sliderNav}>
        <button
          className={css.sliderNavBtn}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <img src="/icons/prev.svg" alt="" />
        </button>
        <button
          className={css.sliderNavBtn}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <img src="/icons/next.svg" alt="" />
        </button>
      </div>
      <ul>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop={true}
          pagination={{ clickable: true }}
          slidesPerView={2}
          spaceBetween={11}
          speed={1000}
          navigation
          breakpoints={{
            320: { slidesPerView: 2 },
            767: { slidesPerView: 4 },
            1280: { slidesPerView: 8 },
          }}
        >
          {movies.movies.map((movie) => {
            return (
              <SwiperSlide>
                <MovieCard movie={movie} type={type} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </ul>
    </div>
  );
};

export default MovieSliderList;
