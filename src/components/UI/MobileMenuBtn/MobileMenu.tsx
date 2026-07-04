import { useState } from "react";
import NavBar from "../../NavBar/NavBar";
import css from "./MobileMenu.module.css";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <button className={css.mobileBtn} onClick={handleClick}>
        {isMenuOpen ? "X" : "="}
      </button>
      {isMenuOpen && (
        <div
          className={css.backdrop}
          onClick={() => {
            setIsMenuOpen(false);
          }}
        >
          <div className={`${css.mobileMenu} ${css.open}`}>
            <NavBar />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
