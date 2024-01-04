import React, { useEffect, useState } from "react";
import { FaListCheck, FaPeopleGroup } from "react-icons/fa6";
import HelpComp from "./HelpComp";
import pix from "../../assets/1.jpg";
import { MdContactSupport } from "react-icons/md";
const PersonRecord = () => {
  const [toggled, setToggled] = useState(false);

  let word = [
    { work: "Check out (0)", state: true },
    { work: "Currently hosting (0)", state: false },
    { work: "Arriving soon (0)", state: false },
    { work: "Upcoming (0)", state: false },
    { work: "Pending review (0)", state: false },
  ];

  const [state, setState] = useState<Array<any>>(word);

  const changeState = (i: number) => {
    if (!document.startViewTransition) {
      let truty = state.find((el) => el.state === true);
      truty!.state = false;
      state[i].state = true;

      setToggled(true);
    } else {
      document.startViewTransition(() => {
        let truty = state.find((el) => el.state === true);
        truty!.state = false;
        state[i].state = true;

        setToggled(true);
      });
    }
  };

  useEffect(() => {
    if (toggled) {
      let timer = setTimeout(() => {
        setToggled(false);
        clearTimeout(timer);
      });
    }
  }, [state, toggled]);

  return (
    <div>
      <div className="mt-14" />
      <div className="font-medium text-[22px] mb-5">Your space records</div>

      <div className="flex flex-wrap gap-2 ">
        {state.map((props: any, i: number) => (
          <div
            key={i}
            className={`
            rounded-full  ${
              props.state ? "border-black border-2" : "border"
            } py-2 px-5 font-medium cursor-pointer text-[12px] capitalize`}
            style={{
              border: `${props.state ? "2px solid black" : ""}`,
            }}
            onClick={() => {
              changeState(i);
            }}
          >
            {props.work}
          </div>
        ))}
      </div>

      <div className="flex  flex-col justify-center items-center mt-10 border bg-[#ececec] rounded-md p-4 min-h-[200px] pt-10">
        <FaListCheck />
        <div>No record yet</div>
        <div className="mt-4 font-medium text-[14px] capitalize">
          {state?.find((el: any) => el.state === true)?.work}
        </div>

        <br />
        <br />
        <br />
      </div>
      <div className="mt-10 mb-5 text-[20px] font-bold">We can Help Out</div>

      <div className=" grid  grid-cols-1 md:grid-cols-2 gap-2">
        <HelpComp
          title="Join your local Host Club"
          sub="Connect, collaborate, and share with other Hosts and community members."
          icon={<FaPeopleGroup />}
        />
        <HelpComp
          title="Contact specialized support"
          sub="As a new Host, you get one-tap access to a specially trained support team.onnect, collaborate, and share with other Hosts and community members."
          icon={<MdContactSupport />}
        />
      </div>

      <div className="mt-10 mb-5 text-[20px] font-bold">
        Tips to improve your Business with us!
      </div>

      <div className="w-full flex overflow-x-scroll snap-x gap-4 border rounded-md p-2">
        {Array.from({ length: 5 }).map((props: any, i: number) => (
          <div className="border rounded-md">
            <img
              src={pix}
              className="min-w-[300px] object-cover border h-[250px] overflow-hidden rounded-t-md"
            />
            <div className="p-3 font-medium">
              How to make your listing stand out
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonRecord;
