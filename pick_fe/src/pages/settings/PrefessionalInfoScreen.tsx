import { useState } from "react";
import GlobalInput from "../../components/props/GlobalInput";
import { GlobalButton } from "../../components";
import { userHooks } from "../../hooks/userHooks";
import GlobalTextArea from "../../components/props/GlobalTextArea";

const ProfressionInfoScreen = () => {
  const { data } = userHooks();

  const [toggle, setToggle] = useState<boolean>(false);
  const [toggle1, setToggle1] = useState<boolean>(false);
  const [toggle2, setToggle2] = useState<boolean>(false);
  const [toggle3, setToggle3] = useState<boolean>(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  const onToggle1 = () => {
    setToggle1(!toggle1);
  };

  const onToggle2 = () => {
    setToggle2(!toggle2);
  };

  const onToggle3 = () => {
    setToggle3(!toggle3);
  };
  return (
    <div className=" grid col-span-3 pr-0 h-[100px] ">
      {/* forms */}
      <div>
        <div className="flex w-full justify-between h-[100px] relative ">
          {" "}
          <div>
            <div>Prefession</div>
            <div className="font-[400]">
              {data?.profession ? data.profession : "no profession added yet"}
            </div>
          </div>
          <div
            className="text-[12px] underline font-[500] hover:cursor-pointer  ml-10"
            onClick={onToggle2}
          >
            Change
          </div>
        </div>
        {toggle2 && (
          <div
            className="absolute left:0 sm:left-16 top-[19.5rem] h-[200px] w-[90%] sm:w-[45%]  bg-fuchsia-500 py-4 z-10 "
            style={{
              background: "rgba(255, 255, 255, 0.25)",
              backdropFilter: " blur( 4px )",
            }}
          >
            <div className="z-20">
              <div className="flex w-full">
                <GlobalInput
                  className="flex-1 ml-1"
                  placeholder="Enter contact address "
                />
              </div>
              <div className="w-[200px] mt-3 ">
                <GlobalButton
                  style={{ background: "var(--gradient)" }}
                  onClick={onToggle2}
                >
                  save
                </GlobalButton>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* forms */}
      <div>
        <div className="flex w-full justify-between h-[100px] relative ">
          {" "}
          <div>
            <div>Office Address</div>
            <div className="font-[400]">
              {data?.address ? data.address : "no contact address yet"}
            </div>
          </div>
          <div
            className="text-[12px] underline font-[500] hover:cursor-pointer  ml-10"
            onClick={onToggle}
          >
            Change
          </div>
        </div>
        {toggle && (
          <div
            className="absolute left:0 sm:left-16 top-[25.0rem] h-[200px] w-[90%] sm:w-[45%]  bg-fuchsia-500 py-4 z-10 "
            style={{
              background: "rgba(255, 255, 255, 0.25)",
              backdropFilter: " blur( 4px )",
            }}
          >
            <div className="z-20">
              <div className="flex w-full">
                <GlobalInput
                  className="flex-1 ml-1"
                  placeholder="Enter contact address "
                />
              </div>
              <div className="w-[200px] mt-3 ">
                <GlobalButton
                  style={{ background: "var(--gradient)" }}
                  onClick={onToggle}
                >
                  save
                </GlobalButton>
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        <div className="flex w-full justify-between h-[100px] relative ">
          {" "}
          <div>
            <div>Frequently spoken language</div>
            <div className="font-[400]">
              {data?.language ? data.language : "no language added yet"}
            </div>
          </div>
          <div
            className="text-[12px] underline font-[500] hover:cursor-pointer  ml-10"
            onClick={onToggle1}
          >
            Change
          </div>
        </div>
        {toggle1 && (
          <div
            className="absolute left:0 sm:left-16 top-[31.5rem] h-[200px] w-[90%] sm:w-[45%]  bg-fuchsia-500 py-4 z-10 "
            style={{
              background: "rgba(255, 255, 255, 0.25)",
              backdropFilter: " blur( 4px )",
            }}
          >
            <div className="z-20">
              <div className="flex w-full">
                <GlobalInput
                  className="flex-1 ml-1"
                  placeholder="eg: Pidgin, English, Yoruba"
                />
              </div>
              <div className="w-[200px] mt-3 ">
                <GlobalButton
                  style={{ background: "var(--gradient)" }}
                  onClick={onToggle1}
                >
                  save
                </GlobalButton>
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        <div className="flex w-full justify-between h-[100px] relative ">
          {" "}
          <div>
            <div>Biography</div>
            <div className="font-[400]">
              {data?.bio ? data.bio : "no biography added yet"}
            </div>
          </div>
          <div
            className="text-[12px] underline font-[500] hover:cursor-pointer  ml-10"
            onClick={onToggle3}
          >
            Change
          </div>
        </div>
        {toggle3 && (
          <div
            className="absolute left:0 sm:left-16 top-[37.5rem] h-[200px] w-[90%] sm:w-[45%]  bg-fuchsia-500 py-4 z-10 "
            style={{
              background: "rgba(255, 255, 255, 0.25)",
              backdropFilter: " blur( 4px )",
            }}
          >
            <div className="z-20">
              <div className="flex w-full">
                <GlobalTextArea
                  className="h-[200px] rounded-md w-full pt-6 "
                  placeholder="Enter your biography"
                />
              </div>
              <div className="w-[200px] mt-3 ">
                <GlobalButton
                  style={{ background: "var(--gradient)" }}
                  onClick={onToggle3}
                >
                  save
                </GlobalButton>
              </div>
            </div>
          </div>
        )}
      </div>

      <div>{/* <GlobalTextArea className="h-[200px] rounded-md" /> */}</div>
    </div>
  );
};

export default ProfressionInfoScreen;
