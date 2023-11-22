
// import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Lightbox from 'yet-another-react-lightbox';
import img1 from "../../../assets/jpg/Menstylica.jpeg";
import img2 from "../../../assets/jpg/suit.jpeg";
import img3 from "../../../assets/jpg/SHOES.jpeg";
import img4 from "../../../assets/jpg/INSTASHOP.jpeg";

const GalleryImages = () => {
//   const images = [
//     'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg',
//     'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg',
//     'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg',
//     'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
//     'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg',
//     'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
//     'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg',
//     'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg',
//     'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg',
//     'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg',
//     'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg',
//     'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg',
//   ];
  const images = [
    img1,
    img2,
    img3,
    img4,
 
  ];

  const handleOpenLightbox = (image:any) => {
    Lightbox({
      slides: [
        {
          src: image,

        },
        
      ],
    });
  };

  return (
    <div className="mb-[100px] w-[80%] m-auto mt-8">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
      >
        <Masonry gutter="20px">
          {images.map((image, i) => (
            <img
              key={i}
              src={image}
              style={{ width: '100%', display: 'block' }}
              alt=""
              className="rounded-lg hover:bg-black"
              onClick={() => handleOpenLightbox(image)}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default GalleryImages;
