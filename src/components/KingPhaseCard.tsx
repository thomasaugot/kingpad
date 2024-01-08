import Image from "next/image";
import { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import TransparentButton from "./TransparentButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";

interface KingPhaseCard {
  number: string;
  logo: string;
  title: string;
  description: string;
  footer: string;
  image: string;
}

interface Props {
  phases: KingPhaseCard[];
}

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

const KingPhaseCard = ({ phases }: Props) => {
  const [KingPhaseCardData, setKingPhaseCardData] = useState<KingPhaseCard>({
    number: "",
    logo: "",
    title: "",
    description: "",
    footer: "",
    image: "",
  });

  const [KingPhaseCardsList, setKingPhaseCardsList] = useState<KingPhaseCard[]>([
    {
      number: "PHASE 1",
      logo: "/img/logo-star.svg",
      title: "Kingstarter",
      description:
        "Early investing guaranteed. The Kingstarter is the very first launching phase at Kingpad, where users that hold a Kingpass are able to get a secured allocation before anyone else.",
      footer: "Steps are simple. Just get a Kingpass at kingpass.finance.",
      image: "/img/rocket-stars.PNG",
    },
    {
      number: "PHASE 2",
      logo: "/img/logo-diamond.svg",
      title: "Kingsale",
      description:
        "Both for public and whitelisted investors. Work for your whitelist to invest before public users during the first two hours.",
      footer:
        "Enjoy competing for your early allocation whether you are whitelisted or not. Enjoy being part of the crowd. Enjoy Kingsale.",
      image: "/img/rocket-diamonds.PNG",
    },
  ]);

  // this enables conditional slider rendering, only on mobile devices.
  const isMobile = useMediaQuery("(max-width: 660px)");

  // this variable is for the slider's settings.
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    useCSS: true,
    className: "slide-card",
  };

  const handleTelegramButtonClick = () => {
    const telegramURL = "https://...";
    window.open(telegramURL, "_blank");
  };

  return (
    <div className="max-w-[348px] md:max-w-[680px] lg:max-w-[1120px] flex flex-col mx-auto pb-24">
      <h3 className="text-[30px] mx-auto my-8">How to participate?</h3>
      {isMobile ? (
        <div className="w-[348px] overflow-visible">
          <Slider {...settings}>
            {KingPhaseCardsList.map((phase: KingPhaseCard) => (
              <div key={phase.number} className="flex h-[485px] mb-[40px] -ml-6">
                <div className="flex flex-col h-[485px] space-y-4 background-gradient-card rounded-2xl py-8 px-6 rocket-container slide-card overflow-visible">
                  <h6 className="text-base font-hairline">{phase.number}</h6>
                  <div className="flex space-x-3">
                    <ReactSVG src={phase.logo} />
                    <h3 className="text-[22px] ">{phase.title}</h3>
                  </div>
                  <p className="w-[174px] text-[12px]">{phase.description}</p>
                  <p className="w-[174px] text-[12px]">{phase.footer}</p>
                </div>
                <Image
                  alt="rocket ship"
                  src={phase.image}
                  width="269"
                  height="346"
                  className="relative w-[200px] top-[-165px] right-[-25px] z-50"
                />
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <div className="flex w-full space-x-6">
          {KingPhaseCardsList.map((phase: any, index: any) => {
            const isSecondCard = index === 1;
            return (
              <div
                key={phase.number}
                className="flex flex-col max-h-[485px] md:w-[334px] lg:h-[410px] w-[348px] lg:w-[50%] background-gradient-card rounded-2xl p-10 space-y-4 rocket-container"
              >
                <h6 className="text-base font-hairline">{phase.number}</h6>
                <div className="flex space-x-3">
                  <ReactSVG src={phase.logo} />
                  <h3 className="text-[22px] lg:text-[30px] ">{phase.title}</h3>
                </div>
                <p className="w-[234px] lg:w-[201px] text-[12px]">{phase.description}</p>
                <p className="w-[234px] lg:w-[201px] text-[12px] lg:text-[13px] lg:pb-0">
                  {phase.footer}
                </p>
                <Image
                  alt="rocket ship"
                  src={phase.image}
                  width="269"
                  height="346"
                  className={`relative lg:w-[269px] lg:top-[-280px] lg:ml-auto ${
                    isSecondCard ? "md:top-[-20px] lg:top-[-310px]" : ""
                  }`}
                />
              </div>
            );
          })}
        </div>
      )}

      <h3 className="text-[24px] lg:text-[30px] text-center mx-auto mt-[100px] md:mt-[180px] lg:mt-24 mb-8">
        Stay updated <br className="md:hidden" /> on new launches
      </h3>
      <div className="inline-block w-auto relative">
        <div className="flex justify-center">
          <div className="inline-block w-auto relative hover:-translate-y-2 transform transition-all duration-300">
            <TransparentButton onClick={handleTelegramButtonClick}>
              <div className="flex align-middle space-x-3">
                <ReactSVG src="/img/telegram-rounded-blue.svg" />
                <span className="flex my-auto">Join Now</span>
              </div>
            </TransparentButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KingPhaseCard;
