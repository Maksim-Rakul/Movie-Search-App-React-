import css from "./ActorTop.module.css";

interface ActorTopProps {
  src: string;
  name: string;
  known_for_department: string;
  birthday: string;
  place_of_birth: string;
  biography?: string;
}

const ActorTop = ({
  src,
  name,
  known_for_department,
  birthday,
  place_of_birth,
  biography,
}: ActorTopProps) => {
  return (
    <div>
      <img className={css.actorImg} src={src} alt="" />

      <h2 className={css.actorName}>{name}</h2>

      <ul className={css.subInfoList}>
        <li>{known_for_department}</li>
        <li>{birthday}</li>
        <li>{place_of_birth}</li>
      </ul>

      <p className={css.biography}>{biography}</p>
    </div>
  );
};

export default ActorTop;
