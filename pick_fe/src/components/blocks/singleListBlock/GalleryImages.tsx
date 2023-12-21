import { useEffect, useState } from "react";
// import { Gallery } from "react-grid-gallery";
// import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { MdArrowBackIosNew,MdArrowForwardIos  } from "react-icons/md";
import { useParams } from "react-router-dom";
import { singleStudioHooks } from "../../../hooks/studioHooks";
import "./style.css"


const GalleryImages = () => {
  const { productID } = useParams();
  const { singleStudio } = singleStudioHooks(productID!);


  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);

  const handleImageClick = (index:any) => {
    setSelectedImageIndex(index);
    setSlideDirection(null)
  };

  const handleLightboxClose = () => {
    setSelectedImageIndex(null);
  };

  const handleNextClick = () => {
    setSelectedImageIndex((prevIndex: number | null) =>
    prevIndex === singleStudio?.studioImages.length - 1 ? 0 : prevIndex! + 1
    );
    setSlideDirection("right")
  };

  const handlePrevClick = () => {
    setSelectedImageIndex((prevIndex:number | null ) =>
      prevIndex === 0 ? singleStudio?.studioImages.length - 1 : prevIndex! - 1
    );
    setSlideDirection("left")
  };

  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleLightboxClose();
      } else if (event.key === 'ArrowRight') {
        handleNextClick();
      } else if (event.key === 'ArrowLeft') {
        handlePrevClick();
      }
    };

    // Add event listeners when the lightbox is open
    if (selectedImageIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
    }

    // Remove event listeners when the component unmounts or when the lightbox is closed
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImageIndex]); // Dependency to ensure proper cleanup


  return (

    <div className="container mx-auto my-8 p-2  ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {singleStudio?.studioImages.map((imageUrl: string, index: number) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Photo ${index + 1}`}
          className="w-full h-64 object-cover object-top cursor-pointer rounded-sm"
          onClick={() => handleImageClick(index)}
        />
      ))}
      </div>
      {selectedImageIndex !== null && (
        <div
      
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#000000]"
        >
          <div className="max-w-3xl w-full p-4 max-md:p-0  ">
          {/* close button */}
            <button
              className="text-gray-100 text-4xl  font-normal cursor-pointer absolute top-0 right-0 p-4"
              onClick={
                handleLightboxClose
              }
            >
              &times;
            </button>

            {/* prev button */}
            <div className="flex justify-between">
              <button
                className="text-gray-100 max-md:shadow-lg text-3xl cursor-pointer absolute top-1/2 left-5 max-md:left-3 "
              
                onClick={
                  handlePrevClick
               }
              >
                <MdArrowBackIosNew />
              </button>

              {/* next button */}
              <button
                className="text-gray-100 max-md:shadow-lg text-3xl cursor-pointer absolute top-1/2 right-5 max-md:right-3"
                
                onClick={
                  handleNextClick}
              >
                <MdArrowForwardIos />
              </button>
            </div>
            <div className="" >
              <img
                src={singleStudio?.studioImages[selectedImageIndex] ?? ''}
                alt={`Selected Photo ${selectedImageIndex + 1}`}
               
                className={`w-full h-full   ${
                  slideDirection === 'left' ? 'slideInRight' : ''
                } ${slideDirection === 'right' ? 'slideInLeft' : ''}`}
                onAnimationEnd={() => setSlideDirection(null)}
              />
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default GalleryImages;
