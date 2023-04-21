import React from "react";

interface PurpleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const PurpleButton: React.FC<PurpleButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative inline-flex items-center px-4 py-2 text-white rounded-[50px] transition-all duration-300 bg-gradient-to-r hover:bg-transparent border-gradient-to-r from-cd9bf4 to-432ad9 hover:from-transparent hover:to-transparent"
      style={{
        background: "#060111",
        backgroundImage: "linear-gradient(to right, #CD9BF4 0%, #432AD9 100%)",
        backgroundClip: "padding-box, border-box",
        backgroundOrigin: "padding-box, border-box",
      }}
    >
      <span className="relative">{children}</span>
    </button>
  );
};

export default PurpleButton;
