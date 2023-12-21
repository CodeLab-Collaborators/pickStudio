import { IoMdClose } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { GalleryImages } from "../blocks";

const GalleryModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div>
      <div className="fixed  inset-0 bg-[#fff]  z-50 ">
        {/* header */}
        <div className="w-full px-8 h-[7vh] flex justify-between items-center">
          <p onClick={onClose} className="cursor-pointer">
            <IoMdClose />
          </p>

          <div className="flex gap-6 justify-center  font-semibold  underline">
            <p className="flex cursor-pointer justify-center items-center gap-2 ">
              <p className="text-sm mt-1">
                {" "}
                <FaRegHeart />{" "}
              </p>
              Save
            </p>
          </div>
        </div>

        {/* gallery */}
        <div className="px-8 pb-20  w-full h-full overflow-y-scroll ">
          <GalleryImages />
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
