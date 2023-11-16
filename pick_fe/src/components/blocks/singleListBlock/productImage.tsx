import img1 from "../../../assets/jpg/Menstylica.jpeg";
import img2 from "../../../assets/jpg/suit.jpeg";
import img3 from "../../../assets/jpg/SHOES.jpeg";
import img4 from "../../../assets/jpg/INSTASHOP.jpeg";

const ProductImage = () => {
  const dummyImage = [img1, img3, img4, img2];

  return (
    <div className="w-full hidden md:grid h-[350px] rounded-3xl grid-cols-4 grid-rows-2 gap-2">
      <div className=" rounded-tl-2xl rounded-bl-2xl col-span-2 row-span-2">
        <img
          src={dummyImage[3]}
          className="w-full  rounded-tl-2xl rounded-bl-2xl h-full object-cover object-top"
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
      <div className=" rounded-br-2xl">
        <img
          src={dummyImage[0]}
          className="w-full rounded-br-2xl h-full object-cover object-top"
        />
      </div>
    </div>
  );
};

export default ProductImage;
