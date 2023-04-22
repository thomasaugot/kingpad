import ProjectSocials from "./ProjectSocials";
import Image from "next/image";
import React, { useState } from "react";
import PurpleButton from "./PurpleButton";

interface Project {
  projectName: string;
  BNB: string;
  status: string;
  image: string;
}

interface Props {
  projects: Project[];
}

const Projects = ({ projects }: Props) => {
  const [projectData, setProjectData] = useState<Project>({
    projectName: "",
    BNB: "",
    status: "",
    image: "",
  });

  const [projectList, setProjectList] = useState<Project[]>([
    {
      projectName: "Project Name",
      BNB: "1800",
      status: "UPCOMING",
      image: "/img/placeholder-colored.png",
    },
    {
      projectName: "Project Name",
      BNB: "1800",
      status: "UPCOMING",
      image: "/img/placeholder2.png",
    },
  ]);

  return (
    <>
      <div className="gradient-effect-parent content-center flex flex-wrap items-center align-middle	justify-center my-10">
        <div className="flex flex-wrap justify-between mb-1 mx-0 w-[1120px] ">
          {projectList?.map((project, index) => (
            <div
              key={index}
              className="rounded-2xl max-w-[348px] h-[512px] lg:basis-[32%] gradient-effect-parent lg:max-w-[33%]"
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
                <h4 className="text-[10px] font-hairline text-left">NEXT LAUNCH</h4>
                <h3 className="text-[22px] font-medium text-left mt-[8px] mb-[-19px] tracking-wide">
                  {project.projectName}
                </h3>
                <ProjectSocials />
                <div className="w-[100%] flex justify-between	mt-[24px]">
                  <p className="flex flex-col border-gradient rounded-xl py-[12px] px-[4px] text-center w-[31%] h-[98px] mx-[1px] relative">
                    <span className="text-[130%] font-bold">{project.BNB}</span>
                    <span className="text-xs font-bold">BNB</span>
                    <span className="text-[70%] font-thin flex items-center justify-center lg:text-[10px]">
                      Total Raise
                    </span>
                  </p>
                  <p className="flex flex-col border-gradient rounded-xl py-[13px] px-[5px] text-center w-[31%] h-[98px] mx-[1px] relative">
                    <span className="text-[130%] font-bold leading-2">4</span>
                    <span className="text-xs font-bold lg:text-[10px]">BNB</span>
                    <span className="text-[70%] font-thin lg:text-[10px]">Max contr.</span>
                  </p>
                  <p className="flex flex-col border-2 rounded-xl border-white to-432ad9 py-[10px] px-[5px] text-center	w-[31%] max-h-[98px] mx-[1px]	">
                    <Image
                      alt="Elipse"
                      src="/img/Ellipse 3.png"
                      width="23"
                      height="23"
                      className="mx-auto mt-4 mb-2"
                    />
                    <span className="text-[70%] font-thin lg:text-[10px]">{project.status}</span>
                  </p>
                </div>
                <div className="flex items-center mt-[10px]	">
                  <h4 className="mb-[-7px]">
                    <span className="text-kp-purple text-[11px] font-bold tracking-wide	my-[22px] w-2/3 leading-3	">
                      START DATE&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                    <span className="text-[12px] font-hairline tracking-wide ">TBA</span>
                  </h4>
                  <div className="text-left mt-[10px] ml-auto">
                    <PurpleButton>Explore</PurpleButton>
                  </div>
                </div>
              </div>
              <Image
                alt="icon"
                src="/img/Group_39.png"
                width="27"
                height="69"
                className="relative top-[-290px] left-[80%] z-10 "
              />
            </div>
          ))}
          <div className="relative rounded-2xl m-auto max-w-[348px] basis-[100%] sm:max-w-[100%] md:mt-1 bg-kp-dark lg:max-w-[33%] lg:h-[483px] lg:flex-col lg:m-0">
            <Image
              alt="rocket ship"
              src="/img/rocket-up.png"
              width="157"
              height="372"
              className="absolute drop-shadow hidden sm:block rotate-90 w-[120px] top-[-50px] left-[100px] lg:rotate-0 lg:relative lg:top-[-20px]	lg:left-[33%]"
            />
            <div className="flex flex-col justify-center align-middle pt-12 pb-10 sm:ml-[310px] sm:mt-[-20px] lg:m-0 ">
              <p className="text-[22px] text-center font-[1000] mb-3	w-[75%] mx-auto sm:w-[250px] lg:mb-5 lg:w-[60%] lg:mt-[-45px] ">
                Discover all launches on KP
              </p>
              <div className="mx-auto">
                <PurpleButton>Explore all</PurpleButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
