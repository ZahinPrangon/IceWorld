/* eslint-disable react/no-unused-prop-types */
/* eslint-disable tailwindcss/no-custom-classname */
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BsFillBoxFill, BsTruck } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { GiSoundWaves } from "react-icons/gi";
import { TbShieldCheckFilled } from "react-icons/tb";

import { useAppDispatch } from "@/hooks/redux";
import { addToCart } from "@/store/cart.slice";

import * as pixel from "../../lib/fpixel";

type ProductDetailsProps = {
  description: string;
  selectedProduct: any;
  setSelectedProduct: (index: number) => void;
  details: any[];
  onOpen: () => void;
  buyNowButtonRef: any;
};

const productHeroFeatures = [
  {
    id: 1,
    title: "Now shipping all over Bangladesh",
    icon: <BsFillBoxFill size="20px" />,
  },
  {
    id: 2,
    title: "ENC",
    icon: <GiSoundWaves size="20px" />,
  },
  {
    id: 3,
    title: "6 months warranty",
    icon: <TbShieldCheckFilled size="20px" />,
  },
  {
    id: 4,
    title: "2 days delivery",
    icon: <FaShoppingCart size="20px" />,
  },
  {
    id: 5,
    title: "In stock, ready to ship",
    icon: <BsTruck size="20px" />,
  },
];
const ProductDetails = (props: ProductDetailsProps) => {
  const dispatch = useAppDispatch();
  // const handleProductPickerClick = (index: number) => {
  //   props.setSelectedProduct(index); // Update the selected product index
  // };

  const handleBuyNowClick = () => {
    props.onOpen();
    dispatch(addToCart({ selectedProduct: props.selectedProduct }));
    pixel.event("AddToCart", {
      content_ids: [props.selectedProduct.id],
      content_name: props.selectedProduct.lineupName,
      content_type: "Earbuds",
      currency: "BDT",
    });
  };

  return (
    <Flex flexDirection="column" my="auto" ref={props.buyNowButtonRef}>
      <Text as="h1" fontSize="32px" my="24px" textAlign="center">
        {props.selectedProduct.lineupName}
      </Text>
      {/* <Flex mb="14px" wrap="wrap" gap="10px" mt="10px" justifyContent="center">
        {props.details.map((detail, index) => {
          return (
            <ProductPicker
              index={index}
              key={detail.id}
              productName={detail.color}
              productId={detail.id}
              onClick={handleProductPickerClick}
              selected={props.selectedProduct.id === detail.id}
            />
          );
        })}
      </Flex> */}
      <Button
        onClick={handleBuyNowClick}
        border="1px solid white"
        minH="50px"
        backgroundColor="transparent"
        letterSpacing="1px !important"
        padding="13px 20px"
        borderRadius="30px"
        color="#38B6FF"
        textTransform="uppercase"
        variant="unstyled"
        mx="auto"
        display="flex"
        justifyContent="center"
        px="55px"
      >
        Buy Now
      </Button>

      <Box
        mt="48px"
        borderTop="1px solid white"
        borderBottom="1px solid white"
        pt="14px"
      >
        {productHeroFeatures.map((feature) => {
          return (
            <Flex
              key={feature.id}
              alignItems="center"
              mb="16px"
              gap="12px"
              wrap="wrap"
              ml="8px"
            >
              {feature.icon}
              <Text fontSize="14px">{feature.title}</Text>
            </Flex>
          );
        })}
      </Box>
    </Flex>
  );
};

export default ProductDetails;
