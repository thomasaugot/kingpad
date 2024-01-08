import Image from "next/image";
import TransparentButton from "./TransparentButton";
import React from "react";

const MintPassSection = () => {
  return (
    <div className="flex flex-col md:flex-row align-middle bg-kp-dark h-[530px] w-[348px] md:w-[680px] md:h-[270px] lg:w-[1120px] lg:h-[191px] rounded-2xl my-6 lg:my-12 mx-auto">
      <div className="basis-1/4 my-6 lg:my-auto">
        <div className="flex lg:relative mx-auto lg:mx-0 lg:-my-14 lg:ml-4 md:-mt-8 md:-mr-[70px] lg:-mt-16 lg:mr-0">
          <Image
            className="object-cover z-10 mx-auto md:h-[289px] md:[205px] "
            alt="kingpass"
            src="/img/Kingpass-card.PNG"
            width="189"
            height="236"
          />
        </div>
      </div>

      <div className="basis-2/4 flex flex-col align-middle -my-2 -mb-9 lg:mb-2 md:ml-[75px] lg:mt-0 lg:ml-0 md:-mt-[30px] md:justify-center space-y-3">
        <h3 className="text-[24px] mx-auto md:text-[33px] md:w-[394px] lg:mx-0 lg:text-[30px] ">
          Reserve your allocation
        </h3>
        <p className="text-[12px] lg:text-[13px] text-center lg:text-left mx-auto  md:w-[310px] lg:mx-0 w-[297px] lg:w-[509px] lg:-mt-8">
          Minting a Kingpass allows you to enjoy reserved allocations in every start-up launched at
          Kingpad. If you enjoy a relaxed and guaranteed way of investing, the Kingpass is what you
          are looking for.
        </p>
        <div className="hidden md:flex justify-center lg:hidden">
          <TransparentButton>
            <span className="whitespace-nowrap">Mint Now</span>
          </TransparentButton>
        </div>
      </div>
      <div className="basis-1/4 my-auto flex justify-center md:hidden lg:flex">
        <div className="group inline-block">
          <TransparentButton>
            <span className="group-hover:bg-opacity-80">Mint Now</span>
          </TransparentButton>
        </div>
      </div>
    </div>
  );
};

export default MintPassSection;
