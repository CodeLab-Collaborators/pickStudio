import { StudioListButton } from "../../.."
import { CgDanger } from 'react-icons/cg';

const WelcomeBlock = () => {
  return (
    <div className='w-[90%] m-auto'>

{/* title */}
<div className='w-[80%] m-auto  py-[68px]'>
    <h1 className='text-3xl font-semibold'>Welcome, (username)!</h1>
    <p className='mt-2 text-gray-500 font-normal'>People can book your studio 24 hours after you publish. here's how to prepare.</p>

    {/* create listing */}
<div className="mt-10 grid gap-5 grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1">
{/* listing button */}
<StudioListButton title="Create a listing" description="required to start getting booked" buttonText="Get started" iconColor="text-[var(--primary)]" icon={<CgDanger/>} buttonPath=""/>

</div>
</div>


    </div>
  )
}

export default WelcomeBlock