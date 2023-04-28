import Image from "next/image";
import Socials from "./Socials";

const Header: React.FC = () => {
  return (
    <header className="max-w-[1420px] mx-auto pb-[130px] flex flex-col lg:pl-[240px] py-[50px] space-x-1  lg:flex-row relative items-center [&_*]:text-white w-full">
      <div className="flex w-[80vw] lg:w-[70vw]">
        <div className="flex flex-col justify-center md:mx-auto lg:mx-0">
          <h1 className="tracking-[1px] flex flex-col justify-center lg:justify-start w-[100%] text-center lg:text-left mx-auto -mt-8 lg:mt-0 text-white md:w-[494px] lg:w-[534px] text-[35px] md:text-[55px] mb-2 font-extrabold whitespace-normal lg:whitespace-nowrap">
            <span>A Safe place</span>
            <div className="flex flex-nowrap justify-center lg:justify-start whitespace-nowrap">
              <span>to join the</span>
              <span className="gradient-text font-extrabold tracking-[1px] pr-1 whitespace-nowrap text-[35px] md:text-[55px]">
                &nbsp;best
              </span>
              <span className="text-white text-[35px] md:text-[55px] mb-2 font-extrabold whitespace-nowrap">
                .
              </span>
            </div>
          </h1>
          <p className="text-center flex-grow-1 lg:mx-0 md:text-[20px] lg:text-left text-[16px]">
            Kingpad is your place to be if you are <br /> looking to invest in the future.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start items-center mb-[190px] md:mb-[250px] lg:mb-0">
            <Socials />
          </div>
        </div>
      </div>
      <div className="absolute right-[10px] top-[270px] md:right-[180px] md:top-[350px]  lg:right-[170px] lg:top-[40px] ">
        <Image
          alt="rocket ship"
          className="relative"
          src="/img/rocket_ship.png"
          width="453"
          height="305"
        />
        <Image
          className="absolute max-w-[1400px] z-[-1] right-[-550px] lg:right-[-450px]
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
