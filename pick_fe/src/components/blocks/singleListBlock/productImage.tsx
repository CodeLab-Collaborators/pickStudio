import { useEffect, useState } from "react";
import { GalleryModal } from "../../modals";
import { singleStudioHooks } from "../../../hooks/studioHooks";
import { useParams } from "react-router-dom";
import { addStudioImages } from "../../../api/studioAPI";
import { userHooks } from "../../../hooks/userHooks";
import { ScaleLoader } from "react-spinners";

const ProductImage = () => {
  const { productID } = useParams();
  const { data } = userHooks();

  const [showGallery, setShowGallery] = useState<boolean>(false);
  const [load, setLoad] = useState<boolean>(false);
  const { singleStudio } = singleStudioHooks(productID!);
  let [upload, setUpload] = useState(false);
  const [selectedFiles, setSelectedFiles]: any = useState(null);

  const toggleGallery = () => {
    setShowGallery(!showGallery);
  };

  const dummyImage = singleStudio?.studioImages;

  const uploadImages = (e: any) => {
    setSelectedFiles(e.target.files);

    setUpload(true);
    setLoad(true);
  };

  const handleUpload = () => {
    const formData = new FormData();

    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("avatar", selectedFiles[i]);
    }

    addStudioImages(data._id, productID!, formData).then((res) => {
      setLoad(false);
    });
  };

  useEffect(() => {
    if (upload) {
      handleUpload();
      setUpload(false);
    }
  }, [upload]);

  let numb = Math.floor(Math.random() * (dummyImage?.length - 1) + 1);

  return (
    <div className="w-full hidden relative md:grid h-[500px] rounded-3xl grid-cols-4 grid-rows-2 gap-2">
      <div className=" rounded-tl-2xl rounded-bl-2xl col-span-2 row-span-2">
        <img
          src={
            dummyImage?.length > 0
              ? dummyImage[0]
              : "https://i.stack.imgur.com/l60Hf.png"
          }
          onClick={toggleGallery}
          className="w-full  cursor-pointer rounded-tl-2xl rounded-bl-2xl h-full object-cover object-top"
        />
      </div>
      <div className="">
        <img
          src={
            dummyImage?.length > 0
              ? dummyImage[
                  Math.floor(Math.random() * (dummyImage?.length - 1) + 1)
                ]
              : "https://i.stack.imgur.com/l60Hf.png"
          }
          className="w-full  h-full object-cover cursor-pointer object-top"
          onClick={toggleGallery}
        />
      </div>
      <div className=" rounded-tr-2xl">
        <img
          src={
            dummyImage?.length > 0
              ? dummyImage[
                  Math.floor(Math.random() * (dummyImage?.length - 1) + 1)
                ]
              : "https://i.stack.imgur.com/l60Hf.png"
          }
          onClick={toggleGallery}
          className="w-full cursor-pointer rounded-tr-2xl h-full object-cover object-top"
        />
      </div>
      <div className=" ">
        <img
          src={
            dummyImage?.length > 0
              ? dummyImage[
                  Math.floor(Math.random() * (dummyImage?.length - 1) + 1)
                ]
              : "https://i.stack.imgur.com/l60Hf.png"
          }
          onClick={toggleGallery}
          className="w-full cursor-pointer h-full object-cover object-top"
        />
      </div>
      <div className="hover:bg-[#000] rounded-br-2xl">
        <img
          src={
            dummyImage?.length > 0
              ? dummyImage[
                  Math.floor(Math.random() * (dummyImage?.length - 1) + 1)
                ]
              : "https://i.stack.imgur.com/l60Hf.png"
          }
          onClick={toggleGallery}
          className="w-full cursor-pointer rounded-br-2xl h-full object-cover object-top"
        />
      </div>
      {data?._id === singleStudio?.accountHolderID && (
        <div>
          {load ? (
            <div className="absolute bottom-[0.45rem] right-5  ">
              <button
                style={{ backgroundColor: "#fff", color: "black" }}
                className="py-[6px] text-sm border border-[#000000c0] rounded-md px-12 font-[400] "
                onClick={() => {
                  setLoad(true);
                  handleUpload();
                }}
              >
                {load && <ScaleLoader color="#8E0629" width={5} height={10} />}
              </button>
            </div>
          ) : (
            <div className="absolute bottom-3 right-5  ">
              <input
                className="hidden"
                type="file"
                multiple
                id="images"
                onChange={uploadImages}
              />
              <label
                htmlFor="images"
                style={{ backgroundColor: "#fff", color: "black" }}
                className="py-[6px] text-sm border border-[#000000c0] rounded-md px-2 font-[400] "
              >
                Add More Images
              </label>
            </div>
          )}
        </div>
      )}

      {showGallery ? <GalleryModal onClose={toggleGallery} /> : null}
    </div>
  );
};

export default ProductImage;
