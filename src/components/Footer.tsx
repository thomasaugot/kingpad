import Image from "next/image";
import Socials from "./Socials";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className="max-w-[1120px] flex flex-col mx-auto space-y-[65px] py-12">
      <div className="flex ">
        <div className="flex flex-col space-y-10 grow">
          <Image alt="Kingpad Logo" src="/img/Kingpad-logo2.png" width={43} height={43} />
          <p className="text-[13px] max-w-[249px]">
            Launching the future through De-Fi with safety and security.
          </p>
        </div>
        <div className="flex space-x-28 mr-auto">
          <div className="flex flex-col text-[15px] space-y-3">
            <h4 className="text-kp-purple">About</h4>
            <Link href={"/"}>Launch with us</Link>
            <Link href={"/"}>Audit</Link>
            <Link href={"/"}>KYC</Link>
            <Link href={"/"}>Docs</Link>
          </div>
          <div className="flex flex-col text-[15px] space-y-3">
            <h4 className="text-kp-purple">Company</h4>
            <Link href={"/"}>About us</Link>
            <Link href={"/"}>Contact us</Link>
          </div>
          <div className="flex flex-col text-[15px] space-y-3">
            <h4 className="text-kp-purple">Ecosystem</h4>
            <Link href={"/"}>King</Link>
            <Link href={"/"}>Kingpass</Link>
            <Link href={"/"}>Kingfloki</Link>
          </div>
          <div className="flex flex-col text-[15px] space-y-3 ">
            <h4 className="text-kp-purple">Legal</h4>
            <Link href={"/"}>Terms of Use</Link>
            <Link href={"/"}>Privacy Policy</Link>
          </div>
        </div>
      </div>
      <div className="flex items-start">
        <div>
          <p className="text-[10px] max-w-[615px] ">
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
        <div className="ml-auto flex items-start">
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Footer;
