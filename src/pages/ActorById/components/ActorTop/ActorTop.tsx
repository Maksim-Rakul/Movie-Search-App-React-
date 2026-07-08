import Description from "../../../../components/UI/Description/Description";
import type { Actor } from "../../../../types/actor";
import css from "./ActorTop.module.css";

interface ActorTopProps {
  actor: Actor;
}

const ActorTop = ({ actor }: ActorTopProps) => {
  const src = `https://image.tmdb.org/t/p/w1280/${actor.profile_path}`;
  return (
    <div className={css.wrap}>
      <img className={css.actorImg} src={src} alt="" />
      <div>
        <h2 className={css.actorName}>{actor.name}</h2>
        <ul className={css.actorTagsList}>
          <li className={css.actorTagsItem}>{actor.known_for_department}</li>
          <li className={css.actorTagsItem}>{actor.birthday}</li>
          <li className={css.actorTagsItem}>{actor.place_of_birth}</li>
        </ul>
        <div className={css.descWrap}>
          {actor.biography && <Description text={actor.biography} />}
        </div>
      </div>
    </div>
  );
};

export default ActorTop;
