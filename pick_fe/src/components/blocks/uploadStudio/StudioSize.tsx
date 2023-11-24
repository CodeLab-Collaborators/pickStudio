import  { FC, useState } from 'react';
import GlobalInput from '../../props/GlobalInput';

const StudioSize: FC = () => {





  const getStoredData = () => {
    const storedData = localStorage.getItem('uploadStudioData');
    return storedData ? JSON.parse(storedData).numberOfGuests : '';
  };

  const [numberOfGuests, setNumberOfGuests] = useState(getStoredData);

  const handleAddressChange = (e: any) => {
     const updatedGuests = e.target.value;
    setNumberOfGuests(updatedGuests);

    console.log('Submitting number of guest:', numberOfGuests);
  
    // Retrieve existing data from localStorage
    const existingData = JSON.parse(localStorage.getItem('uploadStudioData')!) || {};
  
    // Update the studio address with the new value
    const updatedData = {
      ...existingData,
        numberOfGuests: numberOfGuests,
    };
  
    // Save the updated data in localStorage
    localStorage.setItem('uploadStudioData', JSON.stringify(updatedData));
  };


  return (
    <div>
      <h1 className='mt-7 font-semibold text-2xl max-md:text-lg'>Number of guests the studio can contain?</h1>

      <div className='mt-4'>
        <GlobalInput
          type='number'
          maxLength={9}
          placeholder='Number of guests'
          value={numberOfGuests}
          onChange={handleAddressChange}

        />
      </div>
    </div>
  );
};

export default StudioSize;
