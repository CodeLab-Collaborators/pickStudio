import { FC } from "react";
import { IoMdClose } from "react-icons/io";
import mm from "../../assets/jpg/INSTASHOP.jpeg"

interface ReviewModalProps {
    onClose: () => void;
  }

const ReviewModal: FC<ReviewModalProps> = ({onClose}) => {

    const studioFeatures = [
        'Specialized equipment',
        'Production and editing facilities',
        'Flexible space layout',
        'Proper lighting',
        'HVAC systems',
        'Comfortable seating',
      ];


    return (
        <div>
          <div className="fixed  inset-0 bg-[#000000af]  shadow-md flex justify-center items-center max-md:items-end  z-50 "  onClick={onClose}>
         <div className="bg-white overflow-y-scroll max-md:overflow-y-auto h-[63vh] no-scrollbar  w-[55%] max-lg:w-[78%] max-md:h-[98vh]  max-md:w-full p-4 pt-0 rounded-xl" onClick={(e:any)=>{  e.stopPropagation();}}>
            {/* title */}
            <div className="w-full py-5 px-2 border-b grid grid-cols-3 bg-white sticky top-0 ">
<p className="flex items-center cursor-pointer" onClick={onClose}><IoMdClose /></p>
<p className="flex justify-center items-center font-semibold">Full Preview</p>
            </div>

            {/* upload Data */}
            <div className=" mt-10 h-full mb-5 px-5 grid grid-cols-2 gap-10 max-md:grid-cols-1">
                {/* left */}
                <div className="h-[450px] max-md:h-[350px] sticky top-24 max-md:static max-md:top-0  shadow-md rounded-lg  overflow-hidden ">
                    <img src={mm} alt="" className=" w-full object-cover "/>
                </div>

                {/* uploaded info (right) */}
                <div className=" overflow-y-scroll  no-scrollbar max-md:overflow-y-auto h-full">
                    <h2 className="text-3xl max-md:text-2xl leading-10 font-semibold">This is your Post title</h2>

                    <div className="mt-4 border-b pb-4 flex justify-between items-center max-md:border-y max-md:py-5">
                        <h3 className="text-xl font-normal">Studio hosts - (userName)</h3>
                        <div className="w-[60px] max-md:w-[50px] max-md:h-[50px] h-[60px] rounded-full bg-slate-800 text-white  text-2xl font-semibold flex justify-center items-center">
L
                        </div>
                    </div>

                    {/* description */}
                    <div className="mt-5 font-normal text-base border-b pb-5">
                        <p>Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloribus officia, debitis tenetur accusantium rem mollitia consequatur velit minus non?</p>
                    </div>

                    {/* features */}
                    <div className="mt-5 border-b">
                    <h2 className="text-lg max-md:text-2xl leading-10 font-semibold">Studio features</h2>
                    <ul className="list-disc ">
          {studioFeatures.map((feature, index) => (
            <li key={index} className={`${index !== studioFeatures.length - 1 ? 'border-b' : ''} py-4 list-none`}>
              {feature}
            </li>
          ))}
        </ul>
                    </div>

                    {/* location */}
                    <div className="mt-5">
                    <h2 className="text-lg max-md:text-2xl leading-10 font-semibold">Location</h2>
                    <div className="mt-5 max-md:mb-4 font-normal text-base">
                        <p>Your Address</p>
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
