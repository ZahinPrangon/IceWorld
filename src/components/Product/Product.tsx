/* eslint-disable react/no-array-index-key */
import { Container, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import { ProductDetailsMetaData } from "@/utils/ProductDetailsMetaData";

import HeroProductFeatures from "../HeroProductWrapper/HeroProductWrapper";
import ProductDetails from "../ProductDetails/ProductDetails";
import ProductGallery from "../ProductGallery/ProductGallery";

const Product = () => {
  const [index, setIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(
    ProductDetailsMetaData[0]
  );
  const onChangeIndex = (i: number) => {
    setIndex(i);
    setSelectedProduct(ProductDetailsMetaData[i]);
  };

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
        marginBottom="6rem"
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
          onClick={() => {
            console.log("clicked");
          }}
          selectedProduct={selectedProduct}
          setSelectedProduct={onChangeIndex}
          details={ProductDetailsMetaData}
        />
      </Grid>

      <Flex flexDirection="column" color="white">
        <Text
          mb="30px"
          textAlign="center"
          letterSpacing="0.7px"
          lineHeight="18.2px"
          fontSize="14px"
        >
          ACTIVE NOISE CANCELLATION
        </Text>
        <Text
          mb="30px"
          fontWeight="400"
          lineHeight="30.6px"
          fontSize="25.5px"
          textAlign="center"
        >
          Sound of Silence
        </Text>
        <Image src="/ice-hero.gif" alt="ice-cloud" />
      </Flex>

      <Flex>
        <Image src="/touch-details.png" alt="ice-touch-details-image" />

        {/* <Image src="/ice-hero.gif" alt="ice-cloud" /> */}
      </Flex>

      <Container color="white">
        <Text
          mb="30px"
          textAlign="center"
          letterSpacing="0.7px"
          lineHeight="18.2px"
          fontSize="14px"
        >
          PREMIUM HARDWARE
        </Text>
        <Text
          mb="30px"
          fontWeight="400"
          lineHeight="30.6px"
          fontSize="25.5px"
          textAlign="center"
        >
          Sound of Silence
        </Text>
        <Image src="/hardware.gif" alt="ice-earbud-image" loading="lazy" />
      </Container>
      <HeroProductFeatures />
    </>
  );
};

export default Product;
