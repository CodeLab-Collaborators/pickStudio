import { Link } from "react-router-dom";
import { PiSwimmingPool, PiCookingPot, PiShirtFolded } from "react-icons/pi";
import { IoIosFilm } from "react-icons/io";
import { FaGamepad, FaMusic, FaPhotoVideo, FaPodcast } from "react-icons/fa";
import { MdAnimation } from "react-icons/md";

const CategoryProps = () => {
  const studioCategories = [
    { name: "Film Production", icon: <IoIosFilm /> },
    { name: "Music Recording", icon: <FaMusic /> },
    { name: "Game Development", icon: <FaGamepad /> },
    { name: "Photography Studio", icon: <FaPhotoVideo /> },
    { name: "Dance Studio", icon: <MdAnimation /> },
    { name: "Cooking Studio", icon: <PiCookingPot /> },
    { name: "Fashion Studio", icon: <PiShirtFolded /> },
    { name: "Podcast Studio", icon: <FaPodcast /> },
  ];
  return (
    <>
      {studioCategories.map((props: any) => (
        <Link to={`/category/${props.name}`} key={props}>
          <div className="text-[13px] font-semibold h-[80px] text-gray-500 hover:text-black flex items-center cursor-pointer ">
            <div className="flex flex-col justify-center gap-1 h-[50px]">
              <div className="text-[22px] flex justify-center">
                {" "}
                {props.icon}
              </div>
              <div style={{ whiteSpace: "nowrap" }} className="text-center">
                {props.name}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default CategoryProps;
