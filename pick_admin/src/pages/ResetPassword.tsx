import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

const ResetPassword:React.FC = () => {
  return (
   
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
    <div className="max-w-sm w-full text-gray-600 space-y-8">
        <div className="text-center">
            <img src={logo} width={150} className="mx-auto" />
            <div className="mt-5 space-y-2">
                <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Password reset form</h3>
            
            </div>
        </div>
        <form
            onSubmit={(e) => e.preventDefault()}
        >
            <div>
                <label className="font-medium">
                    Email
                </label>
                <input
                    type="email"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[var(--primary)] shadow-sm rounded-lg"
                />
            </div>
            <button
                className="w-full mt-4 px-4 py-2 text-white font-medium bg-[var(--primary)] hover:bg-[var(--primary)] active:bg-[var(--primary)] rounded-lg duration-150"
            >
                Reset password
            </button>
        </form>
     
        <div className="text-center">
            <Link to="/login">
            <p  className="text-[var(--primary)] hover:text-[var(--primary)]">Back to sign in</p>
            </Link>
        </div>
    </div>
</main>
  )
}

export default ResetPassword