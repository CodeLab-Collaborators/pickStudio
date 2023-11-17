import img1 from "../../../assets/jpg/Menstylica.jpeg";
import img2 from "../../../assets/jpg/suit.jpeg";
import img3 from "../../../assets/jpg/SHOES.jpeg";
import img4 from "../../../assets/jpg/INSTASHOP.jpeg";
import { GlobalButton } from "../..";

const ProductImage = () => {
  const dummyImage = [img1, img3, img4, img2];

  return (
    <div className="w-full hidden relative md:grid h-[430px] rounded-3xl grid-cols-4 grid-rows-2 gap-2">
      <div className=" rounded-tl-2xl rounded-bl-2xl col-span-2 row-span-2">
        <img
          src={dummyImage[3]}
          className="w-full   rounded-tl-2xl rounded-bl-2xl h-full object-cover object-top"
        />
      </div>
      <div className="">
        <img
          src={dummyImage[1]}
          className="w-full h-full object-cover object-top"
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
          style={{ backgroundColor: "#fff" }}
          className="py-[6px] text-[#000000d1] text-sm border border-[#000000c0]"
        >
          Show all photos
        </GlobalButton>
      </div>
    </div>
  );
};

export default ProductImage;
