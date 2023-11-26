import { FC } from "react";
import pic from "../../../assets/jpg/suit.jpeg";
import { useSingleUser } from "../../../hooks/userHooks";
import moment from "moment";

interface iProps {
  props: any;
}

const UserReviews: FC<iProps> = ({ props }) => {
  const { singleUser } = useSingleUser(props?.accountID);
  return (
    <div>
      <div className="w-[full]  h-[fit-content] border-[1px] border-[lightgrey] rounded-xl p-[20px] flex flex-col gap-14">
        <div className="text-[14px] md:text-[18px]">{props?.review}</div>
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
              {moment(props?.createdAt).format("LL")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReviews;
