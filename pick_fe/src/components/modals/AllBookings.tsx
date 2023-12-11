import {FC} from 'react'
import { IoMdClose } from 'react-icons/io';
import pic from "../../assets/3.jpg"
import { FiHeart } from "react-icons/fi";

interface AllBookingsModalProps {
  onClose: () => void;
}

const AllBookings:FC<AllBookingsModalProps> = ({ onClose }) => {

  const Studiofeatures = ['wifi', 'space', 'parking space', 'music'];



    return (
        <div>
          <div className="fixed  inset-0 bg-[#000000ab]  z-50 ease-in duration-300 transition-all ">

            <div  onClick={onClose}  className="w-full px-8 h-[7vh] flex justify-between items-center">
             
    
             
            </div>

            <div className='w-full h-full slide-top pb-14 max-md:pb-0 bg-white rounded-e-xl rounded-s-xl'>
{/* top */}
<p onClick={onClose} className="cursor-pointer text-xl w-[95%] m-auto py-3">
                <IoMdClose />
              </p>

    {/* gallery */}
    <div className="px-8 py-4 text-black   w-full h-full overflow-y-scroll ">
                {/* COMPONENT    */}

<div className='w-[70%] max-lg:w-[80%] m-auto max-md:w-full max-md:py-6  px-8 max-lg:px-0 py-10 flex gap-8  border-y'>
    {/* img */}
    <div className='w-[400px] max-lg:w-[250px] max-md:w-[45%] max-md:h-[150px] h-[220px] '>
        <img src={pic} alt="image" className='w-full h-full object-cover rounded-xl  object-top' />
    </div>
    {/* text */}
    <div className='w-full'>
     <div className='flex items-center justify-between'>
     <h4 className='text-slate-400 font-semibold text-sm tracking-wide'>Product description</h4>
     <button className='text-xl'><FiHeart /></button>
     </div>
        <h2 className='text-[1.525rem] pb-3 text-slate-700 font-semibold max-md:text-xl tracking-wide'>Product name</h2>
        {/* seperator line */}
        <div className='w-[50px] bg-slate-300 h-[1px]'></div>

        {/* studio features */}
        <div className='py-5'>
        <ul className='list-disc ml-4  text-sm font-semibold text-gray-500 flex gap-x-6 items-center flex-wrap' >
      {Studiofeatures.map((amenity, index) => (
        <li key={index} >
          {amenity}
        </li>
      ))}
    </ul>
        </div>
           {/* seperator line */}
           <div className='w-[50px] bg-slate-300 h-[1px]'></div>

           {/* reviews and price */}
           <div className='flex items-center justify-between mt-5 max-md:mt-3'>
            <p>318 reviews</p>
            <p> <strong className='font-semibold'>N20,000</strong>   /day</p>

           </div>
 

    </div>


</div>



            </div>

            </div>
    
          
      </div>
    </div>
  );
}

export default AllBookings