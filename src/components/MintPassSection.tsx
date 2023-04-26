import Image from "next/image";
import TransparentButton from "./TransparentButton";

const MintPassSection = () => {
  return (
    <div className="flex flex-col lg:flex-row align-middle bg-kp-dark h-[530px] w-[348px] lg:w-[1120px] lg:h-[191px] rounded-2xl my-6 lg:my-12 mx-auto">
      <div className="basis-1/4 my-6 lg:my-auto">
        <div className="flex lg:relative mx-auto lg:mx-0 lg:h-full lg:-my-16 lg:ml-8">
          <Image
            className="object-cover z-10 mx-auto"
            alt="kingpass"
            src="/img/Kingpass.png"
            width="199"
            height="246"
          />
        </div>
      </div>

      <div className="basis-2/4 flex flex-col align-middle -my-2 -mb-9 lg:my-auto space-y-3">
        <h3 className="text-[24px] mx-auto lg:mx-0 lg:text-[30px] ">Reserve your allocation</h3>
        <p className="text-[12px] lg:text-[13px] text-center lg:text-left mx-auto lg:mx-0 w-[297px] lg:w-[509px] ">
          Minting a Kingpass allows you to enjoy reserved allocations in every start-up launched at
          Kingpad. If you enjoy a relaxed and guaranteed way of investing, the Kingpass is what you
          are looking for.
        </p>
      </div>
      <div className="basis-1/4 my-auto flex justify-center">
        <div className="group inline-block">
          <TransparentButton>
            <span className="group-hover:bg-opacity-80">Mint Now</span>
          </TransparentButton>
        </div>
      </div>
    </div>
  );
};

export default MintPassSection;
