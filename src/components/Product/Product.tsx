/* eslint-disable react/no-array-index-key */
import {
  Flex,
  Grid,
  Image as ChakraImage,
  Show,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { ProductDetailsMetaData } from "@/utils/ProductDetailsMetaData";

import HeroProductWrapper from "../HeroProductWrapper/HeroProductWrapper";
import ProductDetails from "../ProductDetails/ProductDetails";
import ProductGallery from "../ProductGallery/ProductGallery";
import Sidebar from "../Sidebar/Sidebar";

const Product = () => {
  const [index, setIndex] = useState(0);
  const s = ProductDetailsMetaData[0];
  const [selectedProduct, setSelectedProduct] = useState(s);
  const onChangeIndex = (i: number) => {
    setIndex(i);
    setSelectedProduct(ProductDetailsMetaData[i]);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          onOpen={() => onOpen()}
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
          px={{ xs: "0px", md: "0px" }}
        />
        <ChakraImage src="/ice-hero.gif" />
        <ChakraImage src="/sound-banner.jpeg" px="20px" />
        {/* <ChakraImage
          src="/ice-model-2.jpeg"
          alt="ice-cloud-model"
          animation="fade-in .5s cubic-bezier(.29,.65,.58,1) forwards;"
          width={{ xs: "100%", md: "48%" }}
          objectFit="cover"
          maxW="700px"
          loading="eager"
        /> */}
      </Flex>

      <Flex
        justifyContent="center"
        wrap={{ xs: "wrap", xl: "nowrap" }}
        // pt={{ xs: "0px", md: "48px" }}
        mb="2rem"
        gap="24px"
      >
        <ChakraImage
          src="/fast-charging.jpeg"
          alt="ice-touch-details-image"
          width={{ xs: "100%", md: "35%" }}
          height="100%"
          alignSelf="center"
          px={{ xs: "24px", md: "0px" }}
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

        <ChakraImage src="/battery-banner.jpeg" px="20px" />

        {/* <Image src="/ice-hero.gif" alt="ice-cloud" /> */}
      </Flex>

      <Flex
        justifyContent="center"
        wrap={{ xs: "wrap", xl: "nowrap" }}
        gap="24px"
        mb="4rem"
      >
        <Show below="md">
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
        {/* <Box
  animation="fade-in .5s cubic-bezier(.29,.65,.58,1) forwards;"
  width={{ xs: "100%", md: "48%" }}
  objectFit="cover"
  maxW="700px"
>
  <Image src="/ice-model-2.jpeg" alt="ice-cloud-model" fill priority />
</Box> */}
      </Flex>
      <HeroProductWrapper />
      <Sidebar isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Product;
