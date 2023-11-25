import { FC } from "react";

type stepData = {
  stepNumber: number;
  title: string;
  description: string;
};

const UploadStudioStep: FC<stepData> = ({ stepNumber, title, description }) => {
  return (
    <div className="flex flex-col justify-center sticky top-[30%] max-md:static">
      <p className="font-semibold mb-2">Step {stepNumber}</p>
      <h1 className="max-md:text-[1.78rem] max-lg:text-[2.2rem] max-md:leading-tight leading-[3.375rem;] text-[3rem] max-w-[530px] font-normal">
        {title}
      </h1>
      <p className="text-[1.125rem] max-md:hidden text-[#222] font-normal max-w-[550px] mt-5 leading-[1.75rem]">
        {description}
      </p>
    </div>
  );
};

export default UploadStudioStep;
