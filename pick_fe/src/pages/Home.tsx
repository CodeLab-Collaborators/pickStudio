import { ProductProps } from "../components";
import img1 from "../assets/studio/1.jpg";
import img2 from "../assets/studio/2.jpg";
import img3 from "../assets/studio/4.jpg";
import img4 from "../assets/studio/5.jpg";

import profile from "../assets/jpg/profile.jpeg";
import { studioHooks } from "../hooks/studioHooks";
import moment from "moment";
import DoorDashFavorite from "../components/props/Loader";
import { useLocation } from "react-router-dom";

const Home = () => {
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
  console.log();

  // console.log(Math.floor(Math.random() * dummyImage.length));

  const { allStudio, isLoading } = studioHooks();

  return (
    <div className="w-full m-auto grid gap-6 place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {isLoading && Array.from({ length: 8 }, () => <DoorDashFavorite />)}
      {allStudio?.map((props: any, i: number) => (
        <ProductProps
          props={props}
          key={`${i}`}
          cover={
            props.studioImages.length > 0 ? props.studioImages : dummyImage
          }
          authorCover={profile}
          authorName={props.studioName}
          place={props.studioName}
          rating={props.studioRate}
          amount={props.studioPrice.toLocaleString()}
          amountHourly={props?.studioPriceDaily?.toLocaleString()}
          date={`${moment(props.createdAt).fromNow()}`}
          route={`/products/${props._id}`}
          userRoute={`/user/${props.accountHolderID}`}
          wishlistFunc={() => {}}
        />
      ))}
    </div>
  );
};

export default Home;
