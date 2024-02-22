import { FC, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { GlobalButton } from "../..";
import { createAStudio } from "../../../api/studioAPI";
import { userHooks } from "../../../hooks/userHooks";

export const RenderButtonCheck: FC = () => {
  const navigate = useNavigate();
  const { data } = userHooks();
  const formData = new FormData();

  const location = useLocation();

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
          className="font-semibold"
        >
          Get started
        </GlobalButton>
      </NavLink>
    );
  } else if (location.pathname.includes("about-your-studio")) {
    return (
      // about studio page
      <NavLink to={firstStepButtonDisabled ? "" : "studio-details"}>
        <GlobalButton
          // disabled={!firstStepButtonDisabled}
          className={`${
            firstStepButtonDisabled
              ? "opacity-50 cursor-not-allowed"
              : "bg-red-600  transition-all ease-in"
          }`}
          style={{
            background: `${
              !firstStepButtonDisabled ? "var(--gradient)" : "var(--primary)"
            }`,
          }}
          onClick={() => {
            // setFormStep(uploadStudioData);
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
          style={{ background: "var(--gradient)" }}
          className="font-semibold z-100 "
          onClick={() => {
            // setFormStep(uploadStudioData);
          }}
        >
          Next
        </GlobalButton>
      </NavLink>
    );
  } else if (location.pathname.includes("upload-studio-images")) {
    return (
      // studio details
      <NavLink to="finish-listing">
        <GlobalButton
          style={{ background: "var(--gradient)" }}
          className="font-semibold z-100 "
          onClick={() => {
            // setFormStep(uploadStudioData);
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
          onClick={() => {}}
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

          formData.append("studioName", step2.studioName);
          formData.append("studioCategory", step1.selectedStudioCategory);
          formData.append("studioAddress", step1.studioAddress);
          formData.append("studioDescription", step2.studioDescription);
          formData.append("studioFeatures", step2.studioFeatures);
          formData.append("studioPrice", step3.studioPrice);
          formData.append("studioPriceDaily", step3.studioPriceHourly);
          formData.append("numberOfGuess", step1.numberOfGuests);
          formData.append(
            "includeDiscount",
            `${step3.includeDiscount ? step3.includeDiscount : false}`
          );
          formData.append(
            "discountPercent",
            `${step3.discountPercent ? step3.discountPercent : "0"}`
          );

          createAStudio(data?._id, formData).then((res) => {
            localStorage.removeItem("formSteps1");
            localStorage.removeItem("formSteps2");
            localStorage.removeItem("formSteps3");
            localStorage.removeItem("step4");

            navigate(`/products/${res._id}`);
          });
        }}
      >
        Publish Now
      </GlobalButton>
    );
  }
};
