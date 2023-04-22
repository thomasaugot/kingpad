import { ReactSVG } from "react-svg";

const SocialsInstaFb = () => {
  return (
    <div className="w-[50%] [&_svg]:w-[30px] [&_svg]:h-7 flex mt-6 align-middle justify-stretch">
      <ReactSVG src="/img/web.svg" className="media-icon mt-0 mr-[-1px] ml-[-5px]" />
      <ReactSVG src="/img/Twitter.svg" className="media-icon mt-0 mr-[-1px]" />
      <ReactSVG src="/img/Telegram.svg" className="media-icon mt-0 mr-[-1px]" />
      <ReactSVG src="/img/Youtube.svg" className="media-icon mt-0 mr-[-1px]" />
      <ReactSVG src="/img/Discord.svg" className="media-icon mt-0 mr-[-1px]" />
      <ReactSVG src="/img/Facebook.svg" className="media-icon mt-0 mr-[-1px]" />
      <ReactSVG src="/img/Instagram.svg" className="media-icon mt-0 mr-[-1px]" />
    </div>
  );
};
export default SocialsInstaFb;
