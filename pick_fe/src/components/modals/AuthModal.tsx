import { MdClose } from "react-icons/md";

const AuthModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div>
      <div
        onClick={onClose}
        className="fixed fadeIn inset-0 bg-[#0000009c] opacity-50"
      ></div>
      <dialog
        open
        id="dialog"
        className="fixed inset-1/4 bg-white p-6 rounded-lg z-10 w-1/3 h-[80%]"
      >
        {/* title */}
        <div className="flex justify-between items-center border-b  pb-4">
          <button onClick={onClose}>
            <MdClose />
          </button>
          <p className=" text-lg ">Login or Signup</p>
        </div>
        <form method="dialog" className="">
          <div className="mt-4">
            <h2 className="text-xl font-medium">Welcome to Pickastudio</h2>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default AuthModal;
