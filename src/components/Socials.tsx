import Link from "next/link";
import { ReactSVG } from "react-svg";
import React from "react";

const Socials: React.FC = () => {
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
    <div className="w-[260px] [&_svg]:w-[30px] [&_svg]:h-8 flex justify-between text-center md:w-[300px]">
      <Link href={""} data-social-media-name="Twitter" onClick={handleLinkClick}>
        <ReactSVG src="/img/Twitter.SVG" className="social-links" />
      </Link>
      <Link href={""} data-social-media-name="Telegram" onClick={handleLinkClick}>
        <ReactSVG src="/img/Telegram.SVG" className="social-links" />
      </Link>
      <Link href={""} data-social-media-name="YouTube" onClick={handleLinkClick}>
        <ReactSVG src="/img/youtube.SVG" className="social-links" />
      </Link>
      <Link href={""} data-social-media-name="Medium" onClick={handleLinkClick}>
        <ReactSVG src="/img/Medium.SVG" className="social-links" />
      </Link>
      <Link href={""} data-social-media-name="Discord" onClick={handleLinkClick}>
        <ReactSVG src="/img/Discord.SVG" className="social-links" />
      </Link>
    </div>
  );
};

export default Socials;
