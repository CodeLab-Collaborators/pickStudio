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
      title: "Account Details",
      detail: " Provide studio details and how we can reach you.",
      url: "/personal-setting/my-account-details",
      size: 35,
    },
  ];

  return (
    <div className=" min-h-[82vh]">
      <div className="w-full m-auto py-8 my-4 flex gap-24 max-lg:block max-md:pt-1">
        {/* profile Account Detail */}
        <div>
          <div className="font-bold text-[50px] text-[#421515]">Account </div>
          <div className="text-[13px] text-[#421515]">
            <strong className="font-[600] ">
              {data?.firstName} {data?.lastName}
            </strong>
            , {data?.email} &middot;{" "}
            <Link
              to={`/user/${data?._id}`}
              className="underline text-black font-[400] hover:text-black "
            >
              <span>go back to Profile</span>
            </Link>
          </div>
        </div>
      </div>

      {/* profile Account Detail Card */}

      <div
        className="my-6 text-blue-950 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 transition-all duration-300 lg:[&>*:nth-child(3)]:col-span-2 xl:[&>*:nth-child(3)]:col-span-1
      "
      >
        {pathData.map((props, i: number) => (
          <Link to={`${props.url}`} key={i} className="text-[#421515]">
            <div className="min-w-[300px] border rounded-md p-3 min-h-[200px] text-blue-950 shadow-md flex flex-col hover:shadow-lg">
              <div className="flex-1 text-[#8C0707]">{props.icon}</div>

              <div className="font-[500] mb-2 text-[20px] text-[#321010]">
                {props.title}
              </div>
              <div className="text-[15px] leading-4 font-[300] text-[#321010]">
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
