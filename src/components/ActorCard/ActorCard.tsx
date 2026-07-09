import { Link } from "react-router-dom";
import type { Actor } from "../../types/actor";
import css from "./ActorCard.module.css";
import UnloadAvatar from "../UnloadAvatar/UnloadAvatar";

interface ActorCardProps {
  actor: Actor;
}

const ActorCard = ({ actor }: ActorCardProps) => {
  const actorImg = `https://image.tmdb.org/t/p/w1280/${actor.profile_path}`;
  return (
    <Link to={`/actor/${actor.id}`} className={css.actor}>
      {actor.profile_path ? (
        <img className={css.actorImg} src={actorImg} alt={actor.name} />
      ) : (
        <div className={css.actorImg}>
          <UnloadAvatar />
        </div>
      )}
      <h3 className={css.actorName}>{actor.name}</h3>
      <p className={css.actorRole}>{actor.known_for_department}</p>
    </Link>
  );
};

export default ActorCard;
