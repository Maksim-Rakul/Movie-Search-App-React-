import { useQuery } from "@tanstack/react-query";
import ActorCard from "../ActorCard/ActorCard";
import css from "./Cast.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { getActorsById } from "../../services/multiService";
import { usePageTypeContext } from "../../context/PageContext";
import { useParams } from "react-router-dom";
import MyTitle from "../UI/MyTitle/MyTitle";
import NotFound from "../NotFound/NotFound";

const Cast = () => {
  const { type } = usePageTypeContext();
  const { id } = useParams<{ id: string }>();

  const { data } = useQuery({
    queryKey: ["info", id],
    queryFn: () => getActorsById(type, id!),
  });

  if (!data) return;

  return (
    <div>
      <MyTitle name="Cast" />
      {data.cast.length > 0 ? (
        <div>
          <Swiper
            loop={true}
            slidesPerView={3}
            breakpoints={{
              320: { slidesPerView: 2 },
              767: { slidesPerView: 7 },
              1280: { slidesPerView: 9 },
            }}
          >
            {data.cast.map((actor) => {
              return (
                <SwiperSlide key={actor.id} className={css.slide}>
                  <ActorCard actor={actor} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Cast;
