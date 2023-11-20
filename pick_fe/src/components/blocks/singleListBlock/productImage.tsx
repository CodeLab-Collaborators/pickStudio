import img1 from "../../../assets/jpg/Menstylica.jpeg";
import img2 from "../../../assets/jpg/suit.jpeg";
import img3 from "../../../assets/jpg/SHOES.jpeg";
import img4 from "../../../assets/jpg/INSTASHOP.jpeg";
import { GlobalButton } from "../..";
import { useState } from "react";
import { GalleryModal } from "../../modals";

const ProductImage = () => {
const [showGallery, setShowGallery] = useState<boolean>(false)

const toggleGallery = ()=>{
  setShowGallery(!showGallery)
}

  const dummyImage = [img1, img3, img4, img2];

  return (
    <div className="w-full hidden relative md:grid h-[500px] rounded-3xl grid-cols-4 grid-rows-2 gap-2">
      <div className=" rounded-tl-2xl rounded-bl-2xl col-span-2 row-span-2">
        <img
          src={dummyImage[3]}
          className="w-full   rounded-tl-2xl rounded-bl-2xl h-full object-cover object-top"
        />
      </div>
      <div className="">
        <img
          src={dummyImage[1]}
          className="w-full h-full object-cover cursor-pointer object-top"
          onClick={toggleGallery}
        />
      </div>
      <div className=" rounded-tr-2xl">
        <img
          src={dummyImage[2]}
          className="w-full rounded-tr-2xl h-full object-cover object-top"
        />
      </div>
      <div className=" ">
        <img
          src={dummyImage[4]}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="hover:bg-[#000] rounded-br-2xl">
        <img
          src={dummyImage[0]}
          className="w-full  rounded-br-2xl h-full object-cover object-top"
        />
      </div>
      <div className="absolute bottom-3 right-5  ">
        <GlobalButton
          style={{ backgroundColor: "#fff", color: "black" }}
          className="py-[6px] text-sm border border-[#000000c0]"
          onClick={toggleGallery}
        >
          Show all photos
        </GlobalButton>
      </div>

      {showGallery ? <GalleryModal onClose={toggleGallery}/> : null }
    </div>
  );
};

export default ProductImage;
