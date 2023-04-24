import Link from "next/link";
import { ReactSVG } from "react-svg";

const ProjectSocials: React.FC = () => {
  return (
    <div className="w-[50%] [&_svg]:w-[30px] [&_svg]:h-7 flex mt-6 align-middle justify-stretch">
      <Link href={""} className="social-links">
        <ReactSVG src="/img/web.svg" className="media-icon mt-0 mr-[-1px] ml-[-5px]" />
      </Link>
      <Link href={""} className="social-links">
        <ReactSVG src="/img/Twitter.svg" className="media-icon mt-0 mr-[-1px]" />
      </Link>
      <Link href={""} className="social-links">
        <ReactSVG src="/img/Telegram.svg" className="media-icon mt-0 mr-[-1px]" />
      </Link>
      <Link href={""} className="social-links">
        <ReactSVG src="/img/Youtube.svg" className="media-icon mt-0 mr-[-1px]" />
      </Link>
      <Link href={""} className="social-links">
        <ReactSVG src="/img/Discord.svg" className="media-icon mt-0 mr-[-1px]" />
      </Link>
    </div>
  );
};
export default ProjectSocials;
