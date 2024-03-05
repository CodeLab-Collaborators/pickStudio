import { ProductProps } from "../components";
import img1 from "../assets/studio/1.jpg";
import img2 from "../assets/studio/2.jpg";
import img3 from "../assets/studio/4.jpg";
import img4 from "../assets/studio/5.jpg";

import profile from "../assets/jpg/profile.jpeg";
import { singleStudioHooks, studioHooks } from "../hooks/studioHooks";
import moment from "moment";
import DoorDashFavorite from "../components/props/Loader";
import { useLocation } from "react-router-dom";
import { studioBookMarkHooks } from "../hooks/useBookMark";
import { userHooks } from "../hooks/userHooks";
import { FC } from "react";
import { FaCheckDouble } from "react-icons/fa";

interface iProps {
  props?: any;
}

const InnerProduct: FC<iProps> = ({ props }) => {
  //   const
  console.log(props);
  const { singleStudio } = singleStudioHooks(props?.studioID);

  //   console.log("view>>>: ", singleStudio);

  const dummyImage = [
    img1,
    img3,
    img4,
    img2,
    img1,
    img3,
    img4,
    img2,
    img1,
    img3,
    img4,
    img2,
  ];

  return (
    <div>
      <ProductProps
        props={props}
        cover={singleStudio.length > 0 ? singleStudio : dummyImage}
        authorCover={profile}
        authorName={singleStudio.studioName}
        place={singleStudio.studioName}
        rating={singleStudio.studioRate}
        amount={singleStudio.studioPrice.toLocaleString()}
        amountHourly={singleStudio?.studioPriceDaily?.toLocaleString()}
        date={`${moment(singleStudio.createdAt).fromNow()}`}
        route={`/products/${singleStudio._id}`}
        userRoute={`/user/${singleStudio.accountHolderID}`}
        wishlistFunc={() => {}}
      />
    </div>
  );
};

const WishList = () => {
  const { data } = userHooks();
  const { studioBookMark, isLoading } = studioBookMarkHooks(data?._id);

  return (
    <div className="w-full  m-auto grid gap-6 place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {isLoading && Array.from({ length: 8 }, () => <DoorDashFavorite />)}

      {studioBookMark?.bookMark?.length > 0 ? (
        <div>
          {studioBookMark?.bookMark?.map((props: any, i: number) => (
            <div key={props?._id}>
              <InnerProduct props={props} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full absolute left-0 top-72 ">
          <FaCheckDouble />
          <div>No Studio BookMarked yet</div>
        </div>
      )}
    </div>
  );
};

export default WishList;
