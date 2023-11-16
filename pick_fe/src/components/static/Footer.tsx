import { FC } from "react";
import { HeaderData } from "../../types";

const Footer: FC<HeaderData> = ({ width }) => {
  return (
    <footer
      className={`w-full h-[50px] 
        border-t-[1px] bg-white flex items-center  transition duration-300`}
    >
      <div className={`w-${width} m-[auto] text-sm tracking-wider`}>
        <p>© {new Date().getFullYear()} PICKASTUDIO</p>
      </div>
    </footer>
  );
};

export default Footer;
