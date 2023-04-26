import Image from "next/image";
import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import TransparentButton from "./TransparentButton";

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
      image: "/img/rocket-stars.png",
    },
    {
      number: "PHASE 2",
      logo: "/img/logo-diamond.svg",
      title: "Kingsale",
      description:
        "Both for public and whitelisted investors. Work for your whitelist to invest before public users during the first two hours.",
      footer:
        "Enjoy competing for your early allocation whether you are whitelisted or not. Enjoy being part of the crowd. Enjoy Kingsale.",
      image: "/img/rocket-diamonds.png",
    },
  ]);

  const handleTelegramButtonClick = () => {
    const telegramURL = "https://...";
    window.open(telegramURL, "_blank");
  };

  return (
    <div className="max-w-[1120px] flex flex-col mx-auto pb-24">
      <h3 className="text-[30px] mx-auto my-8">How to participate?</h3>
      <div className="flex flex-col lg:flex-row w-full space-y-[140px] lg:space-y-0 lg:space-x-6">
        {KingPhaseCardsList.map((phase) => {
          return (
            <div
              key={phase.number}
              className="flex flex-col lg:flex-row max-h-[485px] lg:h-[410px] w-[348px] m-auto lg:m-0 lg:basis-1/2 background-gradient-card rounded-2xl p-10 space-y-3 rocket-container"
            >
              <div className="flex flex-col space-y-4">
                <h6 className="text-base font-hairline">{phase.number}</h6>
                <div className="flex space-x-3">
                  <ReactSVG src={phase.logo} className="" />
                  <h3 className="text-[30px] ">{phase.title}</h3>
                </div>
                <p className="w-[289px] lg:w-[201px] text-[13px]">{phase.description}</p>
                <p className="w-[289px] lg:w-[201px] text-[13px] lg:pb-0">{phase.footer}</p>
              </div>
              <Image
                alt="rocket ship"
                src={phase.image}
                width="269"
                height="346"
                className="block lg:absolute lg:top-0 lg:right-5 z-50"
              />
            </div>
          );
        })}
      </div>
      <h3 className="text-[30px] text-center mx-auto mt-[200px] lg:mt-24 mb-8">
        Stay updated on new launches
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
