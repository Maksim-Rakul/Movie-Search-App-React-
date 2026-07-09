import type { Review } from "../../types/multi";
import { getYear } from "../../utils";
import Rate from "../UI/Rate/Rate";
import css from "./ReviewItem.module.css";

import Description from "../UI/Description/Description";
import UnloadAvatar from "../UnloadAvatar/UnloadAvatar";

interface ReviewItemProps {
  review: Review;
}

const ReviewItem = ({ review }: ReviewItemProps) => {
  const avatarImg = `https://image.tmdb.org/t/p/w1280/${review.author_details.avatar_path}`;

  return (
    <li className={css.reviewItem}>
      <div className={css.reviewTop}>
        <div className={css.author}>
          {review.author_details.avatar_path ? (
            <img
              className={css.avatar}
              src={avatarImg}
              alt={review.author_details.name}
            />
          ) : (
            <div className={css.avatarLost}>
              <UnloadAvatar />
            </div>
          )}

          <div>
            <h3 className={css.name}>{review.author_details.name}</h3>
            <p className={css.date}>{getYear(review.created_at)}</p>
          </div>
        </div>

        {review.author_details.rating && (
          <Rate rate={review.author_details.rating} />
        )}
      </div>
      {<Description text={review.content} />}
    </li>
  );
};

export default ReviewItem;
