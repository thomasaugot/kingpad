interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const PurpleButton = ({ children, onClick }: ButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="purple-gradient-button inline-flex items-center px-4 py-2 rounded-[50px]"
    >
      <span className="relative text-[13px]">{children}</span>
    </button>
  );
};

export default PurpleButton;
