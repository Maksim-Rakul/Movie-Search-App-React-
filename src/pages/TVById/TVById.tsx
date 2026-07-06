import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getTvById } from "../../services/tvService";
import css from "./TVById.module.css";
import PageByIdTop from "../../components/PageByIdTop/PageByIdTop";

const TVById = () => {
  const { tvId } = useParams<{ tvId: string }>();

  console.log(tvId);

  const { data } = useQuery({
    queryKey: ["movieById", tvId],
    queryFn: () => getTvById(tvId!),
  });

  console.log(data);

  return (
    <div className={css.wrap}>
      {data && <PageByIdTop content={data} type="tv" />}
    </div>
  );
};

export default TVById;
