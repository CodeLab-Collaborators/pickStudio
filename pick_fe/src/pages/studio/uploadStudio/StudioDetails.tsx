import { FC } from "react";
import {
  StudioFeatures,
  StudioPicturesUpload,
  StudioTitle,
  UploadStudioStep,
} from "../../../components/blocks/uploadStudio";
import { useFormSteps } from "../../../global/globalState";

const StudioDetails: FC = () => {
  const [formStep] = useFormSteps();
  console.log("reading: ", formStep);
  document.title = "Step 2: More details about your studio - Pickastudio";
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-[80%]  h-full max-md:w-[90%] gap-10 grid grid-cols-2 max-md:flex max-md:flex-col max-md:gap-5">
        {/* step */}
        <div className=" ">
          <UploadStudioStep
            stepNumber={2}
            title="More details about your studio"
            description="In this step, you’ll add some of the amenities your studio offers, plus 5 or more photos. Then, you’ll create a title and description."
          />
        </div>

        {/* second box */}
        <div className="no-scrollbar max-h-screen overflow-y-scroll">
          <StudioTitle />
          <StudioFeatures />
          <StudioPicturesUpload />
        </div>
      </div>
    </div>
  );
};

export default StudioDetails;
