import { useEffect, useRef, useState } from "react";

import css from "./Description.module.css";
import NavBtn from "../NaVBtn/NavBtn";

const Description = ({ text }: { text: string }) => {
  const [big, setBig] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const contentRef = useRef<HTMLParagraphElement>(null);

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
    <div>
      <p
        ref={contentRef}
        className={`${big ? css.hideContent : ""} ${css.content} `}
      >
        {text}
      </p>

      {big && (
        <NavBtn onClick={handleClick}>
          {isOpen ? "Show less" : "Show more"}
        </NavBtn>
      )}
    </div>
  );
};

export default Description;
