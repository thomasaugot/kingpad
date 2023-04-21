import PurpleButton from "./PurpleButton";
import TransparentButton from "./TransparentButton";

interface Props {}

const ApplySection: React.FC<Props> = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-kp-dark p-[50px] pr-[60px] max-w-[1120px] rounded-2xl m-[auto]">
      <div className="order-1 md:order-none flex items-center ">
        <div>
          <h2 className="text-[30px]">Launch with Kingpad</h2>
          <p className="text-[13px]">Make sure to go through our vetting processes</p>
        </div>
      </div>
      <div className="flex basis-1/3 justify-center items-center">
        <TransparentButton>Apply now</TransparentButton>
      </div>
      <div className="flex basis-1/3 justify-between">
        <div className="h-full w-[2px] bg-white order-2 md:order-1"></div>
        <div className="order-3 md:order-2 [&_*]:text-center">
          <h3 className=" gradient-text relative text-[37px] font-bold	">565K </h3>
          <p className="text-[13px]">
            Raised <br /> capital
          </p>
        </div>
        <div className="order-2 md:order-3 [&_*]:text-center">
          <h3 className=" gradient-text relative text-[37px] font-bold	">4.5k </h3>
          <p className="text-[13px]">
            Total <br /> participants
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApplySection;
