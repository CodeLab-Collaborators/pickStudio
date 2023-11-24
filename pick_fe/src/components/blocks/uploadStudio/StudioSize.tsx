import  { FC, useState } from 'react';
import GlobalInput from '../../props/GlobalInput';

const StudioSize: FC = () => {
  const [numberOfGuests, setNumberOfGuests] = useState(() => {
    // Retrieve stored data from localStorage on component mount
    const storedData = localStorage.getItem('uploadStudioData');
    return storedData ? JSON.parse(storedData).numberOfGuests || '' : '';
  });

  const handleGuestsChange = (e: any) => {
    const updatedGuests = e.target.value;
    setNumberOfGuests(updatedGuests);
  };

  const handleSubmit = () => {
    console.log('Submitting number of guests:', numberOfGuests);

    // Save the updated number of guests in localStorage
    localStorage.setItem(
      'uploadStudioData',
      JSON.stringify({
        ...JSON.parse(localStorage.getItem('uploadStudioData')!) || {},
        numberOfGuests: numberOfGuests,
      })
    );
  };

  return (
    <div>
      <h1 className='mt-7 font-semibold text-2xl max-md:text-lg'>Number of guests the studio can contain?</h1>

      <div className='mt-4'>
        <GlobalInput
          type='number'
          max={6}
          placeholder='Number of guests'
          value={numberOfGuests}
          onChange={handleGuestsChange}
          onBlur={handleSubmit}
        />
      </div>
    </div>
  );
};

export default StudioSize;
