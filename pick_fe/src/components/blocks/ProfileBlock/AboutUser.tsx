import { BsFillChatSquareTextFill } from "react-icons/bs";

import { BiCategory } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";

const AboutUser = () => {
  return (
    <div className="flex flex-col gap-3 ">
      <h2 className="text-3xl font-semibold max-md:text-2xl ">About me</h2>
      <div className="w-full grid grid-cols-2 max-md:grid-cols-1 gap-2">
        <div className="flex gap-2 items-center ">
          <div>
            <BiCategory />
          </div>
          <div className="">My work: Artist</div>
        </div>
        <div className="flex gap-2 items-center w-[50%] md:w-[40%]   ">
          <div>
            <BsFillChatSquareTextFill />
          </div>
          <div>Speaks English, Spanish</div>
        </div>
        <div className="flex gap-2 items-center w-[50%] md:-[40%] ">
          <div>
            <FaLocationDot />
          </div>
          <div>Lives in Mexico City, Mexico</div>

         
        </div>
      
      </div>
         {/* studio description */}
         <div className="mt-5 font-normal w-[70%] max-lg:w-[90%] max-md:w-full">
            <p>
            It will be a pleasure to host your event at Landmark event center, I try to help as much as possible to make your vacation perfect in our accommodation. I have extensive tourist knowledge about our island and will be happy to recommend places to visit as well as restaurants and points of interest.
            </p>
          </div>
    </div>
  );
};

export default AboutUser;
