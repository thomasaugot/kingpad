import React from "react";
import { ReactSVG } from "react-svg";

const CryptoLogos: React.FC = () => {
  return (
    <div className="[&_svg]:w-[30px] [&_svg]:h-8 max-w-[348px] md:max-w-[500px] md:space-x-12 flex flex-col space-y-8 md:space-y-0 lg:space-y-0 md:flex-row md:flex-nowrap my-[50px] lg:my-[80px] mx-auto justify-center items-center">
      <div className="flex space-x-12">
        <ReactSVG src="/img/Group_17.svg" />
        <ReactSVG src="/img/Group_39.svg" />
        <ReactSVG src="/img/Path_52.svg" />
        <ReactSVG src="/img/Path_50.svg" />
      </div>
      <div className="flex space-x-12">
        <ReactSVG src="/img/Group_40.svg" />
        <ReactSVG src="/img/Group_18.svg" />
        <ReactSVG src="/img/Path_49.svg" />
      </div>
    </div>
  );
};

export default CryptoLogos;
