import { FC } from "react";
import { HeaderData } from "../../types";
import {
  FaFacebook,
  FaFacebookF,
  FaFacebookSquare,
  FaInstagramSquare,
  FaMailBulk,
  FaVoicemail,
} from "react-icons/fa";
import { MdEmail, MdFacebook } from "react-icons/md";

const Footer: FC<HeaderData> = ({ width }) => {
  return (
    <footer
      className={`w-full h-[50px] 
        border-t-[1px] bg-white flex items-center  transition duration-300`}
    >
      <div
        className={`w-${width} m-[auto] text-sm tracking-wider flex justify-between items-center`}
      >
        <p>© {new Date().getFullYear()} PICKASTUDIO</p>
        <div className="flex gap-2 text-[25px]">
          <div
            className="tooltip text-[33px] -mt-1 "
            data-tip="info@pickastudio.com"
          >
            <MdEmail />
          </div>
          <a
            className="text-black hover:text-neutral-800"
            href="https://www.facebook.com/pickastudiospace"
            target="_blank"
            rel="noopener"
          >
            <FaFacebookSquare />
          </a>
          <a
            className="text-black hover:text-neutral-800"
            href="https://www.instagram.com/pickastudiospace"
            target="_blank"
            rel="noopener"
          >
            <FaInstagramSquare />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
