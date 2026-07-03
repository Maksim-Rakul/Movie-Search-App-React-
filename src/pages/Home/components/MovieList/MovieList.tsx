import MovieCard from "../../../../components/MovieCard/MovieCard";
import type { Movie } from "../../../../types/movie";
import { SwiperSlide, Swiper } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import css from "./MovieList.module.css";
import "swiper/css";

import { useRef } from "react";
import type { TV } from "../../../../types/tv";

interface AllMovieAndTypes {
  movies: Movie[] | TV[];
  type: "movie" | "tv";
}

interface MovieListProps {
  movies: AllMovieAndTypes;
  name: string;
  type: string;
}

const MovieList = ({ movies, name, type }: MovieListProps) => {
  console.log(movies);

  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className={css.listWrap}>
      <h2 className={css.listCategory}>{name}</h2>
      <div className={css.sliderNav}>
        <button
          className={css.sliderNavBtn}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          {"<"}
        </button>
        <button
          className={css.sliderNavBtn}
          onClick={() => swiperRef.current?.slideNext()}
        >
          {">"}
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

export default MovieList;
