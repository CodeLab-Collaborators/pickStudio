import { Link } from "react-scroll";
import { NavLink, useParams } from "react-router-dom";
import { GlobalButton } from "../..";
import { useEffect, useState } from "react";
import { singleStudioHooks } from "../../../hooks/studioHooks";
import { userHooks } from "../../../hooks/userHooks";

const ProductHeader = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowButton(scrollY >= 1080);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showButton]);

  const { productID } = useParams();
  const { singleStudio }: any = singleStudioHooks(productID!);
  const { data }: any = userHooks();

  return (
    <div className="w-full fadeIn border-b z-50 ease-in transition-all fixed top-0 max-md:bottom-0 max-md:border-t bg-white  h-[10vh] max-md:h-[8vh] ">
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

        <div>
          {showButton && (
            <div>
              {/* {singleStudio?.accountHolderID !== data?._id && (
                <NavLink to={`book-studio`}>
                  <GlobalButton
                    style={{ background: "var(--gradient)" }}
                    className="w-full h-12 font-[500] rounded-lg text-white border-none focus:outline-none"
                  >
                    Book studio
                  </GlobalButton>{" "}
                </NavLink>
              )} */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
