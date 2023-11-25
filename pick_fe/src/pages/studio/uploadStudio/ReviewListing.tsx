import  { FC, useState } from 'react'
import mm from "../../../assets/jpg/Menstylica.jpeg"
import { ReviewModal } from '../../../components/modals'

const ReviewListing:FC = () => {
document.title = "Review and publish your listing - Pickastudio"

const [showModal, setShowModal] = useState(false)

const uploadData = localStorage.getItem("uploadStudioData")

console.log("this is uploadData", uploadData)

  return (
    <div>
        <div className='w-[50%] max-lg:w-[70%] max-md:w-[90%] m-auto  h-full flex flex-col justify-center items-start'>
            {/* title */}
            <div >
                <h1 className='font-semibold text-5xl max-lg:text-4xl'>Review your listing</h1>
                <p className='mt-6 text-[1.125rem] max-md:text-[1rem] leading-6 text-[#717171] font-normal'>Here's what we'll show to users. Make sure everything looks good.</p>
            </div>
            <div className='grid grid-cols-2 mt-14 max-lg:mt-10 max-lg:grid-cols-1 gap-20 max-lg:gap-12'>
                <div className='bg-white cursor-pointer p-5 shadow-2xl h-[400px] rounded-2xl w-[358px] max-md:w-[100%] ' onClick={()=>{setShowModal(!showModal)}}>
                    {/* image */}
                    <div className='w-full relative h-[85%] overflow-hidden rounded-md'>
                        <img src={mm} alt=""  className="object-cover"/>
                        <button className='absolute top-3 left-3 px-3 py-1 font-semibold text-sm rounded-lg bg-white shadow-md'>preview</button>

                    </div>
                    {/* post title */}
                    <div className='mt-2'>
                    <h2 className='font-semibold'>This is your post title</h2>

                    {/* price */}
                  <div className='flex justify-between items-center'>
                  <div className='flex gap-2'>
                   <h4 className='line-through text-[#717171]'>₦2000</h4>
                   <h4 className='font-semibold flex items-center gap-1'>₦6000 <p className='text-xs'>/hour</p></h4>
                   </div>
                   <p className='px-3 py-1 bg-orange-200 rounded-xl text-xs font-semibold '>-20% </p>
                  </div>
                    </div>
                </div>


                {/* What's next */}
               <div className='flex flex-col justify-center'>
               <h1 className='text-2xl font-semibold'>What's next?</h1>
               <div>
                <h2 className='text-3xl font-normal mt-4'>Hit the publish button</h2>
               </div>
               </div>
               
            </div>
            {showModal &&      <ReviewModal onClose={()=>{setShowModal(!showModal)}} />}
        </div>
    </div>
  )
}

export default ReviewListing