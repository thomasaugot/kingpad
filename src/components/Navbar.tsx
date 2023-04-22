import Link from "next/link";
import { ReactSVG } from "react-svg";
import PurpleButton from "./PurpleButton";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className=" z-50 w-full">
      <div className="absolute w-full bottom-0 opacity-30"></div>
      <div className=" relative mx-auto flex  max-w-[1600px] items-center justify-between px-8 sm:px-12 lg:border-transparent">
        <div className="flex ">
          <ReactSVG
            className="cursor-pointer w-[190px] [&_svg]:w-[150px] [&_svg]:h-[150px]"
            onClick={() => {
              window.location.href = "/";
            }}
            src="/img/kingpad_logo.svg"
          />
          <div className="hidden  lg:flex  items-center justify-center whitespace-nowrap  text-[14px] font-medium text-white lg:ml-4 lg:text-[12px] ">
            <div className="hidden items-center text-[14px] [&>a]:pr-2 font-medium text-white [&>a]:text-[16px] [&>a]:pt-4 lg:ml-8 lg:flex lg:space-x-[80px] xl:ml-20 ">
              <Link href="/" className="nav-link hover:font-black">
                Services
              </Link>
              <Link href="/" className="nav-link hover:font-black">
                About
              </Link>
              <Link href="/" className="nav-link hover:font-black">
                Kingpass
              </Link>
              <Link href="/" className="nav-link hover:font-black">
                $KING
              </Link>
            </div>
          </div>
        </div>
        <PurpleButton>Connect</PurpleButton>

        <button
          className="inline-flex items-center justify-center text-black lg:hidden"
          id="headlessui-disclosure-button-:r0:"
          type="button"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="block h-8 w-8"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
