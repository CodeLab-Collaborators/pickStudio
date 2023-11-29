import { FC } from "react";
import { IoMdClose } from "react-icons/io";
import { useFormSteps1, useFormSteps2 } from "../../global/globalState";
import { userHooks } from "../../hooks/userHooks";

interface ReviewModalProps {
  onClose: () => void;
}

const ReviewModal: FC<ReviewModalProps> = ({ onClose }) => {
  const { data } = userHooks();
  const [form1]: any = useFormSteps1();
  const [form2]: any = useFormSteps2();

  const studioFeatures = [
    "Specialized equipment",
    "Production and editing facilities",
    "Flexible space layout",
    "Proper lighting",
    "HVAC systems",
    "Comfortable seating",
  ];

  return (
    <div>
      <div
        className="fixed  inset-0 bg-[#000000af]  shadow-md flex justify-center items-center max-md:items-end  z-50 "
        onClick={onClose}
      >
        <div
          className="bg-white overflow-y-scroll max-md:overflow-y-auto h-[63vh] no-scrollbar  w-[55%] max-lg:w-[78%] max-md:h-[98vh]  max-md:w-full p-4 pt-0 rounded-xl"
          onClick={(e: any) => {
            e.stopPropagation();
          }}
        >
          {/* title */}
          <div className="w-full py-5 px-2 border-b grid grid-cols-3 bg-white sticky top-0 ">
            <p className="flex items-center cursor-pointer" onClick={onClose}>
              <IoMdClose />
            </p>
            <p className="flex justify-center items-center font-semibold">
              Full Preview
            </p>
          </div>

          {/* upload Data */}
          <div className=" mt-10 h-full mb-5 px-5 grid grid-cols-2 gap-10 max-md:grid-cols-1">
            {/* left */}
            <div className="h-[450px] max-md:h-[350px] sticky top-24 max-md:static max-md:top-0  shadow-md rounded-lg  overflow-hidden ">
              <img
                // src={
                //   form2.studioImages[0]
                //     ? form2.studioImages[0]
                //     : "https://i.stack.imgur.com/l60Hf.png"
                // }
                src={"https://i.stack.imgur.com/l60Hf.png"}
                alt=""
                className=" w-full object-cover "
              />
            </div>

            {/* uploaded info (right) */}
            <div className=" overflow-y-scroll  no-scrollbar max-md:overflow-y-auto h-full">
              <h2 className="text-3xl max-md:text-2xl leading-10 font-semibold">
                {form2.studioName}
              </h2>

              <div className="mt-4 border-b pb-4 flex justify-between items-center max-md:border-y max-md:py-5">
                <h3 className="text-xl font-normal">
                  Studio hosts - ({data?.firstName})
                </h3>
                <div className="w-[60px] max-md:w-[50px] max-md:h-[50px] h-[60px] rounded-full bg-slate-800 text-white  text-2xl font-semibold flex justify-center items-center">
                  {data?.avatar ? data?.avatar : data?.firstName?.charAt(0)}
                </div>
              </div>

              {/* description */}
              <div className="mt-5 font-normal text-base border-b pb-5">
                <p>{form2?.studioDescription}</p>
              </div>

              {/* features */}
              <div className="mt-5 border-b">
                <h2 className="text-lg max-md:text-2xl leading-10 font-semibold">
                  Studio features
                </h2>
                <ul className="list-disc ">
                  {form2.studioFeatures.map((feature: any, index: any) => (
                    <li
                      key={index}
                      className={`${
                        index !== studioFeatures.length - 1 ? "border-b" : ""
                      } py-4 list-none`}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* location */}
              <div className="mt-5">
                <h2 className="text-lg max-md:text-2xl leading-10 font-semibold">
                  Location
                </h2>
                <div className="mt-5 max-md:mb-4 font-normal text-base">
                  <p> {form1.studioAddress}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
