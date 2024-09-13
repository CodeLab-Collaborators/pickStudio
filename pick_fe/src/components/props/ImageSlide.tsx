import { useState, FC } from "react";
import { PiHeartDuotone } from "react-icons/pi";

import { imageData } from "../../types";
import { Link, useLocation } from "react-router-dom";
import { useSingleUser, userHooks } from "../../hooks/userHooks";
import { MdDelete } from "react-icons/md";
import { createBookMark, removeBookMark } from "../../api/bookMarkAPI";
import { data } from "../layouts/InboxLayout";

const ImageSLide: FC<imageData> = ({
  cover,
  route,
  userRoute,
  wishlistFunc,
  props,
  currentImageIndex,
}) => {
  const { pathname } = useLocation();
  const { data } = userHooks();

  const { singleUser } = useSingleUser(props?.accountHolderID);
  const [show, setShow] = useState(false);

  return (
    <div
      onMouseOver={() => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
      className="relative w-full h-[285px] rounded-2xl"
    >
      {/* wishlist */}
      {/* <Link to={userRoute}> */}
      <div className={`${pathname === "/wishlists" ? "" : "hidden"}`}>
        <div
          className="absolute cursor-pointer text-white shadow-md text-2xl top-3 left-3 transition-all ease-in duration-75 "
          onClick={() => {
            removeBookMark(data?._id, props?._id);
          }}
        >
          <MdDelete
            className={`${pathname === "/wishlists" ? "opacity-70" : ""}`}
          />
        </div>
      </div>
      {/* Create a bookmark listing with this: */}

      {/* <div
        className="absolute cursor-pointer text-white shadow-md hover:text-[var(--primary)] text-2xl top-3 right-3 transition-all ease-in duration-75 z-40"
        onClick={() => {
          if (data) {
            createBookMark(data?._id, props?._id);
          }
        }}
      >
        <PiHeartDuotone
          className={`${pathname === "/wishlists" ? "text-red-600" : ""}`}
        />
      </div> */}

      {/* image slide */}
      {/* <Link to={route}> */}
      <img
        className="w-full h-full rounded-2xl object-cover object-top transition-all ease-in duration-500 max-sm:rounded-none"
        src={cover[currentImageIndex!]}
      />

      {/* Safe Area */}

      {/* </Link> */}
      {/* link to individual author page */}

      <div className="absolute w-14 h-14 bottom-3 left-3">
        {singleUser?.avatar ? (
          <img
            className="w-full h-full object-cover object-top shadow-2xl rounded-full  "
            src={singleUser?.avatar}
          />
        ) : (
          <div
            className="w-full h-full object-cover object-top shadow-2xl rounded-full flex justify-center items-center text-white text-[20px]  "
            style={{ background: "var(--gradient)" }}
          >
            {singleUser?.firstName?.charAt(0)}
          </div>
        )}
      </div>
      {/* </Link> */}
    </div>
  );
};

export default ImageSLide;
