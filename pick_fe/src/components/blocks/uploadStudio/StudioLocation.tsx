import { FC, useState } from 'react';
import GlobalInput from '../../props/GlobalInput';

const StudioLocation: FC = () => {
  const getStoredData = () => {
    const storedData = localStorage.getItem('uploadStudioData');
    return storedData ? JSON.parse(storedData).studioAddress : '';
  };

  const [studioAddress, setStudioAddress] = useState(getStoredData);

  const handleAddressChange = (e: any) => {
    const updatedAddress = e.target.value;
    setStudioAddress(updatedAddress);

    console.log('Submitting studio address:', studioAddress);
  
    // Retrieve existing data from localStorage
    const existingData = JSON.parse(localStorage.getItem('uploadStudioData')!) || {};
  
    // Update the studio address with the new value
    const updatedData = {
      ...existingData,
      studioAddress: studioAddress,
    };
  
    // Save the updated data in localStorage
    localStorage.setItem('uploadStudioData', JSON.stringify(updatedData));
  };



  return (
    <div>
      <h1 className='mt-7 font-semibold text-2xl max-md:text-lg'>Where's your studio located?</h1>

      <div className='mt-4'>
        <GlobalInput
          type="text"
          placeholder="Address"
          value={studioAddress}
          onChange={handleAddressChange}
          required
          maxLength={60}
        />
      </div>
    </div>
  );
};

export default StudioLocation;
