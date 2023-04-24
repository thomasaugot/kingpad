import Image from "next/image";
import TransparentButton from "./TransparentButton";

const MintPassSection: React.FC = () => {
  return (
    <div className="flex align-middle bg-kp-dark max-w-[1120px] h-[191px] rounded-2xl my-14 mx-auto">
      <div className="basis-1/4 my-auto">
        <div className="relative h-full -my-16 ml-8">
          <Image
            className="object-cover z-10"
            alt="kingpass"
            src="/img/Kingpass.png"
            width="199"
            height="246"
          />
        </div>
      </div>
      <div className="basis-2/4 flex flex-col align-middle my-auto space-y-3">
        <h3 className="text-[30px] ">Reserve your allocation</h3>
        <p className="text-[13px] w-[509px] ">
          Minting a Kingpass allows you to enjoy reserved allocations in every start-up launched at
          Kingpad. If you enjoy a relaxed and guaranteed way of investing, the Kingpass is what you
          are looking for.
        </p>
      </div>
      <div className="basis-1/4 my-auto">
        <TransparentButton>Mint Now</TransparentButton>
      </div>
    </div>
  );
};

export default MintPassSection;
