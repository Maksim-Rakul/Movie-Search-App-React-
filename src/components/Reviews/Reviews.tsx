import { useQuery } from "@tanstack/react-query";
import { getReviewsByMovieId } from "../../services/movieService";
import ReviewItem from "../ReviewItem/ReviewItem";
import css from "./Reviews.module.css";
import { usePagintation } from "../../hooks/usePagination";
import { useState } from "react";
import PaginationsNav from "../PaginationsNav/PaginationsNav";

const Reviews = ({ id }: { id: string }) => {
  const [page, setPage] = useState(0);

  const { data } = useQuery({
    queryKey: ["reviews", id],
    queryFn: () => getReviewsByMovieId(id),
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
