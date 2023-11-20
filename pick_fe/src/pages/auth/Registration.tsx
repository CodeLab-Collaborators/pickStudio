import {useState} from "react"
import GlobalInput from "../../components/props/GlobalInput";
import { GlobalButton, SocialLogin } from "../../components";

const Registration = () => {
  document.title = "Sign up - Pickastudio"

  const [showPassword, setShowPassword] = useState<boolean>(false)

  const togglePassword = ()=>{
    setShowPassword(!showPassword)
  }
  
  
      return (
         <div className='min-h-[80vh] flex items-center justify-center'>
           <div className="w-[35%] p-2 max-lg:w-full border  h-full flex flex-col items-center rounded-3xl my-5">
              <div className="w-full py-4 border-b ">
        <p className="text-center font-semibold text-lg w-full">
              Let's get you set up
            </p>
        </div>
            <div className="w-full h-full  p-6 ">
  
            <form>
        {/* Simplified registration form */}
        <div className="mt-4">
          <GlobalInput
            type="text"
            placeholder="First Name"
            required

         
            // onChange={handleEmailChange}
          />

          <GlobalInput
            type="text"
            placeholder="Last Name"
            required
            // onChange={handleEmailChange}
         
            className="mt-1"
          />
          <p className="text-xs py-2  font-normal">
            Make sure it matches the name on your property Document.
          </p>
          <GlobalInput
            type="email"
            placeholder="Email"
            required
            
            // onChange={handleEmailChange}
            className="mt-5"
          />
          <p className="text-xs py-2  font-normal">
            We'll email you studio booking confirmations and receipts.
          </p>
          <div className="mt-4 relative ">
        <GlobalInput
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          required

          //   onChange={handleEmailChange}
         
        />
        <p className='absolute bottom-4  text-sm cursor-pointer right-4 underline font-semibold text-gray-600 hover:text-black transition-all ease-in duration-100' onClick={togglePassword}>show</p>
      </div>
          <div className="mt-1 relative ">
        <GlobalInput
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Passsword"
          required

          //   onChange={handleEmailChange}
         
        />
        <p className='absolute bottom-4 cursor-pointer text-sm right-4 underline font-semibold text-gray-600 hover:text-black transition-all ease-in duration-100' onClick={togglePassword}>show</p>
      </div>
        
         
        </div>

        <div className="w-full mt-5">
          <GlobalButton
          type="submit"
            style={{ background: "var(--gradient)" }}
            // onClick={handleRegister}
          >
            Register
          </GlobalButton>
        </div>
      </form>
      <>
      <div className="relative mt-8 text-gray-500">
              <span className="block w-full h-px bg-gray-200"></span>
              <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">
                or
              </p>
            </div>
            <SocialLogin/>
      </>
  
      </div>
          </div>
         </div>
        );
};

export default Registration;
