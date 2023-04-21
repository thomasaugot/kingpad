import Image from "next/image";
import React, { useState } from "react";

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
      image: "../../public/img/onyx.png",
      projectName: "Onyx",
      BNB: "500",
      BNB2: "4",
      status: "LIVE NOW",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  ut labore et dolore magna aliqua.",
    },
  ]);

  return (
    <div className="flex flex-col md:flex-row justify-between bg-kp-dark p-[50px] pr-[60px] max-w-[1120px] rounded-2xl m-[auto]">
      <div className="flex "></div>
      <div className="flex "></div>
    </div>
  );
};

export default CryptoSaleSection;
