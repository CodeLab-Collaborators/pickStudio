import { ClipLoader } from "react-spinners";

const LoadingScreen = () => {
  return (
    <div
      className="w-full h-screen absolute top-0 left-0 flex flex-col justify-center items-center "
      style={{
        background: "rgba(255, 255, 255, 0.2)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 73, 185, 0.3)",
      }}
    >
      <ClipLoader color="#421515" size={20} />
    </div>
  );
};

export default LoadingScreen;
