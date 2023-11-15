import { FunctionComponent } from "react";
import { AuthBar, Logo, Search } from "../..";

const Header: FunctionComponent = () => {
  return (
    <div className="w-full  h-[10vh] border-b border-[#0000000e]">
      <div className="w-[90%] h-full  m-auto flex items-center justify-between">
        {/* logo */}
        <div className="h-full w-[100px] flex items-center max-md:hidden">
          <Logo />
        </div>
        {/* search */}
        <Search />

        {/* auth */}
        <div>
          <AuthBar />
        </div>
      </div>
    </div>
  );
};

export default Header;
