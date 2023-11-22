import { ProductProps } from "../components";
import img1 from "../assets/jpg/Menstylica.jpeg";
import img2 from "../assets/jpg/suit.jpeg";
import img3 from "../assets/jpg/SHOES.jpeg";
import img4 from "../assets/jpg/INSTASHOP.jpeg";
import profile from "../assets/jpg/profile.jpeg";
import { useEffect } from "react";
import axios from "axios";

const Home = () => {
  const dummyImage = [
    img1,
    img3,
    img4,
    img2,
    img1,
    img3,
    img4,
    img2,
    img1,
    img3,
    img4,
    img2,
  ];

  const getIP = async () => {
    await axios.get("https://api.ipify.org/?format=json").then((res) => {
      console.log(res.data.ip);
    });

    await axios
      .get("https://pick-be.onrender.com/api/v1/sign-in/success")
      .then((res: any) => {
        console.log(res);
      });
  };

  useEffect(() => {
    // getSigninAccount().then((res) => {
    //   console.log("reading: ", res);
    // });
    getIP();
  }, []);

  return (
    <div className="w-full m-auto grid gap-6 place-items-center grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:w-full">
      {dummyImage.map((props: any, i: number) => (
        <ProductProps
          key={`${i * props}`}
          cover={dummyImage}
          authorCover={profile}
          authorName="Eloy"
          place="Sao Paulo, Brazil"
          rating={4.84}
          amount={33}
          date="Jul 29 - Aug 3"
          route="/products"
          userRoute="/user"
          wishlistFunc={() => {}}
        />
      ))}
    </div>
  );
};

export default Home;
