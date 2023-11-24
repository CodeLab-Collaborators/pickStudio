import { FC } from "react";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { MdVisibility } from "react-icons/md";
import { MdHealthAndSafety } from "react-icons/md";

const PersonalSetting: FC = () => {
  document.title =
    "(Studio name) person account profile setting  - Pickastudio";

  const pathData = [
    {
      icon: <MdHealthAndSafety size={55} />,
      title: "Why isn’t my info shown here?",
      detail: "We’re hiding some account details to protect your identity.",
      url: "/personal-setting",
      size: 55,
    },
    {
      icon: <FaUnlockKeyhole size={55} />,
      title: "Which details can be edited?",
      detail:
        "Contact info and personal details can be edited. If this info was used to verify your identity, you’ll need to get verified again the next time you book—or to continue hosting.",
      url: "/",
      size: 35,
    },
    {
      icon: <MdVisibility size={55} />,
      title: "What info is shared with others?",
      detail:
        "Airbnb only releases contact information for Hosts and guests after a reservation is confirmed.",
      url: "/",
      size: 35,
    },
  ];

  return (
    <div>
      <div className="flex items-center">
        Account <LiaGreaterThanSolid size={13} className="mx-4 " /> Personal
        Info
      </div>
      <div className="mt-5 font-[500] text-[30px] ">Personal info</div>

      <div className="grid grid-cols-6  ">
        <div className="grid col-span-3 pr-8 ">
          <div className="flex w-full justify-between h-[100px] relative ">
            {" "}
            <div>
              <div>Legal Name</div>
              <div>Peter Oti</div>
            </div>
            <div className="text-[12px] underline font-[500] ">Change</div>
          </div>
          <div className="absolute left-16 top-60 bg-green-400 h-[200px] w-[45%] ">
            yy
          </div>
        </div>

        <div
          className="border ml-2 rounded-md"
          style={{
            gridColumn: "5/7",
          }}
        >
          {pathData.map((props: any, i: number) => (
            <div className="m-2 " key={i}>
              <div className="relative mb-8">
                <div className="mt-4 absolute top-[-10px] left-1 text-[#8A062E] z-[2px] opacity-20 ">
                  {props.icon}
                </div>
                <div className="mt-4 ">{props.icon}</div>
              </div>
              <div className="my-4 text-[20px] font-[400] ">{props.title}</div>
              <div className="mb-6 text-[17px] text-[#656565] leading-6 ">
                {props.detail}
              </div>

              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalSetting;
