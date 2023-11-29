import { GlobalButton } from "../..";
import { useEffect, useState } from "react";
import { GalleryModal } from "../../modals";
import { singleStudioHooks } from "../../../hooks/studioHooks";
import { useParams } from "react-router-dom";
import { addStudioImages } from "../../../api/studioAPI";
import { userHooks } from "../../../hooks/userHooks";

const ProductImage = () => {
  const { productID } = useParams();
  const { data } = userHooks();
  const [showGallery, setShowGallery] = useState<boolean>(false);
  const [imagesData, setImagesData]: any = useState<Array<any>>([]);
  const { singleStudio } = singleStudioHooks(productID!);

  const formData = new FormData();

  let [upload, setUpload] = useState(false);
  let [uploadImage, setUploadImage]: any = useState([]);

  const toggleGallery = () => {
    setShowGallery(!showGallery);
  };

  const dummyImage = singleStudio?.studioImages;

  const uploadImages = async (e: any) => {
    let file = e.target.files;
    setImagesData(Object.entries(file));
    let image: any = [];

    console.log(file);

    for (let i = 0; i < file.length; i++) {
      setUploadImage([...uploadImage, file[i]]);

      image.push(file[i]);

      console.log(i);
      if (file.length) {
        setUpload(true);
      }
    }
    console.log(image);
    formData.append("avatar", image);
  };

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

      {upload ? (
        <div className="absolute bottom-3 right-5  ">
          {/* <input
            className="hidden"
            type="file"
            multiple
            id="images"
            onChange={uploadImages}
          /> */}
          <label
            htmlFor="images"
            style={{ backgroundColor: "#fff", color: "black" }}
            className="py-[6px] text-sm border border-[#000000c0] rounded-md px-2 font-[400] "
            onClick={() => {
              addStudioImages(data._id, productID!, formData).then((res) => {
                setUpload(false);
                console.log("done", res);
              });
            }}
          >
            upload Images
          </label>
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

      {showGallery ? <GalleryModal onClose={toggleGallery} /> : null}
    </div>
  );
};

export default ProductImage;
