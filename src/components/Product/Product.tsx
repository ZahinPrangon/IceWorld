/* eslint-disable react/no-array-index-key */
import { Container, Flex, Grid, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";

import { ProductDetailsMetaData } from "@/utils/ProductDetailsMetaData";

import HeroProductWrapper from "../HeroProductWrapper/HeroProductWrapper";
import ProductDetails from "../ProductDetails/ProductDetails";
import ProductGallery from "../ProductGallery/ProductGallery";

const Product = () => {
  const [index, setIndex] = useState(0);
  const s = ProductDetailsMetaData[0];
  const [selectedProduct, setSelectedProduct] = useState(s);
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
            // console.log("clicked");
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
        <Image
          src="/ice-hero.gif"
          alt="ice-cloud"
          priority
          width={100}
          height={100}
        />
      </Flex>

      <Flex
        justifyContent="center"
        // alignItems="center"
        wrap={{ xs: "wrap", xl: "nowrap" }}
        px={{ xs: "0", xl: "64px" }}
        pt="48px"
      >
        <Image
          src="/fast-charging.png"
          alt="ice-touch-details-image"
          style={{
            alignSelf: "center",
            width: "50%",
            height: "auto",
          }}
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          // alignSelf="center"
          priority
          sizes="100vw"
          width={0}
          height={0}
          // style={{}} // optional
        />

        <Image
          src="/model-1.png"
          alt="ice-cloud-model"
          // animation="fade-in .5s cubic-bezier(.29,.65,.58,1) forwards;"
          // width={{ xs: "100%", md: "48%" }}
          // objectFit="cover"
          // maxW="700px"
          // width="700px"
          // height="700px"
          loading="eager"
          width={100}
          height={100}
        />

        {/* <Image src="/ice-hero.gif" alt="ice-cloud" /> */}
      </Flex>

      <Container color="white" pt="48px">
        <Text
          mb="30px"
          textAlign={{ xs: "center", xl: "center" }}
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
          textAlign={{ xs: "center", xl: "center" }}
        >
          Sound of Silence
        </Text>
        <Image
          src="/hardware.gif"
          alt="ice-earbud-image"
          priority
          width={100}
          height={100}
        />
      </Container>
      <Flex
        justifyContent="center"
        // alignItems="center"
        wrap={{ xs: "wrap", xl: "nowrap" }}
        px={{ xs: "0", xl: "64px" }}
      >
        <Image
          src="/model-2.png"
          alt="ice-cloud-model"
          // width={}
          // animation="fade-in .5s cubic-bezier(.29,.65,.58,1) forwards;"
          // width={{ xs: "100%", md: "48%" }}
          // objectFit="cover"
          // maxW="700px"
          // loading="eager"
          width={100}
          height={100}
          priority
        />
        <Image
          src="/touch-details.png"
          alt="ice-touch-details-image"
          // width={{ xs: "100%", md: "50%" }}
          // height="100%"
          // alignSelf="center"
          width={100}
          height={100}
          loading="eager"
          priority
        />

        {/* <Image src="/ice-hero.gif" alt="ice-cloud" /> */}
      </Flex>

      <HeroProductWrapper />
      {/* <Image src="/hero-footer.png" alt="ice-cloud" /> */}
    </>
  );
};

export default Product;
