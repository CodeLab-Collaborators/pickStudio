import { FaAirbnb } from "react-icons/fa";
import { IoArchiveSharp, IoChatbox, IoStarSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { data } from "../../layouts/InboxLayout";

const Inbox: React.FC = () => {
  const dummy = {
    id: 1,
    image: null,
    title: "Airbnb Support",
    content: "How would you like to connect with us?",
    time: "12:34PM",
    date: "Dec 24, 2024",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex blanditiis cupiditate libero odit nihil possimus minima, praesentium architecto veniam enim rem fuga quia repellendus deleniti est accusamus earum nostrum tempore!",
  };

  const { id } = useParams();
  const realID = parseInt(id || "");
  const dataset: any = data.find((el: any) => el.id === realID);
  // might fix useParams issue later
  return (
    <div className="w-full flex justify-center">
      <div className="w-[90%] mt-5 flex flex-col gap-10">
        <div className="w-full flex items-center justify-between">
          <div className="font-medium text-lg flex items-center gap-4">
            {dataset === undefined ? (
              <p className="ml-10 lg:ml-0">{dummy.title}</p>
            ) : (
              <p className="ml-10 lg:ml-0">{dataset.title}</p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <IoChatbox />
            <IoStarSharp />
            <IoArchiveSharp />
          </div>
        </div>
        <div className="w-full flex justify-center">
          {dataset === undefined ? (
            <small className="font-medium opacity-[.6]">{dummy.date}</small>
          ) : (
            <small className="font-medium opacity-[.6]">{dataset.date}</small>
          )}
        </div>
        <div className="flex gap-5 items-start text-[13px]">
          {dataset === undefined ? (
            <div className="rounded-full w-fit bg-[#242424] text-white">
              <FaAirbnb className="m-3 text-2xl" />
            </div>
          ) : dataset?.image ? (
            <div className="w-12 h-12 overflow-hidden rounded-full">
              <img
                src={dataset.image}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ) : (
            <div className="rounded-full w-fit bg-[#242424] text-white">
              <FaAirbnb className="m-3 text-2xl" />
            </div>
          )}
          <div className="flex-1">
            <div className="flex item-center gap-2">
              {dataset === undefined ? (
                <p>{dummy.title}</p>
              ) : (
                <p>{dataset.title}</p>
              )}
              {dataset === undefined ? (
                <span className="opacity-[.6]">{dummy.time}</span>
              ) : (
                <span className="opacity-[.6]">{dataset.time}</span>
              )}
            </div>
            {dataset === undefined ? (
              <div className="mt-2">{dummy.details}</div>
            ) : (
              <div className="mt-2">{dataset.details}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
