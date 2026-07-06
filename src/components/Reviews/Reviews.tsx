import { useQuery } from "@tanstack/react-query";
import { getReviewsByMovieId } from "../../services/movieService";
import ReviewItem from "../ReviewItem/ReviewItem";
import css from "./Reviews.module.css";

const Reviews = ({ id }: { id: string }) => {
  const { data } = useQuery({
    queryKey: ["reviews", id],
    queryFn: () => getReviewsByMovieId(id),
  });

  return (
    <div>
      {data && (
        <ul className={css.reviewsList}>
          {data.results.map((review) => (
            <ReviewItem key={review.created_at} review={review} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
