import React from "react";
import TransparentButton from "./TransparentButton";

function ApplySection(): JSX.Element {
  return (
    <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:justify-between bg-kp-dark py-[40px] px-[30px] lg:p-[50px] lg:pr-[60px] max-w-[348px] md:max-w-[680px] md:h-[351px] lg:max-w-[1120px] lg:h-[191px] rounded-2xl mx-auto">
      <div className="order-1 flex items-center">
        <div className="flex flex-col space-y-3 m-auto">
          <h2 className="text-[24px] md:text-[33px] lg:text-[30px] text-center">
            Launch with Kingpad
          </h2>
          <p className="text-[13px] text-center w-[173px] md:text-[15px] md:w-[348px] lg:w-[340px] lg:text-[13px] m-auto">
            Make sure to go through our vetting processes
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center order-3 lg:order-2 pt-4 md:pt-0">
        <TransparentButton>
          <span className="whitespace-nowrap">Apply now</span>
        </TransparentButton>
      </div>
      <div className="flex lg:basis-1/3 justify-between md:justify-evenly lg:justify-between order-2 lg:order-3">
        <div className="hidden lg:block h-full w-[2px] bg-white"></div>
        <div className="[&_*]:text-center md:-mr-6 lg:mr-0">
          <h3 className="gradient-text relative text-[37px] font-bold">565K</h3>
          <p className="text-[13px]">
            Raised <br /> capital
          </p>
        </div>
        <div className="lg:hidden h-[90px] w-[2px] bg-white -ml-4"></div>
        <div className="[&_*]:text-center md:-ml-6 lg:mr-0">
          <h3 className="gradient-text relative text-[37px] font-bold">4.5k </h3>
          <p className="text-[13px]">
            Total <br /> participants
          </p>
        </div>
      </div>
    </div>
  );
}

export default ApplySection;
