import css from "./NavBtn.module.css";

interface NavBtnProps {
  onClick: () => void;
  children: React.ReactNode;
}

const NavBtn = ({ children, onClick }: NavBtnProps) => {
  return (
    <button className={css.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default NavBtn;
