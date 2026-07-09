import css from "./Rate.module.css";

const Rate = ({ rate }: { rate: number }) => {
  return (
    <div className={css.rateWrap}>
      <img src="/icons/star.svg" alt="" className={css.icon} />
      <p className={css.rate}>
        <span className={css.rateAcent}>{rate.toFixed(1)}</span>
        /10
      </p>
    </div>
  );
};

export default Rate;
