import Link from "next/link";
import { ReactSVG } from "react-svg";
import { useState } from "react";
import { BsChevronCompactDown } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";
import { IconContext } from "react-icons";
import PurpleButton from "./PurpleButton";

const MobileMenu = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleSubMenu = () => setSubMenuOpen((prev) => !prev);

  return (
    <nav className="z-50 w-full p-8 flex">
      <div className="flex justify-between items-center w-full">
        <div className="flex">
          <ReactSVG
            className="pr-8 [&_svg]:w-[29px] [&_svg]:h-[29px]"
            onClick={() => {
              window.location.href = "/";
            }}
            src="/img/kingpad-logo-mobile.svg"
          />
          <div>
            <div>
              <button className="[&_svg]:w-[29px] [&_svg]:h-[29px]" onClick={toggleMenu}>
                <ReactSVG src="/img/Menu-burger.svg" />
              </button>
              {menuOpen && (
                <div className="fixed inset-0 menu-background-gradient z-50 flex flex-col">
                  <div className="flex justify-between p-8">
                    <div className="[&_svg]:w-[29px] [&_svg]:h-[29px]">
                      <ReactSVG src="/img/Logo-menu.svg" />
                    </div>
                    <button className="text-white hover:text-gray-300" onClick={toggleMenu}>
                      <IconContext.Provider
                        value={{
                          style: {
                            width: "29px",
                            height: "29px",
                          },
                        }}
                      >
                        <VscChromeClose />
                      </IconContext.Provider>
                    </button>
                  </div>

                  <div className="flex flex-col justify-center align-middle mx-auto my-10 space-y-7">
                    <div className="flex items-center relative" onClick={toggleSubMenu}>
                      <button className="text-[25px] flex">
                        Services{" "}
                        <IconContext.Provider
                          value={{
                            style: {
                              paddingTop: "5px",
                              marginLeft: "10px",
                              width: "35px",
                              height: "35px",
                            },
                          }}
                        >
                          <BsChevronCompactDown />
                        </IconContext.Provider>
                      </button>
                      {subMenuOpen && (
                        <div className="absolute top-full right-8">
                          <div className={subMenuOpen ? "submenu submenu-open" : "submenu"}>
                            <Link
                              href="/"
                              className="text-kp-dark font-bold text-[20px] submenu-navlink block py-2 px-4"
                            >
                              <span>
                                <ReactSVG
                                  className="inline-flex w-3 h-3"
                                  src="/img/Launchpad-icon.svg"
                                  style={{ stroke: "white" }}
                                />
                              </span>{" "}
                              Launchpad
                            </Link>
                            <Link
                              href="/"
                              className="text-kp-dark font-bold text-[20px] submenu-navlink block py-2 px-4"
                            >
                              <span>
                                <ReactSVG
                                  className="inline-flex w-3 h-3"
                                  src="/img/Kinglock-icon.svg"
                                  style={{ stroke: "white" }}
                                />
                              </span>{" "}
                              King Lock{" "}
                              <span className="inline-flex absolute text-white text-[9px] font-bold bg-kp-purple py-1 px-2 mt-[6px] ml-2 rounded-2xl">
                                SOON
                              </span>
                            </Link>
                            <Link
                              href="/"
                              className="text-kp-dark font-bold text-[20px] submenu-navlink block py-2 px-4"
                            >
                              <span>
                                <ReactSVG
                                  className="inline-flex w-3 h-3"
                                  src="/img/Audit-icon.svg"
                                  style={{ stroke: "white" }}
                                />
                              </span>{" "}
                              Audit
                            </Link>
                            <Link
                              href="/"
                              className="text-kp-dark font-bold text-[20px] submenu-navlink block py-2 px-4"
                            >
                              <span>
                                <ReactSVG
                                  className="inline-flex w-3 h-3"
                                  src="/img/KYC-icon.svg"
                                  style={{ stroke: "white" }}
                                />
                              </span>{" "}
                              KYC
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className={`flex flex-col space-y-7 ${subMenuOpen ? "pt-[180px]" : ""}`}>
                      <Link href="/" className="text-[25px] font-bold">
                        About
                      </Link>
                      <Link href="/" className="text-[25px] font-bold">
                        Kingpass
                      </Link>
                      <Link href="/" className="text-[25px] font-bold">
                        $KING
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex -mr-3">
          <PurpleButton>Connect</PurpleButton>
        </div>
      </div>
    </nav>
  );
};

export default MobileMenu;
