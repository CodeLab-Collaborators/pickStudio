import { FC, useState } from "react";
import { ProductProps } from "../components";
import profile from "../assets/jpg/profile.jpeg";
import { getSigninAccount } from "../api/authAPI";
import { useEffect } from "react";
import { FcMusic } from "react-icons/fc";
import { searchStudioHooks } from "../hooks/studioHooks";
import { useParams } from "react-router-dom";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { changeCategoryToggle } from "../global/reduxState";
import { TbTimeDuration15 } from "react-icons/tb";
import LoadingScreen from "../components/static/LoadingScreen";
import { FaCheckDouble } from "react-icons/fa";
import { mutate } from "swr";

const Categories: FC = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state: any) => state.toggleCategory);

  useEffect(() => {
    getSigninAccount().then((res) => {});
  }, []);
  const { studio } = useParams();
  const { viewSearchStudio } = searchStudioHooks(studio!);

  document.title = `${studio} - Pickastudio`;

  const [studioStateData, setStudioStateData] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStudioStateData(viewSearchStudio);

      clearTimeout(timer);
    }, 0);

    const timer1 = setTimeout(() => {
      dispatch(changeCategoryToggle(false));
      clearTimeout(timer1);
    }, 0);

    mutate(`view-search-studio/${studio}`);
  }, [viewSearchStudio?.length]);

  return (
    <div>
      {/* category title */}
      <div className="py-5 border-b flex items-center gap-2">
        <h2 className="text-3xl font-bold">
          <FcMusic />
        </h2>
        <h4 className="text-[20px] font-bold">Studio for {studio} Category </h4>
      </div>

      <div>
        {toggle ? (
          <div>
            <LoadingScreen />
          </div>
        ) : (
          <div className="flex">
            {studioStateData?.length > 0 ? (
              <div className="w-full mt-6 m-auto grid gap-6 place-items-center grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:w-full">
                {studioStateData?.map((props: any) => (
                  <div key={props?._id}>
                    <ProductProps
                      props={props!}
                      cover={props?.studioImages}
                      authorCover={profile}
                      authorName="Eloy"
                      place={props?.studioName}
                      rating={props?.studioRate}
                      amount={props?.studioPrice?.toLocaleString()}
                      amountHourly={props?.studioPriceDaily?.toLocaleString()}
                      date={moment(props?.createdAt).format("LLL")}
                      route={`/products/${props?._id}`}
                      userRoute="/user"
                      wishlistFunc={() => {}}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center w-full mt-20">
                <p>No Studio in this Category Yet</p>
                <FaCheckDouble />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
