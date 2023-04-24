import Link from "next/link";
import { ReactSVG } from "react-svg";
import PurpleButton from "./PurpleButton";
import { useState } from "react";
import "react-icons/bs";
import { BsChevronCompactDown } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";
import { IconContext } from "react-icons";

const Navbar = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [subMenuOpen, setSubMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => setMenuOpen((prev) => !prev);
  const toggleSubMenu = (): void => setSubMenuOpen((prev) => !prev);

  return (
    <nav className="z-50 w-full">
      <div className="absolute w-full bottom-0 opacity-30"></div>
      <div className="relative mx-auto flex max-w-[1600px] items-center justify-between px-8 sm:px-12 lg:border-transparent">
        <div className="flex">
          <ReactSVG
            className="cursor-pointer w-[190px] [&_svg]:w-[150px] [&_svg]:h-[150px]"
            onClick={() => {
              window.location.href = "/";
            }}
            src="/img/kingpad_logo.svg"
          />
          <div className="hidden lg:flex items-center justify-center whitespace-nowrap text-[14px] font-medium text-white lg:ml-4 lg:text-[12px] ">
            <div className="hidden items-center text-[14px] [&>a]:pr-2 font-medium text-white [&>a]:text-[16px] [&>a]:pt-4 lg:ml-8 lg:flex lg:space-x-[80px] xl:ml-20 ">
              <Link
                onClick={toggleSubMenu}
                className="nav-link hover:font-black block pb-2"
                href={""}
              >
                <div className="flex">
                  Services <BsChevronCompactDown className="chevron-icon lg:hidden" />
                </div>
              </Link>
              {subMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white py-4 px-8 shadow-lg">
                  <Link href="/" className="nav-link hover:font-black block pb-2">
                    Launchpad
                  </Link>
                  <Link href="/" className="nav-link hover:font-black block pb-2">
                    King Lock
                  </Link>
                  <Link href="/" className="nav-link hover:font-black block pb-2">
                    Audit
                  </Link>
                  <Link href="/" className="nav-link hover:font-black block">
                    KYC
                  </Link>
                </div>
              )}

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
          onClick={toggleMenu}
        >
          <ReactSVG src="/img/Menu-burger.svg" />
        </button>
        {menuOpen && (
          <div className="fixed inset-0 menu-background-gradient z-50 flex flex-col">
            <div className="absolute top-0 left-0 mt-4 ml-4">
              <ReactSVG src="/img/Logo-menu.svg" className="m-5" />
            </div>
            <div className="absolute top-0 right-0 mt-4 mr-4">
              <button className="text-white hover:text-gray-300" onClick={toggleMenu}>
                <IconContext.Provider
                  value={{
                    style: {
                      margin: "20px",
                      width: "25px",
                      height: "25px",
                      color: "red",
                    },
                  }}
                >
                  <VscChromeClose />
                </IconContext.Provider>
              </button>
            </div>
            <div className="flex flex-col justify-center align-middle mx-auto my-24 space-y-5">
              <div className="flex items-center">
                <Link href="">
                  <div className="flex ">
                    Services{" "}
                    <IconContext.Provider
                      value={{
                        style: {
                          paddingTop: "5px",
                          marginLeft: "10px",
                          width: "20px",
                          height: "20px",
                        },
                      }}
                    >
                      <BsChevronCompactDown />
                    </IconContext.Provider>
                  </div>
                </Link>
              </div>

              <Link href="/">About</Link>
              <Link href="/">Kingpass</Link>
              <Link href="/">$KING</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
