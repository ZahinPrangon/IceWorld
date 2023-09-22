/* eslint-disable react/no-unused-prop-types */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-implied-eval */

"use client";

import { MotionConfig } from "framer-motion";
import { useEffect, useRef } from "react";
import type { ReactImageGalleryItem } from "react-image-gallery";
import ImageGallery from "react-image-gallery";

type CarouselProps = {
  images: ReactImageGalleryItem[];
  index: number;
  setIndex?: (index: number) => void;
};
const Carousel = (props: CarouselProps) => {
  const galleryRef = useRef<any>(null); // Create a ref

  // Function to update slide index using the ref
  useEffect(() => {
    if (galleryRef.current) {
      galleryRef.current.slideToIndex(props.index);
    }
  }, [props.index]);

  return (
    <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
      {/* {images.map((item, idx) => (
        <MobileImage
          key={item.id}
          index={idx}
          slide={0}
          imageUrl={item.imageUrl}
        />
      ))} */}
      {/* <Image */}
      <ImageGallery
        ref={galleryRef}
        items={props.images}
        showPlayButton={false}
        showFullscreenButton={false}
        showThumbnails={false}
        // infinite
        startIndex={0}
        autoPlay
        slideDuration={600}
        // onImageLoad
        // onThumbnailClick={onClickGalleryItem}
        // onSlide={onClickSideArrow}
        // slideToIndex={setSlideIndex}
        // onImageLoad={props.setIndex}
      />
    </MotionConfig>
  );
};

// type MobileImageProps = {
//   imageUrl: string | any;
//   slide: number;
//   index: number;
// };

// const MobileImage = ({ imageUrl, slide, index }: MobileImageProps) => {
//   return (
//     // <motion.img
//     //   src={imageUrl}
//     //   width="100%"
//     //   height="50vh"
//     //   // display={slide === index ? "block" : "none"}
//     //   // objectFit="cover"
//     //   alt="landing-image"
//     //   draggable={false}
//     //   initial={{ opacity: 0 }} // Initial opacity when an image enters the scene
//     //   animate={{ opacity: slide === index ? 1 : 0 }} // Animate opacity when an image is displayed
//     //   exit={{ opacity: 0 }} // Animate opacity when an image exits the scene
//     //   style={{
//     //     display: slide === index ? "block" : "none",
//     //     objectFit: "cover",
//     //   }}
//     // />
//     <CldImage
//       // as={motion.img}
//       src={imageUrl}
//       // fill
//       style={{
//         display: slide === index ? "block" : "none",
//         objectFit: "cover",
//         width: "100%",
//         height: "100%",
//       }}
//       alt="landing-image"
//       sizes="100vw"
//       width="800"
//       height="800"
//       unoptimized
//       // width={}
//       // draggable={false}
//       // draggable={false}
//       // initial={{ opacity: 0 }} // Initial opacity when an image enters the scene
//       // animate={{ opacity: slide === index ? 1 : 0 }} // Animate opacity when an image is displayed
//       // exit={{ opacity: 0 }} // Animate opacity when an image exits the scene
//       // loading="eager"
//       priority
//     />
//   );
// };

export default Carousel;
