import Image from "next/image";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="max-w-[1591px] pb-[130px] flex flex-col lg:pl-[240px] py-[50px] space-x-1  lg:flex-row relative items-center [&_*]:text-white w-full">
      <div className="flex w-[70vw]">
        <div className="flex flex-col">
          <h1 className="tracking-[1px] text-white text-[55px] mb-2 font-extrabold lg:text-left">
            A Safe place <br />
            to join the&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className=" gradient-text absolute top-[133px] left-[545px] text-[55px]">
              best
            </span>
            .
          </h1>
          <p className="text-center lg:text-left text-[16px]">
            Kingpad is your place to be if you are looking to <br /> invest in the future.
          </p>
          <Socials />
        </div>
      </div>

      <div className="absolute right-[170px] top-[40px] ">
        <Image
          alt="rocket ship"
          className="relative"
          src="/img/rocket_ship.png"
          width="453"
          height="305"
        />
        <Image
          className="absolute max-w-[1400px]  z-[-1]  right-[-450px]
              top-[-440px]"
          alt="glow"
          src="/img/glow.png"
          width="1400"
          height="800"
        />
      </div>
    </header>
  );
};
export default Header;
