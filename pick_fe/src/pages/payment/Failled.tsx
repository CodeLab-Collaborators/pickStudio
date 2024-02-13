import React from 'react'
import { GlobalButton, Logo } from '../../components'
import failed from "../../assets/gif/failed.gif"
import { useNavigate } from 'react-router-dom';

const Failed:React.FC = () => {
    const navigate = useNavigate();



  return (

<div className='w-full bg-slate-100 text-slate-900 h-screen flex justify-center items-center '>
<div className='flex flex-col items-center'>
    {/* top */}
    <div className="h-full w-[200px] mb-6 flex items-center">
          <Logo />
        </div>

{/* botttom */}
<div className='min-w-[500px] bg-slate-50 border max-md:shadow-none max-md:rounded-none max-md:border-0 shadow-sm rounded-lg p-4 h-[55vh] '>
   {/* Failed icon
    */}
    <div className='flex flex-col py-4 items-center '>
        <img src={failed} alt="failed" />
    </div>

    {/* desc */}
    <div className='w-full flex  flex-col items-center gap-4 mt-6'>
        <h3 className='font-semibold'>Payment failed</h3>
        <desc className='text-[13px] w-[550px]  max-md:w-full text-slate-600 text-center'>Payment for "studio name" couldn't be completed.</desc>
    </div>

    {/* button */}
   <div className='mt-7 px-5'>
   <GlobalButton style={{ background: "var(--gradient)" }}
          className="font-semibold "
          onClick={() => {navigate(-1)}}>Go back</GlobalButton>
   </div>


</div>
{/* copyright */}
<div className='mt-8 text-xs tracking-wider'>
<p>© {new Date().getFullYear()} PICKASTUDIO</p>
</div>
</div>
</div>

  )
}

export default Failed