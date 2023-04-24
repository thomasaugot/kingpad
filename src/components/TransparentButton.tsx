import Image from "next/image";
import { PropsWithChildren, useState } from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const TransparentButton = ({ children, onClick }: PropsWithChildren<ButtonProps>) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="flex basis-1/3 justify-center text-center	 items-center relative">
      <div
        className="w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          className={`button-border-gradient items-center flex z-[1] mx-auto sm:mx-0`}
          onClick={handleClick}
        >
          <span className="text-[17px]">{children}</span>
        </button>
      </div>
      <Image
        className={`absolute z-10 pointer-events-none bottom-0 transition-all ease-in-out duration-300 ${
          isHovered ? "translate-y-1/3" : "translate-y-2/3 opacity-0"
        }`}
        src="/img/pointer_hand.png"
        alt="pointer"
        width="50"
        height="30"
      />
    </div>
  );
};

export default TransparentButton;
