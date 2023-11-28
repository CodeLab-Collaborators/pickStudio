import { useState, useEffect } from "react";
import { useFormSteps2 } from "../../../global/globalState";

const StudioFeatures = () => {
  const [formStep2, setFormStep2]: any = useFormSteps2();
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [uploadStudioData, setUploadStudioData] = useState(() => {
    const storedData = localStorage.getItem("uploadStudioData");
    return storedData ? JSON.parse(storedData) : {};
  });

  // List of studio features
  const studioFeatures = [
    "Specialized equipment",
    "Production and editing facilities",
    "Flexible space layout",
    "Proper lighting",
    "HVAC systems",
    "Comfortable seating",
    "Workstations or desks",
    "Waiting areas or lounge spaces",
    "Technical support",
    "Rental services",
    "Surveillance or security systems",
    "High-speed internet access",
    "Digital platform integration",
    "Power outlets",
    "Storage spaces",
    "Accessibility features",
    "Aesthetic considerations",
    "Meeting rooms or collaborative spaces",
  ];

  // Update uploadStudioData state when localStorage changes
  useEffect(() => {
    const storedData = localStorage.getItem("uploadStudioData");

    if (storedData) {
      setUploadStudioData(JSON.parse(storedData));
    }
  }, []);

  // Handle feature selection
  const handleFeatureClick = (feature: string) => {
    const isSelected = selectedFeatures.includes(feature);

    if (isSelected) {
      setSelectedFeatures((prevSelectedFeatures) =>
        prevSelectedFeatures.filter(
          (selectedFeature) => selectedFeature !== feature
        )
      );
    } else {
      setSelectedFeatures((prevSelectedFeatures) => [
        ...prevSelectedFeatures,
        feature,
      ]);

      return selectedFeatures;
    }

    // Update uploadStudioData with the selected features
    // setUploadStudioData((prevData: string[]) => ({
    //   ...prevData,
    //   studioFeatures: selectedFeatures,
    // }));
  };

  // Save uploadStudioData to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("uploadStudioData", JSON.stringify(uploadStudioData));
  }, [uploadStudioData]);

  return (
    <div>
      <h1 className="mt-7 font-semibold text-2xl max-md:text-lg">
        Select Features Studio Can Offer
      </h1>

      <div className="mt-4">
        {studioFeatures.map((feature) => (
          <button
            key={feature}
            className={`${
              selectedFeatures.includes(feature)
                ? "bg-[var(--primary)] text-white "
                : "bg-gray-200 text-black"
            } p-2 m-2 rounded font-normal`}
            onClick={() => {
              handleFeatureClick(feature)!;
              // setSelectedFeatures(selectedFeatures);

              let dataForm = {
                ...formStep2,
                studioFeatures: selectedFeatures,
              };
              setFormStep2(dataForm);
            }}
          >
            {feature}
          </button>
        ))}
      </div>

      {/* to see the user selected features */}

      {/* <div>
        <h2>Selected Features:</h2>
        <ul>
          {selectedFeatures.map((selectedFeature) => (
            <li key={selectedFeature}>{selectedFeature}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default StudioFeatures;
