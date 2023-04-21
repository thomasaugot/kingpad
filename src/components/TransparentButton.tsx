import { PropsWithChildren } from "react";

const TransparentButton = ({ callback, children }: PropsWithChildren<{ callback?: Function }>) => {
  return (
    <>
      <button
        className={`button-border-gradient items-center flex z-[1]  mx-auto sm:mx-0`}
        onClick={() => {
          if (callback) callback();
        }}
      >
        <span> {children}</span>
      </button>
    </>
  );
};

export default TransparentButton;
