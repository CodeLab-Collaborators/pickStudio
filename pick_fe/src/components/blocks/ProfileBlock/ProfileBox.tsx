import avatar from "../../../assets/jpg/suit.jpeg";
import { BsPatchCheckFill } from "react-icons/bs";

const ProfileBox = () => {
  return (
    <div className="w-full h-[250px]  border-[1px] bg-white rounded-3xl shadow-xl">
      <div className=" w-full h-full flex justify-center items-center flex-col">
        <div className=" w-[120px] h-[120px] rounded-[50%]  relative ">
          <img
            className="w-[100%] h-[100%] object-cover object-top rounded-full "
            src={avatar}
            alt="studio name"
          />

          <div className="w-[40px] h-[40px] text-3xl bg-[var(--primary)] flex items-center justify-center rounded-[50%] absolute  right-0  bottom-0 text-white">
            <BsPatchCheckFill  />
          </div>
        </div>

        <div className=" font-bold text-[30px]">Isaac Etor</div>
        <p className=" font-semibold ">category: (event center)</p>
      </div>
    </div>
  );
};

export default ProfileBox;
