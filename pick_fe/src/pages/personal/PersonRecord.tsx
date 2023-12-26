import React, { useEffect, useState } from "react";
import { FaListCheck } from "react-icons/fa6";

const PersonRecord = () => {
  const [stateStart, setStateStart] = useState(true);
  const [stateStart1, setStateStart1] = useState(false);

  const word = [
    { work: "Check out (0)", state: stateStart1 },
    { work: "Currently hosting (0)", state: stateStart1 },
    { work: "Arriving soon (0)", state: stateStart },
    { work: "Upcoming (0)", state: stateStart1 },
    { work: "Pending review (0)", state: stateStart1 },
  ];

  useEffect(() => {}, [word, stateStart, stateStart1]);
  return (
    <div>
      <div className="mt-14" />
      <div className="font-medium text-[22px] mb-5">Your space records</div>

      <div className="flex gap-2">
        {word.map((props: any, i: number) => (
          <div
            key={i}
            className={`
            rounded-full  ${
              props.state ? "border-black border-2" : "border"
            } py-2 px-5 font-medium cursor-pointer`}
            onClick={() => {
              let truty = word.find((el) => el.state === true);
              truty!.state = stateStart1;
              word[i].state = stateStart;

              console.log(truty);
              console.log(word);
            }}
          >
            {props.work}
          </div>
        ))}
      </div>

      <div className="flex  flex-col justify-center items-center mt-10 border bg-[#ececec] rounded-md p-4 min-h-[400px]">
        <FaListCheck />
        <div>No record yet</div>
      </div>
    </div>
  );
};

export default PersonRecord;
