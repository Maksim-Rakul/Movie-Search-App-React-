import { useParams } from "react-router-dom";

const TVById = () => {
  const { tvId } = useParams();

  return <div>TV BY ID: {tvId}</div>;
};

export default TVById;
