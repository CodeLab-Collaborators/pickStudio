import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { images } from "./images";
import { useParams } from "react-router-dom";
import { singleStudioHooks } from "../../../hooks/studioHooks";

const GalleryImages = () => {
  const { productID } = useParams();
  const { singleStudio } = singleStudioHooks(productID!);

  console.log("best ", singleStudio);
  const [index, setIndex] = useState(-1);

  const handleClick = (index: number) => setIndex(index);
  const rand = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const slides = singleStudio?.studioImages.map((props: any) => ({
    src: props,
    width: rand(320, 113),
    height: rand(320, 113),
  }));

  return (
    <div>
      <Gallery
        images={slides}
        onClick={handleClick}
        enableImageSelection={false}
        // tileViewportStyle={{ objectFit: "contain" }}
        thumbnailStyle={{ objectFit: "cover" }}
        tagStyle={{ objectFit: "cover" }}
      />
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
};

export default GalleryImages;
