import { BsPatchCheckFill } from "react-icons/bs";
import { userHooks } from "../../../hooks/userHooks";

const ProfileBox = () => {
  const { data } = userHooks();
  return (
    <div className="w-full h-[250px]  border-[1px] bg-white rounded-3xl shadow-xl">
      <div className=" w-full h-full flex justify-center items-center flex-col">
        <div className=" w-[120px] h-[120px] rounded-[50%]  relative ">
          {data?.avatar ? (
            <img
              className="w-[100%] h-[100%] object-cover object-top rounded-full "
              src={data?.avatar}
              alt="studio name"
            />
          ) : (
            <div
              className="w-[100%] h-[100%]  text-white flex justify-center items-center text-[70px] object-cover object-top rounded-full "
              style={{ background: "var(--gradient)" }}
            >
              {data?.firstName?.charAt(0)}
            </div>
          )}

          <div className="w-[40px] h-[40px] text-3xl bg-[var(--primary)] flex items-center justify-center rounded-[50%] absolute  right-0  bottom-0 text-white">
            <BsPatchCheckFill />
          </div>
        </div>

        <div className=" font-bold text-[30px]">
          {data?.firstName} {data?.lastName}
        </div>
        <p className=" font-semibold ">
          Profession: ({data?.profession ? data?.profession : "Artist"})
        </p>
      </div>
    </div>
  );
};

export default ProfileBox;
