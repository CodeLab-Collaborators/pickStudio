import { Link } from "react-scroll";

const ProductHeader = () => {
  return (
    <div className="w-full fadeIn border-b z-50 ease-in transition-all fixed top-0 bg-white  h-[10vh] max-md:h-[7vh] ">
      <div className="w-[90%] h-full m-auto flex  justify-between place-items-center">
        <nav className="flex gap-5 font-medium items-center justify-center">
          <Link
            to="photos"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
            // onSetActive={handleSetActive}
          >
            <p className="max-md:text-sm cursor-pointer text-gray-700 hover:text-black active:font-semibold ease-in transition-all py-5">
              Photos
            </p>
          </Link>
          <Link
            to="features"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
            // onSetActive={handleSetActive}
          >
            <p className="max-md:text-sm  cursor-pointer text-gray-700 hover:text-black active:font-semibold ease-in transition-all py-5">
              Features
            </p>
          </Link>
          <Link
            to="reviews"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
            // onSetActive={handleSetActive}
          >
            <p className="max-md:text-sm  cursor-pointer text-gray-700 hover:text-black active:font-semibold ease-in transition-all py-5">
              Reviews
            </p>
          </Link>
        </nav>

        <div></div>
      </div>
    </div>
  );
};

export default ProductHeader;
