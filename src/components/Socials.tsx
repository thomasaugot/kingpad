import { ReactSVG } from "react-svg";

const Socials = () => {
  return (
    <div className="w-[260px]  [&_svg]:w-[30px] [&_svg]:h-8 flex mt-8 justify-between">
      <ReactSVG src="/img/Twitter.svg" />
      <ReactSVG src="/img/Telegram.svg" />
      <ReactSVG src="/img/Youtube.svg" />
      <ReactSVG src="/img/Medium.svg" />
      <ReactSVG src="/img/Discord.svg" />
    </div>
  );
};
export default Socials;
