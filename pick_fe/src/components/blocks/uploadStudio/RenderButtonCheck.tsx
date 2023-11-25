import { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { GlobalButton } from "../..";

export const RenderButtonCheck = () => {
    const location = useLocation();
    const [uploadStudioData, setUploadStudioData] = useState(() => {
      const storedData = localStorage.getItem('uploadStudioData');
      return storedData ? JSON.parse(storedData) : {};
    });
  
    // // Update uploadStudioData state when localStorage changes
    useEffect(() => {
      const storedData = localStorage.getItem('uploadStudioData');
      if (storedData) {
        setUploadStudioData(JSON.parse(storedData));
      }
    }, []);
 

    const firstStepButtonDisabled = uploadStudioData?.studioAddress || uploadStudioData?.userSelectedCategory || uploadStudioData?.numberOfGuests
  
    if (location.pathname === '/upload-studio') {
      return (
        // start page
        <NavLink to="about-your-studio">
             <GlobalButton style={{background: "var(--gradient)"}} className="font-semibold ">
        Get started
    </GlobalButton>
        </NavLink>
      );
    } else if (location.pathname.includes('about-your-studio')) {
      return (
        // about studio page
        <NavLink to={!firstStepButtonDisabled ? "" : "studio-details"}>
          <GlobalButton
            disabled={!firstStepButtonDisabled}
            className={`${
              !firstStepButtonDisabled ? 'opacity-50 cursor-not-allowed' : 'bg-red-600  transition-all ease-in'
            }`}
            style={{background: `${!firstStepButtonDisabled ? "var(--gradient)" : "var(--primary)"}`}}
          >
            Next
          </GlobalButton>
        </NavLink>
      );
    }else if (location.pathname.includes('studio-details')) {
      return (
        // studio details
        <NavLink to="finish-listing">
          <GlobalButton
            // disabled={firstStepButtonDisabled}
            // className={`${
            //   firstStepButtonDisabled ? 'opacity-50 cursor-not-allowed' : 'bg-red-600  transition-all ease-in'
            // }`}
            // style={{background: `${!firstStepButtonDisabled ? "var(--gradient)" : "var(--primary)"}`}}
            style={{background: "var(--gradient)"}} className="font-semibold "
          >
            Next
          </GlobalButton>
        </NavLink>
      );
    }else if (location.pathname.includes('finish-listing')) {
      return (
        // Add pricing page
        <NavLink to="review-listing">
          <GlobalButton
                      // disabled={firstStepButtonDisabled}
            // className={`${
            //   firstStepButtonDisabled ? 'opacity-50 cursor-not-allowed' : 'bg-red-600  transition-all ease-in'
            // }`}
            // style={{background: `${!firstStepButtonDisabled ? "var(--gradient)" : "var(--primary)"}`}}

            style={{background: "var(--gradient)"}} className="font-semibold "
            onClick={()=>{}}
          >
            Review Listing
          </GlobalButton>
        </NavLink>
      );
    }else if (location.pathname.includes('review-listing')) {
      return (
        // publish listing page
        
          <GlobalButton

            style={{background: "var(--gradient)"}} className="font-semibold "
          >
            Publish Now
          </GlobalButton>
       
      );
    }
  };