/* eslint-disable tailwindcss/no-custom-classname */
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { BsFillBoxFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { TbShieldCheckFilled } from "react-icons/tb";

import { useAppDispatch } from "@/hooks/redux";
import { addToCart } from "@/store/cart.slice";

import ProductPicker from "../ProductPicker/ProductPicker";

type ProductDetailsProps = {
  description: string;
  // onClick: (index: number) => void;
  selectedProduct: any;
  setSelectedProduct: (index: number) => void;
  details: any[];
  onOpen: () => void;
};

const productHeroFeatures = [
  {
    id: 1,
    title: "Now shipping all over Bangladesh",
    icon: <BsFillBoxFill />,
  },
  {
    id: 2,
    title: "30 days free replacement",
    icon: <TbShieldCheckFilled />,
  },
  {
    id: 2,
    title: "2 days delivery",
    icon: <FaShoppingCart />,
  },
  {
    id: 2,
    title: "In stock, ready to ship",
    icon: <Box className="glowing-circle" mr="3px" ml="4px" />,
  },
];
const ProductDetails = (props: ProductDetailsProps) => {
  const dispatch = useAppDispatch();
  const handleProductPickerClick = (index: number) => {
    props.setSelectedProduct(index); // Update the selected product index
  };

  const handleBuyNowClick = () => {
    props.onOpen();
    dispatch(addToCart({ selectedProduct: props.selectedProduct }));
  };

  return (
    <Flex flexDirection="column" my="auto">
      <Heading as="h2" fontSize="32px" marginBottom="24px">
        {props.selectedProduct.lineupName}
      </Heading>
      <Box>
        <Heading
          as="h3"
          fontSize="16px"
          textAlign="center"
          mb="16px"
          letterSpacing="0.4em"
        >
          {props.description}
        </Heading>
      </Box>
      <Flex mb="14px" wrap="wrap" gap="10px" mt="10px">
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
      </Flex>
      <Button
        onClick={handleBuyNowClick}
        border="1px solid white"
        minH="50px"
        backgroundColor="transparent"
        letterSpacing="1px !important"
        padding="13px 20px"
        borderRadius="30px"
        color="white"
        textTransform="uppercase"
        variant="unstyled"
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
              gap="6px"
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
