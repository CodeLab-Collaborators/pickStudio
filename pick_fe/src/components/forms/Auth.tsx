// import { useState } from "react";
// import { MdClose } from "react-icons/md";
// import { IoChevronBackSharp } from "react-icons/io5";
// import { GlobalButton } from "..";
// import { FcGoogle } from "react-icons/fc";
// import { ImFacebook2 } from "react-icons/im";
// import Registration from "./Registration";
// import PasswordInput from "./Password";
// import Login from "./Login";
// import { useNavigate } from "react-router-dom";
// import { getSigninAccount, signWithGoogle } from "../../api/authAPI";

// const Auth = ({ onClose }: { onClose?: () => void }) => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState<string>("");
//   const [emailExists, setEmailExists] = useState<boolean | null>(null);

//   const handleContinue = () => {
//     // Simulate checking if the email exists in the database
//     const emailExistsInDatabase = false; // Replace with actual logic

//     // Update the state based on the email existence
//     setEmailExists(emailExistsInDatabase);
//   };

//   const renderStep = () => {
//     if (emailExists === null) {
//       return (
//         <Login
//           email={email}
//           setEmail={setEmail}
//           handleContinue={handleContinue}
//         />
//       );
//     } else if (emailExists) {
//       return <PasswordInput email={email} onClose={onClose} />;
//     } else {
//       return <Registration email={email} onClose={onClose} />;
//     }
//   };

//   return (
//     <div className="w-full h-full bg-white p-6 ">
//       <div className="flex border-b pb-2">
//         {emailExists ? (
//           <button onClick={() => navigate(-1)}>
//             <IoChevronBackSharp />
//           </button>
//         ) : (
//           <button onClick={onClose}>
//             <MdClose />
//           </button>
//         )}

//         {emailExists ? (
//           <p className="text-center font-semibold text-base w-full">Log in</p>
//         ) : email && !emailExists ? (
//           <p className="text-center font-semibold text-base w-full">
//             Complete sign up
//           </p>
//         ) : (
//           <p className="text-center font-semibold text-base w-full">
//             Log in or sign up
//           </p>
//         )}
//       </div>

//       <form method="dialog" className="">
//         <div className="mt-5">
//           {emailExists ? null : (
//             <h2 className="text-xl font-medium">Welcome to Pickastudio</h2>
//           )}
//         </div>

//         {/* Render the appropriate step */}
//         {renderStep()}
//         {emailExists ? null : (
//           <>
//             {" "}
//             <div className="relative mt-8 text-gray-500">
//               <span className="block w-full h-px bg-gray-200"></span>
//               <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">
//                 or
//               </p>
//             </div>
//             {/* Social auth */}
//             <div className="w-full mt-8 flex flex-col gap-4 ">
//               <GlobalButton className="flex justify-center items-center gap-2 text-black  border-gray-500 border ">
//                 <p className="text-xl">
//                   <FcGoogle />
//                 </p>
//                 <div
//                   className="text-black"
//                   onClick={() => {
//                     // signWithGoogle();
//                     console.log("Start");
//                   }}
//                 >
//                   Continue with Google
//                 </div>
//               </GlobalButton>
//               <GlobalButton className=" flex justify-center items-center gap-2 text-black border-gray-500 border ">
//                 <p className="text-xl text-blue-800">
//                   <ImFacebook2 />
//                 </p>
//                 <div className="text-black">Continue with Facebook</div>
//               </GlobalButton>
//             </div>
//           </>
//         )}
//       </form>
//     </div>
//   );
// };

// export default Auth;
