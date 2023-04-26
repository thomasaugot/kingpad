import Link from "next/link";
import { ReactSVG } from "react-svg";

const ProjectSocials: React.FC = () => {
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const url = event.currentTarget.href;
    const socialMediaName = event.currentTarget.dataset.socialMediaName;
    const openAppPrompt = confirm(`Do you want to open ${socialMediaName}?`);
    if (openAppPrompt) {
      window.location.href = `app://${url}`;
    } else {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="w-[60%] [&_svg]:w-[30px] [&_svg]:h-7 flex mt-6 align-middle justify-stretch">
      <Link href={""} data-social-media-name="yourwebsite" onClick={handleLinkClick}>
        <ReactSVG src="/img/web.svg" className="media-icon mt-0 mr-[-1px] ml-[-5px]" />
      </Link>
      <Link href={""} data-social-media-name="Twitter" onClick={handleLinkClick}>
        <ReactSVG src="/img/Twitter.svg" className="media-icon mt-0 mr-[-1px]" />
      </Link>
      <Link href={""} data-social-media-name="Telegram" onClick={handleLinkClick}>
        <ReactSVG src="/img/Telegram.svg" className="media-icon mt-0 mr-[-1px]" />
      </Link>
      <Link href={""} data-social-media-name="YouTube" onClick={handleLinkClick}>
        <ReactSVG src="/img/Youtube.svg" className="media-icon mt-0 mr-[-1px]" />
      </Link>
      <Link href={""} data-social-media-name="Discord" onClick={handleLinkClick}>
        <ReactSVG src="/img/Discord.svg" className="media-icon mt-0 mr-[-1px]" />
      </Link>
      <Link href={""} data-social-media-name="Facebook" onClick={handleLinkClick}>
        <ReactSVG src="/img/Facebook.svg" className="media-icon mt-0 ml-[-6px]" />
      </Link>
      <Link href={""} data-social-media-name="Instagram" onClick={handleLinkClick}>
        <ReactSVG src="/img/Instagram.svg" className="media-icon mt-0 ml-[-7px]" />
      </Link>
    </div>
  );
};

export default ProjectSocials;
