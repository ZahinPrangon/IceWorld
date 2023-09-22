"use client";

import { Flex } from "@chakra-ui/react";
import React, { Suspense, useState } from "react";
import type { ReactImageGalleryItem } from "react-image-gallery";

import Section from "@/layouts/Section/Section";

import Carousel from "../Carousel/Carousel";
import Product from "../Product/Product";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

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
    },
    {
      original:
        "https://res.cloudinary.com/dpurin337/image/upload/c_limit,w_800/ice_landing_1?_a=BAVAicGd0",
      thumbnail:
        "https://res.cloudinary.com/dpurin337/image/upload/c_limit,w_800/ice_landing_1?_a=BAVAicGd0",
      originalHeight: 800,
      loading: "eager",
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
      <Section
        title="Ice Cloud"
        subTitle="
              Engineered to fit. Great calls and music, designed for comfort.
            "
      >
        {/* {/* <Grid */}
      </Section>
      <Product />
      <ScrollToTopButton />
    </Flex>
  );
};

export default Homepage;
