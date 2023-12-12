import React, { useState } from 'react';
import AllBookings from '../modals/AllBookings';

const ReservationTab:React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('pending');
  const [showBookings, setShowBookings] = useState<boolean>(false)

  const handleTabClick = (tab:string) => {
    setActiveTab(tab);
  };

  const tabs = [
    { id: 'pending', label: 'Pending Bookings (0)' },
    { id: 'confirmed', label: 'Confirmed Bookings (0)' },
    { id: 'upcoming', label: 'Upcoming Bookings (0)' },
    { id: 'past', label: 'Past Bookings (0)' },
    { id: 'reviews', label: 'Reviews (0)' },
  ];

  return (
    <div className='w-full py-3'>
      <div className='flex justify-between items-center'>
        <h2 className='text-[1.625rem] font-medium'>Your bookings</h2>
        <button onClick={()=>setShowBookings(!showBookings)} className='max-md:hidden font-semibold underline '>All bookings (0)</button>
      </div>

      {/* Tab */}
      <div className='flex gap-x-4  pt-5 pb-4 overflow-x-scroll no-scrollbar ease-in duration-200 transition-all'>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`text-[15.3px] max-md:text-sm hover:border-black  border py-2 px-4 whitespace-nowrap rounded-full font-medium ${
              activeTab === tab.id ? ' border-2 border-black bg-slate-100' : 'text-gray-600'
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content based on the active tab */}
      {activeTab === 'pending' && <PendingBookings />}
      {activeTab === 'confirmed' && <ConfirmedBookings />}
      {activeTab === 'upcoming' && <UpcomingBookings />}
      {activeTab === 'past' && <PastBookings />}
      {activeTab === 'reviews' && <Reviews />}

      <button onClick={()=>setShowBookings(!showBookings)} className='md:hidden  mt-8 font-semibold underline '>All bookings (0)</button>
      {showBookings && <AllBookings onClose={()=>setShowBookings(!showBookings)}/>}
    </div>


  );
};

// Placeholder components for content of each tab
const PendingBookings = () => <div className='w-full min-h-[20vh] shadow-sm bg-[#F7F7F7] rounded-lg p-3 flex justify-center items-center'>Content for Pending Bookings</div>;
const ConfirmedBookings = () => <div className='w-full min-h-[20vh] shadow-sm bg-[#F7F7F7] rounded-lg p-3 flex justify-center items-center'>Content for Confirmed Bookings</div>;
const UpcomingBookings = () => <div className='w-full min-h-[20vh] shadow-sm bg-[#F7F7F7] rounded-lg p-3 flex justify-center items-center'>Content for Upcoming Bookings</div>;
const PastBookings = () => <div className='w-full min-h-[20vh] shadow-sm bg-[#F7F7F7] rounded-lg p-3 flex justify-center items-center'>Content for Past Bookings</div>;
const Reviews = () => <div className='w-full min-h-[20vh] shadow-sm bg-[#F7F7F7] rounded-lg p-3 flex justify-center items-center'>Content for Reviews</div>;

export default ReservationTab;
