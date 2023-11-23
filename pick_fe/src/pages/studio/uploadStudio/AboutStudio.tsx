import { StudioCategory, StudioLocation, StudioSize } from "../../../components/blocks/uploadStudio"


const AboutStudio = () => {
document.title = "Step 1: Tell us about your studio - Pickastudio"

  return (
    <div className='w-full h-full flex justify-center items-center'>
              <div className='w-[80%]  h-full max-md:w-[90%] gap-10 grid grid-cols-2 max-md:flex max-md:flex-col max-md:gap-5'>
                  {/* title */}
        <div className='flex flex-col justify-center '>
            <p className="font-semibold mb-2">Step 1</p>
          <h1 className=' max-md:text-[1.78rem] max-lg:text-[2.2rem] max-md:leading-tight leading-[3.375rem;] text-[3rem] max-w-[530px] font-normal'>Tell us about your studio</h1>
          <p className="text-[1.125rem] max-md:hidden text-[#222] font-normal max-w-[550px] mt-5 leading-[1.75rem]">In this step, we'll ask you which type of property you have and if guests will book the entire place or just a room. Then let us know the location and how many guests can stay.</p>
        </div>

{/* second box */}
        <div className="">
            <StudioCategory/>
            <StudioLocation/>
          <StudioSize/>
        </div>
              </div>
    </div>
  )
}

export default AboutStudio