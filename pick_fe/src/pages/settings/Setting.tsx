import { FC } from "react";
import { userHooks } from "../../hooks/userHooks";
import { Link } from "react-router-dom";
import { RiPagesLine } from "react-icons/ri";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";

const Setting: FC = () => {
  document.title = "(Studio name) profile setting - Pickastudio";
  const { data } = userHooks();

  const pathData = [
    {
      icon: <RiPagesLine size={35} />,
      title: "Personal Info",
      detail: " Provide personal details and how we can reach you.",
      url: "/personal-setting/my-personal-info",
      size: 35,
    },
    {
      icon: <HiMiniBuildingOffice2 size={35} />,
      title: "Professional Info",
      detail: " Provide personal details and how we can reach you.",
      url: "/personal-setting/my-prefessional-info",
      size: 35,
    },
    {
      icon: <RiPagesLine size={35} />,
      title: "Personal Info",
      detail: " Provide personal details and how we can reach you.",
      url: "/",
      size: 35,
    },
  ];

  return (
    <div className=" min-h-[82vh]">
      <div className="w-full m-auto py-8 my-4 flex gap-24 max-lg:block max-md:pt-1">
        {/* profile Account Detail */}
        <div>
          <div className="font-bold text-[50px]  ">Account </div>
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

      <div className="my-6 flex flex-wrap ">
        {pathData.map((props: any, i: number) => (
          <Link to={`${props.url}`} key={i} className="text-black">
            <div className="w-[300px] border rounded-md p-3  m-2 min-h-[150px] text-black shadow-md flex flex-col hover:shadow-lg">
              <div className="flex-1">{props.icon}</div>
              <div className="font-[400] mb-1">{props.title}</div>
              <div className="text-[12px] leading-4 font-[300]">
                {props.detail}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex-1 " />
    </div>
  );
};

export default Setting;
