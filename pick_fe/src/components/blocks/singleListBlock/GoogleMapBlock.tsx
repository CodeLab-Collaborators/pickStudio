import React from 'react'
import { GoogleMap, useLoadScript, Marker, Libraries } from "@react-google-maps/api"
import { singleStudioHooks } from '../../../hooks/studioHooks';
import { useParams } from 'react-router-dom';


const libraries: Libraries = ["streetView"];
    const mapContainerStyle = {
        width: "100vw",
        height: "60vh"
    };
    const center = {
        lat: 6.4698,
        lng: 3.5852
    }

const GoogleMapBlock:React.FC = () => {

  const { productID } = useParams();
  const { singleStudio } = singleStudioHooks(productID!);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCsxCWx_FVJ0xBrk4gwbUgGHTkZkUvA9IQ",
    libraries
})

if (loadError) {
    return <div>Error Loading Maps</div>
}

if (!isLoaded) {
    return <div>Loading Map...</div>
}


  return (
    <div className='w-full overflow-hidden'>
      {/* title */}
      <div className='py-6'>
        <h2 className='font-semibold text-xl max-md:text-lg'>Where studio is</h2>
        <p className='pt-2 font-medium'>{singleStudio?.studioAddress}</p>
      </div>

      {/* map */}
      <div className='pb-5'>
      <GoogleMap 
                        mapContainerStyle={mapContainerStyle}
                        zoom={10}
                        center={center}
                    >
                        <Marker position={center}/>
                    </GoogleMap>
      </div>
 
    </div>
  )
}

export default GoogleMapBlock