import { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { useFormSteps2 } from "../../../global/globalState";
import { useDispatch } from "react-redux";
import { addImages } from "../../../global/reduxState";
import { useRecoilState } from "recoil";
import { imageState } from "../../../global/recoil";

const StudioPicturesUpload = () => {
  const dispatch = useDispatch();
  const [state, setState] = useRecoilState(imageState);
  const [formStep2, setFormStep2] = useFormSteps2();
  const [uploadedPictures, setUploadedPictures] = useState<any[]>([]);

  // const [uploadedPicturesViews, setUploadedPicturesViews] = useState<any[]>([]);

  const [fileInputKey, setFileInputKey] = useState(Date.now()); // Key to reset file input

  let studioImages: Array<any> = [];

  const handleFileChange = (e: any) => {
    const files = e.target.files;
    // Ensure at least 5 pictures are selected

    // dispatch(addImages(Object.entries(files)));
    setState(addImages(Object.entries(files)));

    if (files.length < 0) {
      alert("Please upload at least 5 pictures of your studio.");
      return;
    } else {
      for (let i = 0; i < files.length; i++) {
        let save = URL.createObjectURL(files[i]);
        // setUploadedPicturesViews([...uploadedPicturesViews, files[i]]);
        // images.push(save);
        studioImages.push(save);

        // localStorage.setItem("studioImages", JSON.stringify(...studioImages));

        let dataForm = {
          ...formStep2,
          studioImages: studioImages,
        };

        setFormStep2(dataForm);
      }
    }

    // Convert FileList to an array
    const newPictures = Array.from(files);

    // Update state with new pictures
    setUploadedPictures((prevPictures) => [...prevPictures, ...newPictures]);
    // Save the updated pictures in local storage
    const storedData = localStorage.getItem("uploadStudioData");

    const existingData = storedData ? JSON.parse(storedData) : {};

    localStorage.setItem(
      "uploadStudioData",
      JSON.stringify({
        ...existingData,
        studioPictures: [
          ...(existingData.studioPictures || []),
          ...newPictures.map((pic: any) => URL.createObjectURL(pic)),
        ],
      })
    );

    // Reset the file input to allow multiple uploads
    setFileInputKey(Date.now());

    const storedImageData = JSON.parse(
      localStorage.getItem("storedImageData")!
    );
    const myFiles = Object.values(files);
    localStorage.setItem(
      "storedImageData",
      JSON.stringify({ ...storedImageData!, myFiles })
    );
  };

  // ...storedImageData,
  const handleRemovePicture = (index: any) => {
    // Remove picture at the specified index
    setUploadedPictures((prevPictures) => [
      ...prevPictures.slice(0, index),
      ...prevPictures.slice(index + 1),
    ]);

    let dataForm = {
      ...formStep2,
      uploadedPictures,
    };

    setFormStep2(dataForm);
  };

  return (
    <div className="">
      <h1 className="mt-7 font-semibold text-2xl max-md:text-lg">
        Add Some Pictures of Your Studio
      </h1>
      <p className="max-md:hidden text-[#222] text-base font-normal  mt-2 leading-[1.75rem]">
        You'll need 5 photos to get started. You can add more or make changes
        later.
      </p>

      <div className="flex items-center justify-center  w-full mt-4">
        {/* only show upload if there are no pictures uploaded */}
        {uploadedPictures.length === 0 && (
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 max-md:h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <p className="text-5xl text-gray-300">
                <AiOutlineCloudUpload />
              </p>
              <p
                className="mb-2 text-sm text-gray-500 dark:text-gray-400 font-semibold "
                aria-hidden="true"
              >
                Click to upload photos
              </p>
              <span className="sr-only" id="file-upload-label">
                Upload your studio photos
              </span>
            </div>

            <input
              id="dropzone-file"
              type="file"
              accept="image/*"
              multiple
              key={fileInputKey}
              onChange={handleFileChange}
              className="hidden"
              aria-labelledby="file-upload-label"
            />
          </label>
        )}
      </div>

      <div>
        <div className="grid grid-cols-2 gap-4">
          {uploadedPictures.length > 0 &&
            uploadedPictures.map((pic, index) => (
              <div
                key={index}
                className={`${
                  index === 0 ? "col-span-2" : ""
                } bg-slate-50 flex justify-center items-center flex-col mt-3 relative`}
              >
                <img
                  src={URL.createObjectURL(pic)}
                  alt={`Uploaded ${index + 1}`}
                  className="max-w-full h-[250px] max-md:h-[150px]"
                />
                <button
                  className="absolute top-3 left-3 text-red-500 text-2xl"
                  onClick={() => handleRemovePicture(index)}
                >
                  <TiDeleteOutline />
                </button>
              </div>
            ))}

          {/* upload more pictures */}
          {uploadedPictures.length > 0 && (
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 max-md:h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <p className="text-5xl text-gray-300">
                  <AiOutlineCloudUpload />
                </p>
                <p
                  className="mb-2 text-sm text-gray-500 dark:text-gray-400 font-semibold "
                  aria-hidden="true"
                >
                  Click to upload more photos
                </p>
              </div>

              <input
                id="dropzone-file"
                type="file"
                accept="image/*"
                multiple
                key={fileInputKey}
                onChange={handleFileChange}
                className="hidden"
                aria-labelledby="file-upload-label"
              />
            </label>
          )}
        </div>
        {/* {uploadedPictures.length === 0 && <p>No pictures uploaded yet.</p>} */}
      </div>
    </div>
  );
};

export default StudioPicturesUpload;
