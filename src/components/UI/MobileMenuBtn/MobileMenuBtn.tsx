import css from "./MobileMenuBtn.module.css";

interface MobileMenuBtnProps {
  onClick: () => void;
  isOpen: boolean;
}

const MobileMenuBtn = ({ isOpen, ...props }: MobileMenuBtnProps) => {
  return (
    <button className={css.mobileBtn} {...props}>
      {isOpen ? "X" : "="}
    </button>
  );
};

export default MobileMenuBtn;
