import Link from "next/link";
import { ReactSVG } from "react-svg";
import { useState, useEffect } from "react";
import { VscChromeClose } from "react-icons/vsc";
import PurpleButton from "./PurpleButton";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import React from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const handleResize = () => {
      setMatches(mediaQueryList.matches);
    };

    handleResize(); // Initial check

    // Attach listener for changes in media query
    mediaQueryList.addListener(handleResize);

    // Cleanup the listener when the component unmounts
    return () => {
      mediaQueryList.removeListener(handleResize);
    };
  }, [query]);

  return matches;
};

const MobileMenu = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // this only to make it match the design, may be removed later
  const isTablet = useMediaQuery("(min-width:660px)");

  return (
    <nav className="z-50 w-full p-8 flex">
      <div className="flex justify-between items-center w-full">
        <div className="flex">
          {isTablet ? (
            <ReactSVG
              className="pr-8 [&_svg]:w-[117px] [&_svg]:h-[29px]"
              onClick={() => {
                window.location.href = "/";
              }}
              src="/img/kingpad_logo.svg"
            />
          ) : (
            <ReactSVG
              className="pr-8 [&_svg]:w-[29px] [&_svg]:h-[29px]"
              onClick={() => {
                window.location.href = "/";
              }}
              src="/img/kingpad-logo-mobile.svg"
            />
          )}
          <div>
            <div>
              <button className="[&_svg]:w-[30px] [&_svg]:h-[30px]" onClick={toggleMenu}>
                <ReactSVG src="/img/Menu-burger.svg" />
              </button>
              {menuOpen && (
                <div className="fixed inset-0 menu-background-gradient z-50 flex flex-col">
                  <div className="flex justify-between p-8">
                    <div>
                      {isTablet ? (
                        <ReactSVG className="w-[29px] h-[29px]" src="/img/logo-menu-tablet.svg" />
                      ) : (
                        <ReactSVG src="/img/Logo-menu.svg" />
                      )}
                    </div>
                    <button className="text-white hover:text-gray-300" onClick={toggleMenu}>
                      <VscChromeClose />
                    </button>
                  </div>
                  <div className="flex flex-col ml-[34%] md:ml-[40%]">
                    <div className="flex flex-col justify-center my-10 space-y-7">
                      <Accordion
                        sx={{
                          backgroundColor: "transparent",
                          boxShadow: "none",
                          border: "none",
                          margin: "0",
                        }}
                      >
                        <AccordionSummary
                          sx={{
                            backgroundColor: "transparent",
                            boxShadow: "none",
                            border: "none",
                            fontSize: isTablet ? "31px" : "25px",
                            margin: "0",
                            padding: "0",
                          }}
                        >
                          Services{" "}
                          <ReactSVG
                            src="/img/arrow-down.svg"
                            className="inline-flex w-3 h-3 pt-4 ml-5"
                          />
                        </AccordionSummary>
                        <AccordionDetails
                          style={{ display: "flex", flexDirection: "column", marginTop: "-16px" }}
                        >
                          <Link
                            href="/"
                            className="text-kp-dark font-bold text-[20px] md:text-[27px] submenu-navlink block py-2 px-4"
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
                            className="text-kp-dark font-bold text-[20px] md:text-[27px] submenu-navlink block py-2 px-4 relative"
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
                            <span className="absolute top-0 right-0 h-full w-full bg-kp-purple opacity-0 transition-opacity hidden"></span>
                          </Link>

                          <Link
                            href="/"
                            className="text-kp-dark font-bold text-[20px] md:text-[27px] submenu-navlink block py-2 px-4"
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
                            className="text-kp-dark font-bold text-[20px] md:text-[27px] submenu-navlink block py-2 px-4"
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
                        </AccordionDetails>
                      </Accordion>
                    </div>
                    <div className="flex flex-col space-y-7 -mt-7">
                      <Link href="/" className="text-[25px] md:text-[31px]">
                        About
                      </Link>
                      <Link href="/" className="text-[25px] md:text-[31px]">
                        Kingpass
                      </Link>
                      <Link href="/" className="text-[25px] md:text-[31px]">
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
          <PurpleButton>&nbsp;&nbsp;Connect&nbsp;&nbsp;</PurpleButton>
        </div>
      </div>
    </nav>
  );
};

export default MobileMenu;
