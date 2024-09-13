import { FC } from "react";
import pic from "../../../assets/jpg/suit.jpeg";
import { useSingleUser } from "../../../hooks/userHooks";
import moment from "moment";
import { useParams } from "react-router-dom";
import { singleStudioHooks } from "../../../hooks/studioHooks";
import { studioReviewHooks } from "../../../hooks/reviewHooks";
import { MdDelete } from "react-icons/md";
import { deleteReeviews } from "../../../api/reviewAPI";

interface iProps {
  props?: any;
}

const UserReviews: FC<iProps> = ({ props }) => {
  const { userID } = useParams();
  const { singleUser } = useSingleUser(userID!);
  const { studioReview } = studioReviewHooks(props);

  return (
    <div>
      {studioReview?.studioReview.length > 0 ? (
        <div>
          {studioReview?.studioReview?.map((el: any) => (
            <div className="w-[full]  h-[fit-content] border-[1px] border-[lightgrey] rounded-xl p-[20px] flex flex-col gap-14">
              <div className="text-[12px] md:text-[14px]  ">{el?.review}</div>
              <div className="flex gap-2">
                <div className=" w-[50px] h-[50px] object-cover">
                  {singleUser?.avatar ? (
                    <img
                      src={pic}
                      className="w-[100%] h-[100%] rounded-[50%] object-cover"
                      alt=""
                    />
                  ) : (
                    <div
                      className="w-[100%] h-[100%] rounded-[50%] flex justify-center items-center text-white text-[20px] "
                      style={{ background: "var(--gradient)" }}
                    >
                      {singleUser?.firstName?.charAt(0)}
                    </div>
                  )}
                </div>
                <div className="w-[200px] ">
                  <div className=" font-semibold text-[black] text-[18px]">
                    {singleUser?.firstName} {singleUser?.lastName}
                  </div>
                  <span className="text-[14px] w-full">
                    {moment(el?.createdAt).format("LL")}
                  </span>
                </div>
                <MdDelete
                  className="text-red-700 text-[20px] cursor-pointer"
                  onClick={() => {
                    deleteReeviews(userID!, props, el._pd);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div>No Review Yet</div>
        </div>
      )}
    </div>
  );
};

export default UserReviews;
