interface PurpleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const PurpleButton: React.FC<PurpleButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="purple-gradient-button inline-flex items-center px-4 py-2 rounded-[50px]"
    >
      <span className="relative">{children}</span>
    </button>
  );
};

export default PurpleButton;
