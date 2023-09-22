/* eslint-disable react-hooks/rules-of-hooks */

"use client";

import { Box, Container, Flex, Image, Show } from "@chakra-ui/react";
import { CldImage } from "next-cloudinary";
import React from "react";

import NavSidebar from "@/components/NavSidebar/NavSidebar";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { onCloseCart, onCloseMenu } from "@/store/cart.slice";

const page = () => {
  const dispatch = useAppDispatch();
  const isCartOpen = useAppSelector((state) => state.cart.isCartOpen);
  const isMenuOpen = useAppSelector((state) => state.cart.isMenuOpen);
  return (
    <Box mb="200px">
      <Show below="md">
        <CldImage
          unoptimized
          width="500"
          height="500"
          src="about-us-landing"
          sizes="100vw"
          alt="ice-world-about-us"
        />
        <CldImage
          unoptimized
          width="800"
          height="800"
          src="about-us-1"
          sizes="100vw"
          alt="ice-world-about-us"
        />
        <CldImage
          unoptimized
          width="500"
          height="500"
          src="about-us-landing-2"
          sizes="100vw"
          alt="ice-world-about-us"
        />
        <CldImage
          unoptimized
          width="500"
          height="500"
          src="about-us-2"
          sizes="100vw"
          alt="ice-world-about-us"
        />
        <CldImage
          unoptimized
          width="500"
          height="500"
          src="about-us-landing-3"
          sizes="100vw"
          alt="ice-world-about-us"
        />
        <CldImage
          unoptimized
          width="500"
          height="500"
          src="about-us-3"
          sizes="100vw"
          alt="ice-world-about-us"
        />
      </Show>
      <Show above="md">
        <Flex direction="column" justifyContent="center" alignItems="center">
          <Image src="/about-us-landing.jpeg" alt="ice-world-about-us" />
          <Image src="/about-us-1.jpeg" alt="ice-world-about-us" />
          <Image src="/about-us-landing-2.jpeg" alt="ice-world-about-us" />
          <Image src="/about-us-2.jpeg" alt="ice-world-about-us" />
          <Image src="/about-us-landing-3.jpeg" alt="ice-world-about-us" />
          <Image src="/about-us-3.jpeg" alt="ice-world-about-us" />
        </Flex>
        <Container />
      </Show>

      <Sidebar
        isOpen={isCartOpen ?? false}
        onClose={() => {
          dispatch(onCloseCart());
        }}
      />
      <NavSidebar
        isOpen={isMenuOpen ?? false}
        onClose={() => {
          dispatch(onCloseMenu());
        }}
      />
    </Box>
  );
};

export default page;
