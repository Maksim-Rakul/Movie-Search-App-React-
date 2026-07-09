import { useQuery } from "@tanstack/react-query";
import ReviewItem from "../ReviewItem/ReviewItem";
import css from "./Reviews.module.css";
import { usePagintation } from "../../hooks/usePagination";
import { useState } from "react";
import PaginationsNav from "../PaginationsNav/PaginationsNav";
import { getReviewsById } from "../../services/multiService";
import { usePageTypeContext } from "../../context/PageContext";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import NotFound from "../NotFound/NotFound";
import MyTitle from "../UI/MyTitle/MyTitle";

const Reviews = () => {
  const [page, setPage] = useState(0);
  const { type } = usePageTypeContext();
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["reviews", id, type],
    queryFn: () => getReviewsById(type, id!),
    enabled: !!id,
  });

  const { newData, hasAnyItems } = usePagintation({
    data: data?.results || [],
    page,
    perPage: 3,
  });

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  if (!data?.results || data.results.length === 0) {
    return <NotFound />;
  }

  return (
    <div>
      <MyTitle name="Reviews" />

      <ul className={css.reviewsList}>
        {newData.map((review) => (
          <ReviewItem key={review.created_at} review={review} />
        ))}
      </ul>

      <PaginationsNav
        hasAnyItems={hasAnyItems}
        page={page}
        onNext={() => setPage(page + 1)}
        onPrev={() => setPage(Math.max(0, page - 1))}
      />
    </div>
  );
};

export default Reviews;
