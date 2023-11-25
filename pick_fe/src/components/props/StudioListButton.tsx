import { FC } from "react";
import { NavLink } from "react-router-dom";
import { StudioListButtonProps } from "../../types";

const StudioListButton: FC<StudioListButtonProps> = ({
  title,
  description,
  buttonText,
  buttonPath,
  icon,
  iconColor,
}) => {
  return (
    <div className="min-h-[65vh]">
      <div className="border rounded-2xl shadow-sm p-5 flex justify-between gap-5 w-[300px]">
        {/* description */}
        <div>
          <h2 className="font-semibold">{title}</h2>
          <p className="text-sm text-[var(--primary)] font-normal">
            {description}
          </p>
          <NavLink to={buttonPath}>
            <p className="font-semibold underline cursor-pointer mt-4">
              {" "}
              {buttonText}
            </p>
          </NavLink>
        </div>

        {/* icon */}
        <div className="flex justify-center items-center">
          <p className={`text-3xl ${iconColor} `}>{icon}</p>
        </div>
      </div>
    </div>
  );
};

export default StudioListButton;
