import css from "./Rate.module.css";

const Rate = ({ rate }: { rate: number }) => {
  return (
    <div className={css.rateWrap}>
      <span>ICON</span>
      <p className={css.rate}>
        <span className={css.rateAcent}>{rate.toFixed(1)}</span>
        /10
      </p>
    </div>
  );
};

export default Rate;
