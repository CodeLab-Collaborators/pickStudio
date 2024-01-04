import React, { useEffect, useState } from "react";
import { FaListCheck } from "react-icons/fa6";

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
    </div>
  );
};

export default PersonRecord;
