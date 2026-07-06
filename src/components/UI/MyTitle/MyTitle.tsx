import css from "./MyTitle.module.css";

const MyTitle = ({ name }: { name: string }) => {
  return (
    <div>
      <h3 className={css.myTitle}>{name}</h3>
    </div>
  );
};

export default MyTitle;
