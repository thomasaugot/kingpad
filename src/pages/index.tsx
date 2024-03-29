import Head from "next/head";
import DesktopNavbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
import Projects from "../components/Projects";
import ApplySection from "../components/ApplySection";
import Header from "../components/Header";
import CryptoLogos from "../components/CryptoLogos";
import CryptoSaleSection from "../components/CryptoSaleSection";
import MintPassSection from "../components/MintPassSection";
import Footer from "../components/Footer";
import KingPhaseCard from "../components/KingPhaseCard";
import { useEffect, useState } from "react";
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

export default function Home() {
  const isDesktop = useMediaQuery("(min-width:960px)");

  return (
    <>
      <Head>
        <title>Kingpad V2</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../../public/favicon.ico" />
      </Head>
      <div className="background-glow">
        {isDesktop ? <DesktopNavbar /> : <MobileMenu />}
        <Header />
        <ApplySection />
        <CryptoLogos />
        {/* <CryptoSaleSection projects={[]} /> */}
        <MintPassSection />
        <br />
        <Projects projects={[]} />
        <KingPhaseCard phases={[]} />
        <Footer />
      </div>
    </>
  );
}
