import {
  StudioCategory,
  StudioLocation,
  StudioSize,
  UploadStudioStep,
} from "../../../components/blocks/uploadStudio";

const AboutStudio = () => {
  document.title = "Step 1: Tell us about your studio - Pickastudio";

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-[80%]  h-full max-md:w-[90%] gap-10 grid grid-cols-2 max-md:flex max-md:flex-col max-md:gap-5">
        {/* step */}
        <UploadStudioStep
          stepNumber={1}
          title="Tell us about your studio"
          description="In this step, we'll ask you which type of property you have and if guests will book the entire place or just a room. Then let us know the location and how many guests can stay."
        />

        {/* second box */}
        <div className="">
          <StudioCategory />
          <StudioLocation />
          <StudioSize />
        </div>
      </div>
    </div>
  );
};

export default AboutStudio;
