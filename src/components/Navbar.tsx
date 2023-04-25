import Link from "next/link";
import { ReactSVG } from "react-svg";
import PurpleButton from "./PurpleButton";
import { useState, useRef } from "react";
import { BsChevronCompactDown } from "react-icons/bs";

const Navbar = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // for the submenu

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current !== null) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const toggleSubMenu = () => {
    setSubMenuOpen((prev) => !prev);
    if (!subMenuOpen) {
      clearCloseTimeout();
    } else {
      closeTimeoutRef.current = setTimeout(() => {
        setSubMenuOpen(false);
        closeTimeoutRef.current = null;
      }, 600);
    }
  };

  // if user opens submenu but then doesn't hover over it:

  const closeSubMenu = () => {
    if (!subMenuOpen) {
      return;
    }
    clearCloseTimeout();
    setSubMenuOpen(false);
  };

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
          <div className="hidden lg:flex items-center justify-center whitespace-nowrap text-[14px] text-white lg:ml-4 lg:text-[12px] ">
            <div className="hidden items-center text-[14px] [&>a]:pr-2 text-white [&>a]:text-[16px] [&>a]:pt-4 lg:ml-8 lg:flex lg:space-x-[80px] xl:ml-20 ">
              <Link
                onClick={toggleSubMenu}
                className="nav-link"
                href={""}
                onMouseLeave={() => {
                  closeTimeoutRef.current = setTimeout(() => {
                    closeSubMenu();
                  }, 900);
                }}
              >
                <div
                  className="nav-link"
                  onMouseEnter={() => {
                    clearCloseTimeout();
                    setSubMenuOpen(true);
                  }}
                >
                  Services <BsChevronCompactDown className="chevron-icon lg:hidden" />
                </div>
              </Link>
              {subMenuOpen && (
                <div
                  className="absolute top-[120px] z-50 left-[170px] w-[236px] h-[195px] rounded-2xl bg-white text-kp-dark p-8 flex flex-col space-y-3 shadow-lg"
                  onMouseEnter={() => {
                    clearCloseTimeout();
                    setSubMenuOpen(true);
                  }}
                  onMouseLeave={() => {
                    closeSubMenu();
                  }}
                >
                  <Link href="/" className="text-kp-dark font-bold text-[15px] submenu-navlink">
                    <span>
                      <ReactSVG className="inline-flex w-3 h-3" src="/img/Launchpad-icon.svg" />
                    </span>{" "}
                    Launchpad
                  </Link>
                  <Link href="/" className="text-kp-dark font-bold text-[15px] submenu-navlink">
                    <span>
                      <ReactSVG className="inline-flex w-3 h-3" src="/img/Kinglock-icon.svg" />
                    </span>{" "}
                    King Lock{" "}
                    <span className="inline-flex text-white text-[8px] font-bold bg-kp-purple p-1 mb-1 rounded-2xl">
                      SOON
                    </span>
                  </Link>
                  <Link href="/" className="text-kp-dark font-bold text-[15px] submenu-navlink">
                    <span>
                      <ReactSVG className="inline-flex w-3 h-3" src="/img/Audit-icon.svg" />
                    </span>{" "}
                    Audit
                  </Link>
                  <Link href="/" className="text-kp-dark font-bold text-[15px] submenu-navlink">
                    <span>
                      <ReactSVG className="inline-flex w-3 h-3" src="/img/KYC-icon.svg" />
                    </span>{" "}
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
      </div>
    </nav>
  );
};

export default Navbar;
