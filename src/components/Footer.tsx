import Image from "next/image";
import Socials from "./Socials";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="w-[348px] md:w-[680px] lg:w-[1120px] flex flex-col mx-auto space-y-[25px] md:-space-y-6 lg:space-y-[25px] pb-24">
      <div className="flex flex-col my-3 lg:my-0 lg:flex-row">
        <div className="flex flex-col mx-auto space-y-8 lg:space-y-10 lg:mx-0 lg:grow lg:max-w-[585px] lg:basis-[2/6]">
          <Image
            alt="Kingpad Logo"
            src="/img/Kingpad-logo2.png"
            className="mx-auto lg:mx-0 w-[60px] lg:w-[69px]"
            width={69}
            height={72}
          />
          <p className="text-[13px] w-[257px] lg:max-w-[249px] text-center lg:text-left">
            Launching the future through De-Fi with safety and security.
          </p>
        </div>
        <div className="mx-auto lg:mx-0 grid grid-cols-2 mt-10 w-[333px] md:w-[680px] lg:basis-[4/6] lg:mt-0 md:grid-cols-none md:flex md:justify-center md:items-left gap-x-24 md:space-x-0">
          <div className="flex flex-col text-[15px] space-y-3 mb-8 lg:mb-0 lg:basis-1/4 lg:min-w-[120px]">
            <h4 className="text-kp-purple">About</h4>
            <Link href={"/"}>Launch with us</Link>
            <Link href={"/"}>Audit</Link>
            <Link href={"/"}>KYC</Link>
            <Link href={"/"}>Docs</Link>
          </div>
          <div className="flex flex-col text-[15px] space-y-3 mb-8 lg:mb-0 lg:basis-1/4 lg:min-w-[120px]">
            <h4 className="text-kp-purple">Company</h4>
            <Link href={"/"}>About us</Link>
            <Link href={"/"}>Contact us</Link>
          </div>
          <div className="flex flex-col text-[15px] space-y-3 lg:ml-28 lg:basis-1/4 lg:min-w-[120px]">
            <h4 className="text-kp-purple">Ecosystem</h4>
            <Link href={"/"}>King</Link>
            <Link href={"/"}>Kingpass</Link>
            <Link href={"/"}>Kingfloki</Link>
          </div>
          <div className="flex flex-col text-[15px] space-y-3 lg:ml-28 lg:basis-1/4 lg:min-w-[120px]">
            <h4 className="text-kp-purple">Legal</h4>
            <Link href={"/"}>Terms of Use</Link>
            <Link href={"/"}>Privacy Policy</Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row justify-between items-start align-middle lg:space-y-0">
        <div>
          <p className="text-[8px] lg:text-[10px] mx-auto lg:mx-0 max-w-[333px] md:max-w-[667px] lg:max-w-[615px] mt-[35px] md:mt-[60px] lg:mt-9 ">
            Thank you for visiting Kingpad, a scalable launchpad designed to support companies of
            the future. Our mission is to provide innovative solutions for emerging businesses and
            help them achieve their full potential. However, please note that the content on our
            website is for informational purposes only and should not be construed as financial or
            investment advice. We do not endorse or recommend any specific investments or products.
            Any decision to invest should be based on your own research and consultation with a
            qualified financial advisor. Investing always involves risks, and we encourage you to
            exercise caution and carefully consider your options before making any financial
            decisions.
          </p>
        </div>
        <div className="flex mx-auto lg:mx-0 md:-pt-[90px] lg:pt-12 lg:ml-auto">
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Footer;
