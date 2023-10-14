"use client";

import { Flex } from "@chakra-ui/react";
import React, { Suspense, useState } from "react";
import type { ReactImageGalleryItem } from "react-image-gallery";

import Carousel from "../Carousel/Carousel";
import Product from "../Product/Product";

const Homepage = () => {
  // const router = useRouter();
  const [index, setIndex] = useState(0);

  const images: ReactImageGalleryItem[] = [
    {
      original:
        "https://res.cloudinary.com/dpurin337/image/upload/c_limit,w_800/ice_landing_1?_a=BAVAicGd0",
      thumbnail:
        "https://res.cloudinary.com/dpurin337/image/upload/c_limit,w_800/ice_landing_1?_a=BAVAicGd0",
      originalHeight: 800,
      loading: "eager",
      bulletClass: "custom-bullet",
    },
    {
      original:
        "https://res.cloudinary.com/dpurin337/image/upload/v1695749025/banner-2.png",
      thumbnail:
        "https://res.cloudinary.com/dpurin337/image/upload/c_limit,w_800/banner-2?_a=BAVAicGd0",
      originalHeight: 800,
      loading: "eager",
      bulletClass: "custom-bullet",
    },
    {
      original:
        "https://res.cloudinary.com/dpurin337/image/upload/v1695749025/banner-3.png",
      thumbnail:
        "https://res.cloudinary.com/dpurin337/image/upload/c_limit,w_800/banner-3?_a=BAVAicGd0",
      originalHeight: 800,
      loading: "eager",
      bulletClass: "custom-bullet",
    },
  ];
  const onChangeIndex = (i: number) => {
    setIndex(i);
  };
  return (
    <Flex flexDir="column">
      <Suspense fallback={<div>Loading...</div>}>
        <Carousel images={images} index={index} setIndex={onChangeIndex} />
      </Suspense>
      <Product />
      {/* <ReviewsContainer /> */}
    </Flex>
  );
};

export default Homepage;
