import { Link } from "react-router-dom";
import   {PiSwimmingPool} from "react-icons/pi";

const CategoryProps = () => {
  const studioCategories = [
    "Film Production",
    "Music Recording",
    "Game Development",
    "Photography",
    "Dance",
    "Visual Arts",
    "Cooking",
    "Fashion",
    "Radio",
    "Virtual Production",
    "Photography",
    "Dance",
    "Visual Arts",
    "Cooking",
    "Fashion",
    "Radio",
    "Virtual Production",
  ];
  return (

<>
{studioCategories.map((props:any)=>(
  <Link to={`/category/${props}`} key={props}>

  <div className="text-[13px] font-semibold h-[80px] text-gray-500 hover:text-black flex items-center cursor-pointer ">
  <div className="flex flex-col justify-center gap-1 h-[50px]">
    <div className="text-[22px] flex justify-center"> <PiSwimmingPool /></div>
    <div style={{ whiteSpace: "nowrap" }} className="text-center">
      {props}
    </div>
  </div>
  </div>
  </Link>
))}
</>
  );
};

export default CategoryProps;
