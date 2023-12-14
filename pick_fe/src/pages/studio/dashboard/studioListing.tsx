import React from 'react'
import pp from "../../../assets/jpg/Menstylica.jpeg"

const StudioListing = () => {
  return (
    <div className='py-7'>
        <h1 className='text-2xl font-semibold'>
            Your Studios
        </h1>

        <div>
            <div className='grid grid-cols-2 mt-8 md:grid-cols-3 lg:grid-cols-4 gap-8'>
              

               <figure>
               <img src={pp} alt="" className='w-full object-cover object-top max-md:h-[200px] max-lg:h-[270px] h-[400px] rounded-xl overflow-hidden relative' />
               <figcaption className='mt-2 font-semibold'>This is the studio title</figcaption>
               <p className='text-gray-500 text-sm font-semibold tracking-wide'> Lekki, Lagos</p>

               </figure>
               <figure>
               <img src={pp} alt="" className='w-full object-cover object-top max-md:h-[200px] max-lg:h-[270px] h-[400px] rounded-xl overflow-hidden relative' />
               <figcaption className='mt-2 font-semibold'>This is the studio title</figcaption>
               <p className='text-gray-500 text-sm font-semibold tracking-wide'> Lekki, Lagos</p>

               </figure>
               <figure>
               <img src={pp} alt="" className='w-full object-cover object-top max-md:h-[200px] max-lg:h-[270px] h-[400px] rounded-xl overflow-hidden relative' />
               <figcaption className='mt-2 font-semibold'>This is the studio title</figcaption>
               <p className='text-gray-500 text-sm font-semibold tracking-wide'> Lekki, Lagos</p>

               </figure>
               <figure>
               <img src={pp} alt="" className='w-full object-cover object-top max-md:h-[200px] max-lg:h-[270px] h-[400px] rounded-xl overflow-hidden relative' />
               <figcaption className='mt-2 font-semibold'>This is the studio title</figcaption>
               <p className='text-gray-500 text-sm font-semibold tracking-wide'> Lekki, Lagos</p>

               </figure>
     
            </div>
        </div>
    </div>
  )
}

export default StudioListing