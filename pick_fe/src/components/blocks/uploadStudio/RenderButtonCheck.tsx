import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { GlobalButton } from "../..";
import {
  useFormSteps,
  useFormSteps1,
  useFormSteps2,
  useFormSteps3,
} from "../../../global/globalState";
import { createAStudio } from "../../../api/studioAPI";
import { userHooks } from "../../../hooks/userHooks";

export const RenderButtonCheck = () => {
  const navigate = useNavigate();
  const { data } = userHooks();
  const formData = new FormData();
  const [formStep2, setFormStep2]: any = useFormSteps2();

  // const [form2] = useFormSteps2();
  // const [form3] = useFormSteps3();

  const location = useLocation();
  const [formStep, setFormStep] = useFormSteps();

  const [uploadStudioData, setUploadStudioData] = useState(() => {
    const storedData = localStorage.getItem("uploadStudioData");
    return storedData ? JSON.parse(storedData) : {};
  });

  // // Update uploadStudioData state when localStorage changes
  useEffect(() => {
    const storedData = localStorage.getItem("uploadStudioData");
    if (storedData) {
      setUploadStudioData(JSON.parse(storedData));
    }
  }, []);

  const firstStepButtonDisabled =
    uploadStudioData?.studioAddress ||
    uploadStudioData?.userSelectedCategory ||
    uploadStudioData?.numberOfGuests;

  if (location.pathname === "/upload-studio") {
    return (
      // start page
      <NavLink to="about-your-studio">
        <GlobalButton
          style={{ background: "var(--gradient)" }}
          className="font-semibold "
        >
          Get started
        </GlobalButton>
      </NavLink>
    );
  } else if (location.pathname.includes("about-your-studio")) {
    return (
      // about studio page
      <NavLink to={!firstStepButtonDisabled ? "" : "studio-details"}>
        <GlobalButton
          disabled={!firstStepButtonDisabled}
          className={`${
            !firstStepButtonDisabled
              ? "opacity-50 cursor-not-allowed"
              : "bg-red-600  transition-all ease-in"
          }`}
          style={{
            background: `${
              !firstStepButtonDisabled ? "var(--gradient)" : "var(--primary)"
            }`,
          }}
          onClick={() => {
            setFormStep(uploadStudioData);
          }}
        >
          Next
        </GlobalButton>
      </NavLink>
    );
  } else if (location.pathname.includes("studio-details")) {
    return (
      // studio details
      <NavLink to="finish-listing">
        <GlobalButton
          disabled={firstStepButtonDisabled}
          style={{ background: "var(--gradient)" }}
          className="font-semibold z-100 "
          onClick={() => {
            // setFormStep(uploadStudioData);
            console.log(
              "pushing",
              JSON.parse(localStorage.getItem("formSteps")!)
            );
          }}
        >
          Next
        </GlobalButton>
      </NavLink>
    );
  } else if (location.pathname.includes("finish-listing")) {
    return (
      // Add pricing page
      <NavLink to="review-listing">
        <GlobalButton
          // disabled={firstStepButtonDisabled}
          // className={`${
          //   firstStepButtonDisabled ? 'opacity-50 cursor-not-allowed' : 'bg-red-600  transition-all ease-in'
          // }`}
          // style={{background: `${!firstStepButtonDisabled ? "var(--gradient)" : "var(--primary)"}`}}

          style={{ background: "var(--gradient)" }}
          className="font-semibold "
          onClick={() => {
            // console.log(uploadStudioData);
            console.log("finisted: ", formStep);
          }}
        >
          Review Listing
        </GlobalButton>
      </NavLink>
    );
  } else if (location.pathname.includes("review-listing")) {
    return (
      // publish listing page

      <GlobalButton
        style={{ background: "var(--gradient)" }}
        className="font-semibold "
        onClick={() => {
          let step1 = JSON.parse(localStorage.getItem("formSteps1")!);
          let step2 = JSON.parse(localStorage.getItem("formSteps2")!);
          let step3 = JSON.parse(localStorage.getItem("formSteps3")!);
          // console.log("pushing", step1, step2, step3);

          // let studioData = {
          //   image: step1.studioImages,
          //   // studioContact: ,
          //   studioCategory: ,
          //   : ,
          //   : ,
          //   : ,
          //   : ,
          //   : ,
          //   : ,
          //   : ,
          //   : ,
          // };

          formData.append("avatar", step2.studioImages);
          formData.append("studioName", step2.studioName);
          formData.append("studioCategory", step1.selectedStudioCategory);
          formData.append("studioAddress", step1.studioAddress);
          formData.append("studioDescription", step2.studioDescription);
          formData.append("studioFeatures", step2.studioFeatures);
          formData.append("studioPrice", step3.studioPrice);
          formData.append("numberOfGuess", step1.numberOfGuests);
          formData.append("includeDiscount", step3.includeDiscount);
          formData.append("discountPercent", step3.discountPercent);

          createAStudio(data._id, formData).then(() => {
            localStorage.removeItem("formSteps1");
            localStorage.removeItem("formSteps2");
            localStorage.removeItem("formSteps3");
            navigate("/");
          });
          console.log(data._id);

          // console.log("confirm: ", step2.studioImages[0] instanceof File);

          // fetch(step2.studioImages[0])
          //   .then((res) => res.blob())
          //   .then((myBlob) => {
          //     console.log("reading BOB", myBlob);
          //     // logs: Blob { size: 1024, type: "image/jpeg" }
          //   });
        }}
      >
        Publish Now
      </GlobalButton>
    );
  }
};
