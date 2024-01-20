import {  useLocation, useNavigate } from "react-router-dom";
import { RenderButtonCheck } from "./RenderButtonCheck";
import ProgressBar from "../../props/ProgressBar";

const uploadStudioFooter = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const progressBar = ()=>{
    if (location.pathname === "/upload-studio") {
      return  <div className="grid grid-cols-3 gap-2 w-full py-2">
           <ProgressBar value={0} />
        <ProgressBar value={0} />
        <ProgressBar value={0} />
      </div>
      
    } else if (location.pathname === "/upload-studio/about-your-studio"){
      return  <div className="grid grid-cols-3 gap-2 w-full py-2">
      <ProgressBar value={70} />
   <ProgressBar value={0} />
   <ProgressBar value={0} />
 </div>
    } else if (location.pathname === "/upload-studio/studio-details"){
      return  <div className="grid grid-cols-3 gap-2 w-full py-2">
      <ProgressBar value={100} />
   <ProgressBar value={60} />
   <ProgressBar value={0} />
 </div>
    } else if (location.pathname === "/upload-studio/upload-studio-images"){
      return  <div className="grid grid-cols-3 gap-2 w-full py-2">
      <ProgressBar value={100} />
   <ProgressBar value={85} />
   <ProgressBar value={0} />
 </div>
    }  else if (location.pathname === "/upload-studio/finish-listing"){
      return  <div className="grid grid-cols-3 gap-2 w-full py-2">
      <ProgressBar value={100} />
   <ProgressBar value={100} />
   <ProgressBar value={60} />
 </div>
    } else if (location.pathname === "/upload-studio/review-listing"){
      return  <div className="grid grid-cols-3 gap-2 w-full py-2">
      <ProgressBar value={100} />
   <ProgressBar value={100} />
   <ProgressBar value={100} />
 </div>
    } else {
      <div className="grid grid-cols-3 gap-2 w-full py-2">
           <ProgressBar value={100} />
        <ProgressBar value={100} />
        <ProgressBar value={100} />
      </div>
    }
  }

  return (
    <div className="w-full py-2 bg-white sticky bottom-0  flex items-center justify-between flex-col ">
  
       {progressBar()}
    
      <div className="w-[90%] m-auto flex justify-between max-md:justify-normal max-md:flex-wrap">
        {/* back button */}
        <div className="max-md:w-full flex place-items-center">
         {location.pathname === "/upload-studio" ? null :  <button
            className=" max-md:w-full py-2 font-semibold underline hover:scale-[1.11] transition-all ease-in"
            onClick={() => {
              navigate(-1);
            }}
          >
            back
          </button> }
        </div>
        <div className="max-md:w-full">{RenderButtonCheck("")}</div>
      </div>
    </div>
  );
};

export default uploadStudioFooter;
