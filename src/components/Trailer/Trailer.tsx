import css from "./Trailer.module.css";

interface TrailerProps {
  src: string;
}

const Trailer = ({ src }: TrailerProps) => {
  return <iframe className={css.trailer} src={src}></iframe>;
};

export default Trailer;
