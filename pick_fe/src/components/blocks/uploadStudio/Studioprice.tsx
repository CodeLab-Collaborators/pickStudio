import { useState, useEffect } from 'react';

const StudioPrice = () => {
  const [includeDiscount, setIncludeDiscount] = useState(false);
  const [discountPercent, setDiscountPercent] = useState('');
  const [studioPrice, setStudioPrice] = useState<string>('');
  const [uploadStudioData, setUploadStudioData] = useState<any>({});

  useEffect(() => {
    // Retrieve stored data from localStorage on component mount
    const storedData = localStorage.getItem('uploadStudioData');
    if (storedData) {
      setUploadStudioData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    // Update local storage whenever there's a change in studio price or discount
    localStorage.setItem(
      'uploadStudioData',
      JSON.stringify({
        ...uploadStudioData,
        studioPrice,
        includeDiscount,
        discountPercent,
      })
    );
  }, [studioPrice, includeDiscount, discountPercent]);

  const handleCheckboxChange = () => {
    setIncludeDiscount(!includeDiscount);
  };

  const handleDiscountPercentChange = (event: any) => {
    setDiscountPercent(event.target.value);
  };

  const handleStudioPriceChange = (event: any) => {
    setStudioPrice(event.target.value);
  };

  return (
    <div>
      <div>
        <h1 className='font-semibold text-3xl max-md:text-lg'>Now, Set Your Price</h1>
        <p className='max-md:hidden text-[#222222e8] text-lg font-normal mt-2 leading-[1.75rem]'>
          This is the price <strong>per hour</strong>
        </p>
        <div className='flex flex-col items-center gap-1 w-full justify-center'>
          <div className='flex justify-center text-[128px] max-md:text-[90px] items-center'>
            <p className='font-bold'>₦</p>
            <input
              type='text'
              inputMode='numeric'
              min='0'
              max='100'
              value={studioPrice}
              onChange={handleStudioPriceChange}
              className='w-[60%] outline-none font-bold bg-white p-2 rounded-md mt-1 placeholder:font-bold placeholder:text-gray-700'
              placeholder='20000'
            />
          </div>
        </div>
      </div>

      <div className='mt-4'>
        <div className='flex items-center ps-4 border border-gray-200 rounded '>
          <input
            id='bordered-checkbox'
            checked={includeDiscount}
            onChange={handleCheckboxChange}
            type='checkbox'
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
          />
          <label htmlFor='bordered-checkbox' className='w-full py-4 ms-2 text-base text-gray-900 font-normal '>
            Add Discount
          </label>
        </div>

        {includeDiscount && (
          <div className='mt-2 flex justify-center items-center flex-col'>
            <label className='block text-gray-700 font-semibold'>Discount Percent:</label>
            <div className='flex justify-center items-center text-[128px] max-md:text-[90px]'>
              <input
                type='string'
                inputMode='numeric'
                min='0'
                max='100'
                value={discountPercent}
                onChange={handleDiscountPercentChange}
                className='w-[22%] p-2 bg-white rounded-md mt-1 font-semibold placeholder:text-gray-600 placeholder:font-semibold'
                placeholder='90'
              />
              <span className='ml-2 text-gray-800 font-bold'>%</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudioPrice;