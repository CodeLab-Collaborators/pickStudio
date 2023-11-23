import { FC } from "react";
import { userHooks } from "../../hooks/userHooks";
import { Link } from "react-router-dom";
import { RiPagesLine } from "react-icons/ri";

const Setting: FC = () => {
  document.title = "(Studio name) profile setting - Pickastudio";
  const { data } = userHooks();

  return (
    <div>
      <div className="w-full m-auto py-8 my-4 flex gap-24 max-lg:block max-md:pt-1">
        {/* profile Account Detail */}
        <div>
          <div className="font-bold text-[50px]  ">Account</div>
          <div className="text-[13px]">
            <strong className="font-[600]">
              {data?.firstName} {data?.lastName}
            </strong>
            , {data?.email} &middot;{" "}
            <Link
              to="/user"
              className="underline text-black font-[400] hover:text-black "
            >
              <span>go back to Profile</span>
            </Link>
          </div>
        </div>
      </div>

      {/* profile Account Detail Card */}

      <div>
        <div>
          <div>
            <RiPagesLine />
          </div>
          <div>Personal Info</div>
          <div>Provide personal details and how we can reach you.</div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
