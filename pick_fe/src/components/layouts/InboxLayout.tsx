import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import img1 from "../../assets/jpg/SHOES.jpeg";
import { FaArrowLeft } from "react-icons/fa";
import AppScrollToTop from "../../routes/AppScrollToTop";

export const data = [
  {
    id: 1,
    image: null,
    title: "Airbnb Support",
    content: "How would you like to connect with us?",
    time: "12:34PM",
    date: "Dec 24, 2024",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex blanditiis cupiditate libero odit nihil possimus minima, praesentium architecto veniam enim rem fuga quia repellendus deleniti est accusamus earum nostrum tempore!",
  },
  {
    id: 2,
    image: img1,
    title: "Agnes",
    content: "Open to see latest messages",
    time: "12:34PM",
    date: "Dec 24, 2024",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex blanditiis cupiditate libero odit nihil possimus minima, praesentium architecto veniam enim rem fuga quia repellendus deleniti est accusamus earum nostrum tempore!",
  },
];

const InboxLayout: FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const [show2, setShow2] = useState<boolean>(true);
  const [show3, setShow3] = useState<boolean>(true);

  return (
    <div className="flex w-full min-h-screen bg-white">
      <AppScrollToTop />
      {/* {show && <MobileNavbar cancel={() => setShow(false)} />} */}
      {/* {show2 && <DesktopNavbar />} */}
      {/* {show3 && (
            <MobileDashboard
              title="All Messages"
              dms={
                <>
                  {data.map((el) => (
                    <Dmer
                      time={el.time}
                      title={el.title}
                      content={el.content}
                      is_active={
                        location.pathname.includes(`${el.id}`) ? true : false
                      }
                      route={`/${el.id}`}
                      image={el.image}
                      onclick={() => {
                        setShow3(false);
                      }}
                    />
                  ))}
                </>
              }
              cancel={() => {
                setShow(!show);
                setShow2(!show2);
              }}
            />
          )} */}
      {/* <DesktopDashboard
            title="All Messages"
            cancel={() => {
              setShow(!show);
              setShow2(!show2);
            }}
            dms={
              <>
                {data.map((el) => (
                  <Dmer
                    time={el.time}
                    title={el.title}
                    content={el.content}
                    is_active={
                      location.pathname.includes(`${el.id}`) ? true : false
                    }
                    route={`/${el.id}`}
                    image={el.image}
                    onclick={() => {
                      setShow3(false);
                    }}
                  />
                ))}
              </>
            }
          /> */}
      <div className="flex-1 w-full relative">
        <div
          onClick={() => setShow3(true)}
          className="lg:hidden absolute top-[24px] left-5 z-0 cursor-pointer"
        >
          <FaArrowLeft />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default InboxLayout;
