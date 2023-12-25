import { useEffect, useRef, useState } from "react";
import { FaGreaterThan } from "react-icons/fa6";
import pix from "../assets/pix.jpg";

import pix1 from "../assets/1.jpg";
import pix2 from "../assets/2.jpg";
import pix3 from "../assets/3.jpg";
import pix4 from "../assets/4.jpg";
import pix5 from "../assets/5.jpg";

const Component = () => {
  const dotRef: React.MutableRefObject<any> = useRef();
  const dotRef1: React.MutableRefObject<any> = useRef();
  const dotRef2: React.MutableRefObject<any> = useRef();
  const dotRef3: React.MutableRefObject<any> = useRef();
  const dotRef4: React.MutableRefObject<any> = useRef();
  const dotRef5: React.MutableRefObject<any> = useRef();

  // const [state, setState] = useState<number>(1);
  const [count, setCount] = useState<number>(1);

  let images = [pix, pix1, pix2, pix3, pix4, pix5];
  const myColor = [
    "#d2d1d1",
    "#f4f4f4",
    "#f4f4f4",
    "#f4f4f4",
    "#f4f4f4",
    "#f4f4f4",
  ];
  const myColor1 = ["white", "#a9a8a8", "white", "white", "white", "white"];
  const myColor2 = ["white", "white", "#a9a8a8", "white", "white", "white"];
  const myColor3 = ["white", "white", "white", "#a9a8a8", "white", "white"];
  const myColor4 = ["white", "white", "white", "white", "#a9a8a8", "white"];
  const myColor5 = ["white", "white", "white", "white", "white", "#a9a8a8"];

  useEffect(() => {
    dotRef.current!.style.backgroundColor = myColor[count % myColor.length];
    dotRef.current!.style.transition = "all 350ms";

    dotRef1.current!.style.backgroundColor = myColor1[count % myColor.length];
    dotRef1.current!.style.transition = "all 350ms";

    dotRef2.current.style.backgroundColor = myColor2[count % myColor2.length];
    dotRef2.current.style.transition = "all 350ms";

    dotRef3.current.style.backgroundColor = myColor3[count % myColor2.length];
    dotRef3.current.style.transition = "all 350ms";

    dotRef4.current.style.backgroundColor = myColor4[count % myColor2.length];
    dotRef4.current.style.transition = "all 350ms";

    dotRef5.current.style.backgroundColor = myColor5[count % myColor2.length];
    dotRef5.current.style.transition = "all 350ms";
  }, [count]);

  const increase = () => {
    setCount((el) => el + 1);
  };

  const decrease = () => {
    if (count > 1) {
      setCount((el) => el - 1);
    } else if (count === 1) {
      setCount(images.length - 1);
    }
  };

  useEffect(() => {
    decrease();
    increase();
  }, []);

  return (
    <div>
      <div
        className={`
       min-h-[450px]  rounded-sm
      `}
        style={{
          borderRadius: "5px",
          color: "black",
        }}
      >
        <div className="flex flex-col">
          <div className="w-full min-h-[300px] relative  ">
            <div
              className="w-full h-[300px] absolute opacity-0 hover:opacity-100 transition-all duration-200
              hover:cursor-pointer 
            
            "
            >
              <div
                className="absolute top-[50%] right-1 bg-[rgba(255,255,255,0.8)] p-3 rounded-[50%]  hover:bg-white hover:scale-[1.05] hover:cursor-pointer transition-all duration-300"
                onClick={increase}
              >
                <FaGreaterThan />
              </div>

              <div
                className="absolute top-[50%] left-1 bg-[rgba(255,255,255,0.8)] p-3 rounded-[50%] rotate-180 hover:bg-white hover:scale-[1.05] hover:cursor-pointer transition-all duration-300 "
                onClick={decrease}
              >
                <FaGreaterThan />
              </div>
            </div>
            <img
              src={images[count % images.length]}
              className="w-full h-[320px] object-cover rounded-[15px] transition-all duration-300 "
            />
            <div className="flex absolute bottom-3 left-[50%]">
              <div
                ref={dotRef}
                className="w-[5px] h-[5px]  rounded-[50%] mx-[2px] "
              />
              <div
                ref={dotRef1}
                className="w-[5px] h-[5px]  rounded-[50%] mx-[2px] "
              />
              <div
                ref={dotRef2}
                className="w-[5px] h-[5px]  rounded-[50%] mx-[2px] "
              />
              <div
                ref={dotRef3}
                className="w-[5px] h-[5px]  rounded-[50%] mx-[2px] "
              />
              <div
                ref={dotRef4}
                className="w-[5px] h-[5px]  rounded-[50%] mx-[2px] "
              />
              <div
                ref={dotRef5}
                className="w-[5px] h-[5px]  rounded-[50%] mx-[2px] "
              />
            </div>
          </div>

          <div className="flex justify-between mt-2 ">
            <h2 className="font-bold capitalize text-[17px] ">name</h2>
            <p className="text-gray-500">3 Friends</p>
          </div>

          <span>Profile</span>

          <div className="w-full">
            <button className="mt-4 py-3 px-4 text-[15px] text-white bg-purple-600 rounded-sm ">
              Add Friend
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomeScreen = () => {
  return (
    <div>
      {/* <div className="fixed ml-4 z-10 ">
        <Notify />
      </div> */}
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 m-4 ">
        <Component />

        <Component />
        <Component />
        <Component />
        {/* <Component />
        <Component />
        <Component />
        <Component />
        <Component /> */}
      </div>
    </div>
  );
};

export default HomeScreen;
