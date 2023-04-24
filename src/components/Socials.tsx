import Link from "next/link";
import { ReactSVG } from "react-svg";

const Socials: React.FC = () => {
  return (
    <div className="w-[260px] [&_svg]:w-[30px] [&_svg]:h-8 flex justify-between">
      <Link href={""}>
        <ReactSVG src="/img/Twitter.svg" className="social-links" />
      </Link>
      <Link href={""}>
        <ReactSVG src="/img/Telegram.svg" className="social-links" />
      </Link>
      <Link href={""}>
        <ReactSVG src="/img/Youtube.svg" className="social-links" />
      </Link>
      <Link href={""}>
        <ReactSVG src="/img/Medium.svg" className="social-links" />
      </Link>
      <Link href={""}>
        <ReactSVG src="/img/Discord.svg" className="social-links" />
      </Link>
    </div>
  );
};
export default Socials;
