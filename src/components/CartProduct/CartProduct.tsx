/* eslint-disable prettier/prettier */
import { Flex, Grid, GridItem, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

import { useAppDispatch } from "@/hooks/redux";
import { removeProduct, updateProduct } from "@/store/cart.slice";

type CartProductProps = {
  lineupName: string;
  quantity: number;
  price: number;
  image: string;
  productId: string;
};

const CartProduct = (props: CartProductProps) => {
  // console.log(props.lineupName);
  const computedPrice = props.price * props.quantity;
  const dispatch = useAppDispatch();

  const onDecrementClick = () => {
    if (props.quantity === 1) {
      dispatch(removeProduct({ productId: props.productId }));
    }
    dispatch(
      updateProduct({
        productId: props.productId,
        updateType: "DEC",
      })
    );
  };

  return (
    <Flex color="white" borderBottom="1px solid #38B6FF">
      {/* <Box position="relative"> */}
      <Image src={props.image} alt={props.lineupName} w="100px" h="100px" />
      <VStack justifyContent="center" gap="20px" alignItems="flex-start">
        <Text
          color="white"
          fontSize="16px"
          // letterSpacing="1px"
          lineHeight="19.5px"
        >
          {props.lineupName}
        </Text>
        <Grid
          maxW="100px"
          minW="80px"
          border="1px solid #38B6FF"
          templateColumns="repeat(3, 1fr)"
          justifyContent="center"
          height="24px"
          alignItems="center"
        >
          <GridItem
            userSelect="none"
            cursor="pointer"
            textAlign="center"
            _hover={{
              backgroundColor: "white",
              color: "black",
            }}
            onClick={onDecrementClick}
          >
            -
          </GridItem>
          <GridItem textAlign="center">{props.quantity}</GridItem>
          <GridItem
            userSelect="none"
            cursor="pointer"
            textAlign="center"
            _hover={{
              backgroundColor: "white",
              color: "black",
            }}
            onClick={() =>
              dispatch(
                updateProduct({
                  productId: props.productId,
                  updateType: "INC",
                })
              )
            }
          >
            +
          </GridItem>
        </Grid>
      </VStack>

      <Text
        textAlign="center"
        m="auto"
        fontSize="16px"
        letterSpacing="0.7px"
        lineHeight="14px"
        fontWeight="200"
      >
        ৳ {computedPrice}
      </Text>
    </Flex>
  );
};

export default CartProduct;
