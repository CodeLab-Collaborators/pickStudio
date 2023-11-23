

const StudioHeader = () => {
  return (
    <div className='w-full h-[7vh] bg-white border-b flex items-center justify-center'>
      <div className='w-[90%] h-full flex justify-center items-center font-normal'>
        <nav className='flex gap-8 text-gray-600  ease-in transition-all'>
          <ol className='cursor-pointer hover:text-black' >Home</ol>
          <ol className='hover:text-black cursor-pointer'>Listings</ol>
          <ol className='hover:text-black cursor-pointer'>Inbox</ol>
          <ol className='hover:text-black cursor-pointer'>Menu</ol>

          </nav> 
          </div>
    </div>
  )
}

export default StudioHeader