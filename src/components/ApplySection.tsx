import TransparentButton from "./TransparentButton";

function ApplySection(): JSX.Element {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-kp-dark p-[50px] pr-[60px] max-w-[1120px] rounded-2xl m-[auto]">
      <div className="order-1 md:order-none flex items-center">
        <div>
          <h2 className="text-[30px]">Launch with Kingpad</h2>
          <p className="text-[13px]">Make sure to go through our vetting processes</p>
        </div>
      </div>
      <div className="flex justify-center items-center order-2 md:order-none">
        <TransparentButton>
          <span className="whitespace-nowrap">Apply now</span>
        </TransparentButton>
      </div>
      <div className="flex basis-1/3 justify-between order-3 md:order-none">
        <div className="h-full w-[2px] bg-white"></div>
        <div className="[&_*]:text-center">
          <h3 className="gradient-text relative text-[37px] font-bold">565K </h3>
          <p className="text-[13px]">
            Raised <br /> capital
          </p>
        </div>
        <div className="[&_*]:text-center">
          <h3 className="gradient-text relative text-[37px] font-bold">4.5k </h3>
          <p className="text-[13px]">
            Total <br /> participants
          </p>
        </div>
      </div>
    </div>
  );
}

export default ApplySection;
