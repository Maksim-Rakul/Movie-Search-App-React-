import { useParams } from "react-router-dom";

const ActorById = () => {
  const { actorId } = useParams();
  return <div>ACTOR BY ID: {actorId}</div>;
};

export default ActorById;
