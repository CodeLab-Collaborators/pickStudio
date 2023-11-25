import { useState } from "react";
import GlobalInput from "../../components/props/GlobalInput";
import { GlobalButton } from "../../components";
import { userHooks } from "../../hooks/userHooks";

const PersonalInfoScreen = () => {
  const { data } = userHooks();

  const [toggle, setToggle] = useState<boolean>(false);
  const [toggle1, setToggle1] = useState<boolean>(false);
  const [toggle2, setToggle2] = useState<boolean>(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  const onToggle1 = () => {
    setToggle1(!toggle1);
  };

  const onToggle2 = () => {
    setToggle2(!toggle2);
  };
  return (
    <div className=" grid col-span-3 pr-0 h-[100px] ">
      {/* forms */}
      <div>
        <div className="flex w-full justify-between h-[100px] relative ">
          {" "}
          <div>
            <div>Legal Name</div>
            <div>
              {data?.firstName} {data?.lastName}
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
            className="absolute left:0 sm:left-16 top-[19.5rem] h-[200px] w-[90%] sm:w-[45%]  bg-fuchsia-500 py-4 z-10 "
            style={{
              background: "rgba(255, 255, 255, 0.25)",
              backdropFilter: " blur( 4px )",
            }}
          >
            <div className="z-20">
              <div className="flex w-full">
                <GlobalInput
                  className="flex-1 mr-1 placeholder:text-gray-400 "
                  placeholder="Enter First Name"
                />
                <GlobalInput
                  className="flex-1 ml-1"
                  placeholder="Enter Last Name "
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

      {/* forms */}
      <div>
        <div className="flex w-full justify-between h-[100px] relative ">
          {" "}
          <div>
            <div>Email address</div>
            <div className="text-[12px] leading-4 text-[gray] mb-4 ">
              Use an address you’ll always have access to.
            </div>
            <div className="font-[400] mt-3">
              {toggle1 ? (
                <div>{data?.email}</div>
              ) : (
                <div>
                  {data?.email.substring(0, 2)}****@
                  {data?.email.split("@")[1]}
                </div>
              )}
            </div>
          </div>
          <div
            className="text-[12px] underline font-[500] hover:cursor-pointer "
            onClick={onToggle1}
          >
            View
          </div>
        </div>
      </div>

      {/* forms */}
      <div>
        <div className="flex w-full justify-between h-[100px] relative mt-10 ">
          {" "}
          <div>
            <div>Phone numbers</div>
            <div className="text-[12px] leading-4 text-[gray] mb-4 mr-8 ">
              Add a number so confirmed guests and Airbnb can get in touch. You
              can add other numbers and choose how they’re used.
            </div>
            <div>
              <div className="font-[400] mt-3">
                {toggle2 ? (
                  <div>{data?.phone}</div>
                ) : (
                  <div>
                    {data?.phone ? (
                      <div>
                        {data?.phone.substring(0, 2)}****@
                        {data?.phone.split("@")[1]}
                      </div>
                    ) : (
                      <div>No phone contact yet</div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            className="text-[12px] underline font-[500] hover:cursor-pointer "
            onClick={onToggle2}
          >
            Change
          </div>
        </div>
        {toggle2 && (
          <div
            className="absolute left:0 sm:left-16 top-100  h-[200px] w-[90%] sm:w-[45%] bg-fuchsia-500 py-4  z-10 "
            style={{
              background: "rgba(255, 255, 255, 0.25)",
              backdropFilter: " blur( 4px )",
            }}
          >
            <div className="z-20">
              <div className="flex w-full">
                <GlobalInput
                  className="flex-1 mr-1 placeholder:text-gray-400 "
                  placeholder="Enter your contact mobile number "
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
    </div>
  );
};

export default PersonalInfoScreen;
