"use client";

import { Flex } from "@chakra-ui/react";
import React from "react";

import Section from "@/layouts/Section/Section";

import Carousel from "../Carousel/Carousel";
import Product from "../Product/Product";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

const Homepage = () => {
  // const router = useRouter();

  return (
    <Flex flexDir="column">
      <Carousel />
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
