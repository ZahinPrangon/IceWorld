/* eslint-disable react/no-array-index-key */

"use client";

import {
  Container,
  Flex,
  Grid,
  Image as ChakraImage,
  Show,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { onCloseCart, onCloseMenu, onOpenCart } from "@/store/cart.slice";
import { ProductDetailsMetaData } from "@/utils/ProductDetailsMetaData";

import HeroProductWrapper from "../HeroProductWrapper/HeroProductWrapper";
import NavSidebar from "../NavSidebar/NavSidebar";
import ProductDetails from "../ProductDetails/ProductDetails";
import ProductGallery from "../ProductGallery/ProductGallery";
import Sidebar from "../Sidebar/Sidebar";

const Product = () => {
  const dispatch = useAppDispatch();
  const [index, setIndex] = useState(0);
  const s = ProductDetailsMetaData[0];
  const [selectedProduct, setSelectedProduct] = useState(s);
  const onChangeIndex = (i: number) => {
    setIndex(i);
    setSelectedProduct(ProductDetailsMetaData[i]);
  };

  const isCartOpen = useAppSelector((state) => state.cart.isCartOpen);
  const isMenuOpen = useAppSelector((state) => state.cart.isMenuOpen);
  const images = ProductDetailsMetaData.map((product: any) => product.images);

  return (
    <>
      <Grid
        templateColumns={{ sm: "1fr", md: "2fr 1fr" }}
        maxWidth="1280px"
        justifyContent="center"
        marginX="auto"
        gap="20px"
        background="black"
        marginBottom="4rem"
        color="white"
        px="14px"
      >
        <ProductGallery
          images={images}
          index={index}
          setIndex={onChangeIndex}
        />
        <ProductDetails
          description="Elevate your moment"
          selectedProduct={selectedProduct}
          setSelectedProduct={onChangeIndex}
          details={ProductDetailsMetaData}
          onOpen={() => {
            dispatch(onOpenCart());
          }}
        />
      </Grid>

      <Flex
        flexDir="column"
        justifyContent="center"
        wrap={{ xs: "wrap", xl: "nowrap" }}
        pt={{ xs: "0px", md: "48px" }}
        gap="24px"
        mb="4rem"
      >
        <ChakraImage
          src="/10mm-driver.jpeg"
          alt="ice-touch-details-image"
          width={{ xs: "100%", md: "35%" }}
          height="100%"
          alignSelf="center"
          px={{ xs: "20px", md: "0px" }}
        />
        <ChakraImage src="/ice-hero.gif" />
        <Show below="md">
          <ChakraImage src="/sound-banner.jpeg" px="20px" />
        </Show>
        <Show above="md">
          <Container>
            <ChakraImage src="/sound-banner.jpeg" px="20px" />
          </Container>
        </Show>
      </Flex>

      <Flex
        justifyContent="center"
        wrap={{ xs: "wrap", xl: "nowrap" }}
        mb="2rem"
        gap="24px"
      >
        <ChakraImage
          src="/fast-charging.png"
          alt="ice-touch-details-image"
          width={{ xs: "100%", md: "35%" }}
          height="100%"
          alignSelf="center"
          px={{ xs: "12px", md: "0px" }}
        />

        <ChakraImage
          src="/ice-model-2.jpeg"
          alt="ice-cloud-model"
          animation="fade-in .5s cubic-bezier(.29,.65,.58,1) forwards;"
          width={{ xs: "100%", md: "48%" }}
          objectFit="cover"
          maxW="700px"
          loading="eager"
        />
      </Flex>

      <Flex
        justifyContent="center"
        wrap={{ xs: "wrap", xl: "nowrap" }}
        gap="24px"
        mb="4rem"
      >
        <Show below="md">
          <ChakraImage
            src="/touch-controls.jpeg"
            alt="ice-touch-controls-image"
            width={{ xs: "100%", md: "35%" }}
            height="100%"
            alignSelf="center"
            loading="eager"
            px={{ xs: "0px", md: "0px" }}
          />
        </Show>
        <ChakraImage
          src="/ice-model-1.jpeg"
          alt="ice-cloud-model"
          animation="fade-in .5s cubic-bezier(.29,.65,.58,1) forwards;"
          width={{ xs: "100%", md: "48%" }}
          objectFit="cover"
          maxW="700px"
          loading="eager"
        />
        <Show above="md">
          <ChakraImage
            src="/touch-details.jpeg"
            alt="ice-touch-details-image"
            width={{ xs: "100%", md: "35%" }}
            height="100%"
            alignSelf="center"
            loading="eager"
            px={{ xs: "24px", md: "0px" }}
          />
        </Show>
      </Flex>
      <HeroProductWrapper />
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
    </>
  );
};

export default Product;
