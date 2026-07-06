import { useEffect, useRef, useState } from "react";
import type { Review } from "../../types/multi";
import { getYear } from "../../utils";
import Rate from "../UI/Rate/Rate";
import css from "./ReviewItem.module.css";
import NavBtn from "../UI/NaVBtn/NavBtn";

interface ReviewItemProps {
  review: Review;
}

const ReviewItem = ({ review }: ReviewItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [big, setBig] = useState(true);
  const contentRef = useRef<HTMLParagraphElement>(null);

  const avatarImg = `https://image.tmdb.org/t/p/w1280/${review.author_details.avatar_path}`;

  useEffect(() => {
    if (!contentRef.current) return;

    const height = contentRef.current.clientHeight;
    const shouldHide = height > 100;

    if (shouldHide) {
      setBig(true);
      contentRef.current.classList.add(css.hideContent);
    } else {
      setBig(false);
      contentRef.current.classList.remove(css.hideContent);
    }
  }, []);

  const handleClick = () => {
    if (!contentRef.current) return;
    setIsOpen(!isOpen);
    contentRef.current.classList.toggle(css.hideContent);
  };

  return (
    <li className={css.reviewItem}>
      <div className={css.reviewTop}>
        <div className={css.author}>
          <img
            className={css.avatar}
            src={avatarImg}
            alt={review.author_details.name}
          />
          <div>
            <h3 className={css.name}>{review.author_details.name}</h3>
            <p className={css.date}>{getYear(review.created_at)}</p>
          </div>
        </div>

        {review.author_details.rating && (
          <Rate rate={review.author_details.rating} />
        )}
      </div>
      <p
        ref={contentRef}
        className={`${big ? css.hideContent : ""} ${css.content} `}
      >
        {review.content}
      </p>

      {big && (
        <NavBtn onClick={handleClick}>
          {isOpen ? "Show less" : "Show more"}
        </NavBtn>
      )}
    </li>
  );
};

export default ReviewItem;
