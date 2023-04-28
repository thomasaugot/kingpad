import ProjectSocials from "./ProjectSocials";
import Image from "next/image";
import React, { useState } from "react";
import PurpleButton from "./PurpleButton";

interface Project {
  projectName: string;
  BNB: string;
  startDate: string;
  status: string;
  image: string;
  icon: string;
}

interface Props {
  projects: Project[];
}

const Projects = ({ projects }: Props) => {
  const [projectData, setProjectData] = useState<Project>({
    projectName: "",
    BNB: "",
    startDate: "",
    status: "",
    image: "",
    icon: "",
  });

  const [projectList, setProjectList] = useState<Project[]>([
    {
      projectName: "Project Name",
      BNB: "1800",
      startDate: "20 | 14 | 34 | 12",
      status: "UPCOMING",
      image: "/img/placeholder-colored.png",
      icon: "/img/Group_39.svg",
    },
    {
      projectName: "Project Name",
      BNB: "1800",
      startDate: "TBA",
      status: "UPCOMING",
      image: "/img/placeholder2.png",
      icon: "/img/Group_17.svg",
    },
  ]);

  return (
    <div className="gradient-effect-parent content-center flex flex-wrap items-center align-middle justify-center lg:mx-auto my-8 w-full">
      <div className="flex flex-wrap lg:justify-between md:w-[680px] lg:w-[1120px] -space-y-5 md:space-y-0">
        {projectList?.map((project, index) => (
          <div
            key={index}
            className="rounded-2xl w-[348px] h-[512px] gradient-effect-parent mx-auto md:w-[334px] lg:w-[357px] lg:mx-0"
          >
            <div
              className="relative scroll-target w-[100%] h-[168px] rounded-t-2xl bg-center bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${project.image})`,
              }}
            >
              <div className="gradient-effect-child absolute w-full h-full rounded-t-2xl "></div>
            </div>
            <div className="flex flex-col px-7 py-6 text-left	 rounded-b-2xl bg-kp-dark">
              <h4 className="text-[10px] font-hairline text-left md:mt-2 lg:mt-0">NEXT LAUNCH</h4>
              <h3 className="text-[22px] font-medium text-left mt-[8px] mb-[-19px] tracking-wide">
                {project.projectName}
              </h3>
              <ProjectSocials />
              <div className="w-[100%] flex justify-between space-x-2 mt-[24px]">
                <p className="flex flex-col items-center justify-center border-gradient rounded-xl p-2 text-center w-[106px] h-[85px] lg:h-[98px] mx-[1px] relative">
                  <span className="text-[130%] font-bold -mt-1">{project.BNB}</span>
                  <span className="text-xs font-bold">BNB</span>
                  <span className="text-[70%] font-thin lg:text-[10px]">Total Raise</span>
                </p>
                <p className="flex flex-col items-center justify-center border-gradient rounded-xl p-2 text-center w-[106px] h-[85px] lg:h-[98px] mx-[1px] relative">
                  <span className="text-[130%] font-bold leading-2 -mt-1">4</span>
                  <span className="text-xs font-bold lg:text-[10px]">BNB</span>
                  <span className="text-[70%] font-thin lg:text-[10px]">Max contr.</span>
                </p>
                <p className="flex flex-col items-center justify-center border-2 rounded-xl border-white py-[10px] px-[5px] text-center w-[106px] h-[85px] lg:h-[98px] mx-[1px]">
                  <Image
                    alt="Elipse"
                    src="/img/Ellipse 3.png"
                    width="23"
                    height="23"
                    className="mx-auto mt-1 mb-2"
                  />
                  <span className="text-[70%] font-thin lg:text-[10px]">{project.status}</span>
                </p>
              </div>

              <div className="flex items-center mt-[10px]	">
                <h4 className="mb-[-7px]">
                  <span className="text-kp-purple text-[14px] font-bold tracking-wide	my-[22px] w-2/3 leading-3	">
                    Starts in&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span className="text-[13px] font-hairline tracking-wide ">
                    {project.startDate}
                  </span>
                </h4>
                <div className="text-left mt-[12px] md:mt-[16px] lg:mt-[12px] ml-auto">
                  <PurpleButton>Explore</PurpleButton>
                </div>
              </div>
            </div>
            <Image
              alt="icon"
              src={project.icon}
              width="25"
              height="19"
              className="relative top-[-290px] left-[80%] z-10 "
            />
          </div>
        ))}
        <div className="relative rounded-2xl m-auto max-w-[348px] basis-[100%] bg-kp-dark md:max-w-[680px] lg:max-w-[348px] lg:h-[486px] lg:flex-col lg:m-0">
          <Image
            alt="rocket ship"
            src="/img/rocket-up.png"
            width="157"
            height="372"
            className="absolute drop-shadow hidden sm:block rotate-90 w-[120px] top-[-50px] left-[100px] lg:rotate-0 lg:relative lg:top-[-20px]	lg:left-[33%]"
          />
          <div className="flex flex-col justify-center align-middle pt-12 pb-10 md:ml-[290px] lg:m-0 ">
            <p className="text-[22px] text-center font-[1000] mb-3 mx-auto w-[250px] lg:mb-5 lg:w-[60%] lg:mt-[-45px] ">
              Discover all launches on Kingpad
            </p>
            <div className="mx-auto">
              <PurpleButton>Explore all</PurpleButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
