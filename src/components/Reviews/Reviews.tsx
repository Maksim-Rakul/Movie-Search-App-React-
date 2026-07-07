import { useQuery } from "@tanstack/react-query";
import ReviewItem from "../ReviewItem/ReviewItem";
import css from "./Reviews.module.css";
import { usePagintation } from "../../hooks/usePagination";
import { useState } from "react";
import PaginationsNav from "../PaginationsNav/PaginationsNav";
import { getReviewsById } from "../../services/multiService";
import { usePageTypeContext } from "../../context/PageContext";
import { useParams } from "react-router-dom";

const Reviews = () => {
  const [page, setPage] = useState(0);
  const { type } = usePageTypeContext();

  const { id } = useParams<{ id: string }>();

  const { data } = useQuery({
    queryKey: ["reviews", id, type],
    queryFn: () => getReviewsById(type, id!),
  });

  const { newData, hasAnyItems } = usePagintation({
    data: data?.results,
    page,
    perPage: 3,
  });

  return (
    <div>
      {data && (
        <ul className={css.reviewsList}>
          {newData.map((review) => (
            <ReviewItem key={review.created_at} review={review} />
          ))}
        </ul>
      )}
      <PaginationsNav
        hasAnyItems={hasAnyItems}
        page={page}
        onNext={() => setPage(page + 1)}
        onPrev={() => setPage(0)}
      />
    </div>
  );
};

export default Reviews;
