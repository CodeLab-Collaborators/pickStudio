import { FC } from 'react'
import { UploadStudioStep } from '../../../components/blocks/uploadStudio'

const FinishListing:FC = () => {
    document.title = "Step 3: Finish your listing - Pickastudio"

    return (
      <div className='w-full h-full flex justify-center items-center'>
                <div className='w-[80%]  h-full max-md:w-[90%] gap-10 grid grid-cols-2 max-md:flex max-md:flex-col max-md:gap-5'>
                    {/* step */}
        <UploadStudioStep
        stepNumber={3}
        title="Finish up and publish"
        description="Finally, we can get this over with 😮‍💨. Set your price. Answer a few quick questions and publish (Voila) 😊."
        />
  
  {/* second box */}
          <div className="">
              {/* <StudioCategory/>
              <StudioLocation/>
            <StudioSize/> */}
          </div>
                </div>
      </div>
    )
}

export default FinishListing