import type { Actor } from "../../types/actor";
import css from "./ActorCard.module.css";

interface ActorCardProps {
  actor: Actor;
}

const ActorCard = ({ actor }: ActorCardProps) => {
  const actorImg = `https://image.tmdb.org/t/p/w1280/${actor.profile_path}`;
  return (
    <div className={css.actor}>
      <img className={css.actorImg} src={actorImg} alt="" />
      <h3 className={css.actorName}>{actor.name}</h3>
      <p className={css.actorRole}>{actor.known_for_department}</p>
    </div>
  );
};

export default ActorCard;
