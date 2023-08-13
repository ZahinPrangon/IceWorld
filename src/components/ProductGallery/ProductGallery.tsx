/* eslint-disable import/no-extraneous-dependencies */
// import "./styles.css";
import "react-image-gallery/styles/css/image-gallery.css";

import { useEffect, useRef } from "react";
import ImageGallery from "react-image-gallery";

type ProductGalleryProps = {
  images: {
    original: string;
    thumbnail: string;
  }[];
  index: number;
  setIndex: (index: number) => void;
};

export default function ProductGallery(props: ProductGalleryProps) {
  const galleryRef = useRef<any>(null); // Create a ref

  // Function to update slide index using the ref

  useEffect(() => {
    if (galleryRef.current) {
      galleryRef.current.slideToIndex(props.index);
    }
  }, [props.index]);

  const onClickGalleryItem = (_: any, index: number) => {
    props.setIndex(index);
  };

  return (
    <ImageGallery
      ref={galleryRef}
      // height="100%"
      items={props.images}
      showPlayButton={false}
      showFullscreenButton={false}
      // infinite
      startIndex={0}
      onThumbnailClick={onClickGalleryItem}
      // onSlide={onClickSideArrow}
      // slideToIndex={setSlideIndex}
    />
  );
}
