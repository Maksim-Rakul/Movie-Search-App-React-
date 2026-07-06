import { useQuery } from "@tanstack/react-query";
import { getActorsByMovieId } from "../../services/movieService";
import ActorCard from "../ActorCard/ActorCard";
import css from "./Cast.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import MyTitle from "../UI/MyTitle/MyTitle";

interface CastProps {
  id: string;
}

const Cast = ({ id }: CastProps) => {
  const { data } = useQuery({
    queryKey: ["info", id],
    queryFn: () => getActorsByMovieId(id),
  });

  return (
    <div>
      <MyTitle name="Casts" />
      {data && (
        <Swiper loop={true} slidesPerView={3}>
          {data.cast.map((actor) => {
            return (
              <SwiperSlide key={actor.id} className={css.slide}>
                <ActorCard actor={actor} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
};

export default Cast;
