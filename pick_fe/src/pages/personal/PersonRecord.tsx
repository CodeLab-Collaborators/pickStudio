import React, { useEffect, useState } from "react";
import { FaListCheck, FaPeopleGroup } from "react-icons/fa6";
import HelpComp from "./HelpComp";
import pix from "../../assets/studio/1.jpg";
import { MdContactSupport } from "react-icons/md";
import { useReadArticles } from "../../hooks/reviewHooks";
import { Link, useParams } from "react-router-dom";
import { useUserHistory } from "../../hooks/userHooks";
import ReadingClients from "./ViewMyClient";
import { userStudioHooks } from "../../hooks/studioHooks";
import PersonalFinancials from "./PersonalFinancials";

const PersonRecord = () => {
  const [toggled, setToggled] = useState(false);
  const { id } = useParams();
  const { history } = useUserHistory(id!);
  const { userStudio } = userStudioHooks(id!);

  let word = [
    { work: "My Clients", state: true, data: "working" },
    { work: "Booking History", state: false, data: "working 1" },
    { work: "All my Studios", state: false, data: "working 2" },
    { work: "Financial Records", state: false, data: "working 3" },
    // { work: "Pending review (0)", state: false, data: "working 4" },
  ];

  const [state, setState] = useState<Array<any>>(word);

  const { articles } = useReadArticles();

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

      <div className="mt-10 border bg-[#fcfafa] rounded-md p-4 min-h-[200px] pt-10 ">
        <div className="mt-4 font-medium text-[14px] capitalize">
          {state?.find((el: any) => el.state === true)?.work ===
          "My Clients" ? (
            <div>
              {history?.history?.length > 0 ? (
                <div className=" ">
                  <ReadingClients props={history?.history} />
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <FaListCheck />
                  <div>No record yet</div>
                  <br />
                  No Clients{" "}
                </div>
              )}
            </div>
          ) : state?.find((el: any) => el.state === true)?.work ===
            "Booking History" ? (
            <div>
              <div className="flex flex-col items-center">
                <FaListCheck />
                <div>No record yet</div>
                <br />
                Booking History{" "}
              </div>
            </div>
          ) : state?.find((el: any) => el.state === true)?.work ===
            "All my Studios" ? (
            <div>
              {userStudio?.studio?.length > 0 ? (
                <div className="grid grid-cols-2 gap-2 ">
                  {" "}
                  {userStudio?.studio?.map((props: any) => (
                    <div className="w-full h-[300px] border rounded-md overflow-hidden">
                      <img
                        className="w-full h-[80%] object-cover "
                        src={
                          props?.studioImages.length > 0
                            ? props?.studioImages[0]
                            : pix
                        }
                      />

                      <p className="mt-2 pl-2">{props?.studioName}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <FaListCheck />
                  <div>No record yet</div>
                  <br />
                  All My Studios{" "}
                </div>
              )}
            </div>
          ) : state?.find((el: any) => el.state === true)?.work ===
            "Financial Records" ? (
            <div>
              {history?.history?.length > 0 ? (
                <div className="flex ">
                  <PersonalFinancials props={history?.history} />
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <FaListCheck />
                  <div>No record yet</div>
                  <br />
                  No Financial Record yet{" "}
                </div>
              )}
            </div>
          ) : null}
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
        {articles?.map((props: any, i: number) => (
          <Link
            to={`/article/${props?._id}`}
            className="border rounded-md"
            key={props._id}
          >
            <img
              src={props?.articleImage}
              className="min-w-[300px] object-cover border h-[250px] overflow-hidden rounded-t-md"
            />
            <div className="p-3 font-medium">{props?.articleTitle}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PersonRecord;

// flex w-full flex-col justify-center items-center
