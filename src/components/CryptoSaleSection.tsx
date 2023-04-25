import Image from "next/image";
import React, { useState } from "react";
import PurpleButton from "./PurpleButton";
import SocialsInstaFb from "./SocialsInstaFb";

interface Project {
  image: string;
  projectName: string;
  description: string;
  BNB: string;
  BNB2: string;
  status: string;
}

interface Props {
  projects: Project[];
}

const CryptoSaleSection = ({ projects }: Props) => {
  const [projectData, setProjectData] = useState<Project>({
    image: "",
    projectName: "",
    BNB: "",
    BNB2: "",
    status: "",
    description: "",
  });

  const [projectList, setProjectList] = useState<Project[]>([
    {
      image: "/img/onyx.png",
      projectName: "Onyx",
      BNB: "500",
      BNB2: "4",
      status: "LIVE NOW",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  ut labore et dolore magna aliqua.",
    },
  ]);

  return (
    <div className="gradient-effect-parent">
      {projectList?.map((project, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row bg-kp-dark max-w-[348px] h-[693px] lg:h-[378px] lg:max-w-[1120px] rounded-2xl m-[auto]"
        >
          <div
            className="basis-1/2 rounded-2xl lg:rounded-none lg:rounded-l-2xl relative h-[339px] lg:h-[378px]"
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="gradient-effect-child lg:absolute w-full lg:h-full rounded-t-2xl"></div>
          </div>
          <div className="flex basis-1/2 p-11 lg:pr-0 py-7 lg:py-12 ">
            <div className="flex flex-col space-y-2 lg:space-y-4 text-left	w-full rounded-b-2xl bg-kp-dark">
              <h4 className="text-[10px] font-hairline text-left">SALE IN PROGRESS</h4>
              <h3 className="text-[22px] font-medium text-left tracking-wide">
                {project.projectName}
              </h3>
              <SocialsInstaFb />
              <p className=" text-[12px] lg:text-[13px]">{project.description}</p>
              <div className="flex pt-3 basis-3/4 flex-grow space-x-8">
                <div className="w-[100%] flex justify-between space-x-5">
                  <p className="flex flex-col border-gradient rounded-xl py-[12px] px-[4px] text-center w-[106px] h-[85px] lg:h-[98px] mx-[1px] relative">
                    <span className="text-[130%] font-bold">{project.BNB}</span>
                    <span className="text-xs font-bold">BNB</span>
                    <span className="text-[70%] font-thin flex items-center justify-center lg:text-[10px]">
                      Total Raise
                    </span>
                  </p>
                  <p className="flex flex-col border-gradient rounded-xl py-[13px] px-[5px] text-center w-[106px] h-[85px] lg:h-[98px] mx-[1px] relative">
                    <span className="text-[130%] font-bold leading-2">4</span>
                    <span className="text-xs font-bold lg:text-[10px]">BNB</span>
                    <span className="text-[70%] font-thin lg:text-[10px]">Max contr.</span>
                  </p>
                  <p className="flex flex-col border-2 rounded-xl border-white py-[10px] px-[5px] text-center	w-[106px] h-[85px] lg:h-[98px] mx-[1px]	">
                    <Image
                      alt="Elipse"
                      src="/img/Ellipse Green.png"
                      width="23"
                      height="23"
                      className="mx-auto mt-4 mb-2"
                    />
                    <span className="text-[70%] font-thin lg:text-[10px]">{project.status}</span>
                  </p>
                </div>
                <span className="hidden lg:flex items-end justify-end basis-1/4 flex-grow">
                  <PurpleButton>Explore</PurpleButton>
                </span>
              </div>
              <span className="flex items-end justify-end basis-1/4 flex-grow lg:hidden">
                <PurpleButton>Explore</PurpleButton>
              </span>
            </div>
          </div>
          <Image
            alt="icon"
            src="/img/Group_17.svg"
            width="37"
            height="29"
            className="relative top-[-130px] left-[-60px] z-10 "
          />
        </div>
      ))}
    </div>
  );
};

export default CryptoSaleSection;
