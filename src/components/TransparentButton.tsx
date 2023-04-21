import { PropsWithChildren } from "react";

const TransparentButton = ({ callback, children }: PropsWithChildren<{ callback?: Function }>) => {
  return (
    <>
      <button
        className={`rounded-full px-6 pt-[14px] pb-[14px] items-center flex   text-white z-[1] border-[2px] border-purple-gradient-finish  mx-auto sm:mx-0 bh-button`}
        onClick={() => {
          if (callback) callback();
        }}
      >
        {children}
      </button>
    </>
  );
};

export default TransparentButton;
