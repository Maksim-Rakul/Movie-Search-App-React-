import css from "./MyButton.module.css";

interface MyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  isActive: boolean;
}

const MyButton = ({ children, isActive, ...props }: MyButtonProps) => {
  return (
    <button {...props} className={`${css.myBtn} ${isActive && css.active}`}>
      {children}
    </button>
  );
};

export default MyButton;
