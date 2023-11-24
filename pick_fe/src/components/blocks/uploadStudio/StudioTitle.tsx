import { FC, useState, useEffect } from 'react';
import GlobalInput from '../../props/GlobalInput';

const StudioTitle: FC = () => {
  const [studioName, setStudioName] = useState<string>('');
  const [studioDescription, setStudioDescription] = useState<string>('');

  useEffect(() => {
    // Retrieve stored data from localStorage on component mount
    const storedData = localStorage.getItem('uploadStudioData');
    if (storedData) {
      const { studioName: storedStudioName, studioDescription: storedStudioDescription } = JSON.parse(storedData);
      setStudioName(storedStudioName || '');
      setStudioDescription(storedStudioDescription || '');
    }
  }, []);

  const handleStudioNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setStudioName(newName);
    updateLocalStorage({ studioName: newName });
  };

  const handleStudioDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newDescription = e.target.value;
    setStudioDescription(newDescription);
    updateLocalStorage({ studioDescription: newDescription });
  };

  const updateLocalStorage = (newData: Partial<{ studioName: string; studioDescription: string }>) => {
    // Retrieve existing data from localStorage
    const storedData = localStorage.getItem('uploadStudioData');
    const existingData = storedData ? JSON.parse(storedData) : {};

    // Update with new data and save to localStorage
    localStorage.setItem(
      'uploadStudioData',
      JSON.stringify({
        ...existingData,
        ...newData,
      })
    );
  };

  return (
    <div className=''>
      <h1 className='font-semibold text-2xl max-md:text-lg'>What is the Name of Your Studio?</h1>
      <p className='max-md:hidden text-[#222222e8] text-base font-normal mt-2 leading-[1.75rem]'>
        Short titles work best. Have fun with it.
      </p>
      <GlobalInput
        placeholder='Studio name'
        type='text'
        maxLength={50}
        value={studioName}
        onChange={handleStudioNameChange}
      />
      <p className='text-xs font-semibold mt-1 text-red-500'>Max of 50 characters</p>

      {/* studio description */}
      <div className='mt-7'>
        <h1 className='font-semibold text-2xl max-md:text-lg'>Create your description?</h1>
        <p className='max-md:hidden text-[#222222e8] text-base font-normal mt-1 leading-[1.75rem]'>
          Share what makes your studio special.
        </p>
        {/* text area */}
        <textarea
          maxLength={500}
          rows={6}
          className='mt-4 block p-2.5 w-full text-[1.265rem] text-gray-900 bg-gray-50 rounded-lg border border-gray-200 outline dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
          placeholder='Write your thoughts here...'
          value={studioDescription}
          onChange={handleStudioDescriptionChange}
        ></textarea>
        <p className='text-xs font-semibold mt-1 text-red-500'>Max of 500 characters</p>
      </div>
    </div>
  );
};

export default StudioTitle;
