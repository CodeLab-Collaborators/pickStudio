

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
        className="fixed inset-1/4 rounded-xl overflow-hidden z-10 w-1/3 "
      >
        {/* auth form */}
        {/* <Auth onClose={onClose} /> */}
      </dialog>
    </div>
  );
};

export default AuthModal;
