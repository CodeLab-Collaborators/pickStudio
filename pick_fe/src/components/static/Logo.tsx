import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <div>
      <NavLink to="/">
        <img src={logo} alt="Pickastudio" className="object-contain" />
      </NavLink>
    </div>
  );
};

export default Logo;
