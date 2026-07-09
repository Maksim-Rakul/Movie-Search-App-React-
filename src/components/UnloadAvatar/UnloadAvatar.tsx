import css from "./UnloadAvatar.module.css";

const UnloadAvatar = () => {
  return (
    <div className={css.avatarLost}>
      <img src="/icons/avatar.svg" alt="" className={css.icon} />
    </div>
  );
};

export default UnloadAvatar;
