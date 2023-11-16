import { Link } from "react-router-dom";
import { LuListMusic } from "react-icons/lu";

const CategoryProps = () => {
  return (
    <div>
      <Link to="/category">
        <div className="flex font-normal text-sm flex-col items-center gap-3 text-gray-500 hover:text-gray-900 ease-in transition-all">
          {/* icon */}
          <div className="text-2xl">
            <LuListMusic />
          </div>
          <span className="capitalize whitespace-nowrap font-medium">
            music studios
          </span>
        </div>
      </Link>
    </div>
  );
};

export default CategoryProps;
