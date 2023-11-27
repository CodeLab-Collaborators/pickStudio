import { GlobalButton } from "../..";
import { useState } from "react";
import { GalleryModal } from "../../modals";
import { singleStudioHooks } from "../../../hooks/studioHooks";
import { useParams } from "react-router-dom";

const ProductImage = () => {
  const { productID } = useParams();
  const [showGallery, setShowGallery] = useState<boolean>(false);
  const { singleStudio } = singleStudioHooks(productID!);
  const toggleGallery = () => {
    setShowGallery(!showGallery);
  };

  const dummyImage = singleStudio?.studioImages;

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
              ? dummyImage[1]
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
              ? dummyImage[2]
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
              ? dummyImage[0]
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
              ? dummyImage[1]
              : "https://i.stack.imgur.com/l60Hf.png"
          }
          onClick={toggleGallery}
          className="w-full cursor-pointer rounded-br-2xl h-full object-cover object-top"
        />
      </div>

      <div className="absolute bottom-3 right-5  ">
        <GlobalButton
          style={{ backgroundColor: "#fff", color: "black" }}
          className="py-[6px] text-sm border border-[#000000c0]"
          onClick={toggleGallery}
        >
          Add More Images
        </GlobalButton>
      </div>

      {showGallery ? <GalleryModal onClose={toggleGallery} /> : null}
    </div>
  );
};

export default ProductImage;
