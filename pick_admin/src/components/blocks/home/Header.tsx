import React from 'react'

const Header:React.FC = () => {
  return (
    <div className='w-full p-5 flex items-center justify-between gap-5 sticky top-0 shadow-sm bg-white '>
        <p>search</p>
        <p>Auth</p>
    </div>
  )
}

export default Header