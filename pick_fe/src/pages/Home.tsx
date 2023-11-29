import { ProductProps } from "../components";
import img1 from "../assets/jpg/Menstylica.jpeg";
import img2 from "../assets/jpg/suit.jpeg";
import img3 from "../assets/jpg/SHOES.jpeg";
import img4 from "../assets/jpg/INSTASHOP.jpeg";
import profile from "../assets/jpg/profile.jpeg";
import { studioHooks } from "../hooks/studioHooks";
import moment from "moment";
import DoorDashFavorite from "../components/props/Loader";
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

  const { allStudio, isLoading } = studioHooks();

  return (
    <div className="w-full m-auto grid gap-6 place-items-center grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:w-full">
      {isLoading && Array.from({ length: 5 }, () => <DoorDashFavorite />)}
      {allStudio?.map((props: any, i: number) => (
        <ProductProps
          props={props}
          key={`${i}`}
          cover={dummyImage}
          authorCover={profile}
          authorName={props.studioName}
          place={props.studioName}
          rating={props.studioRate}
          amount={props.studioPrice}
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
