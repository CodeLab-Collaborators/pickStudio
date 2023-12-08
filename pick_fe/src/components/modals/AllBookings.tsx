import React from 'react'
import { IoMdClose } from 'react-icons/io';

const AllBookings = ({ onClose }: { onClose: () => void }) => {
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

<div className='w-[70%] max-lg:w-[80%] m-auto max-md:w-full shadow-sm rounded-lg p-4 flex gap-8  bg-slate-100'>
    {/* img */}
    <div className='w-[300px] max-lg:w-[250px] max-md:w-[45%] max-md:h-[150px] h-[220px] '>
        <img src="" alt="image" className='w-full h-full object-cover object-top' />
    </div>
    {/* text */}
    <div className=''>
        <h2 className='text-[1.525rem] max-md:text-xl font-medium'>Product name</h2>
        <h2>Product description</h2>

    </div>


</div>



            </div>

            </div>
    
          
      </div>
    </div>
  );
}

export default AllBookings