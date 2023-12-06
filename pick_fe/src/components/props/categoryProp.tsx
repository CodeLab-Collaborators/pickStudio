import { Link } from "react-router-dom";
import { LuListMusic } from "react-icons/lu";

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
  ];
  return (
    <div className="w-[90%] m-[auto] h-full flex gap-10 items-center  overflow-y-scroll no-scrollbar">
      {studioCategories.map((props: any) => (
        <Link to={`/category/${props}`} key={props}>
          <div className="flex font-normal text-sm flex-col items-center gap-3 text-gray-500 hover:text-gray-900 ease-in transition-all">
            {/* icon */}
            <div className="text-2xl">
              <LuListMusic />
            </div>
            <span className="capitalize whitespace-nowrap font-medium">
              {props}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryProps;
