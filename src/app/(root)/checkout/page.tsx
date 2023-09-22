/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable prettier/prettier */
/* eslint-disable consistent-return */
/* eslint-disable react-hooks/rules-of-hooks */

"use client";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Show,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";

import CartProduct from "@/components/CartProduct/CartProduct";
import CheckoutProductList from "@/components/CheckoutProductList/CheckoutProductList";
import NavSidebar from "@/components/NavSidebar/NavSidebar";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { onCloseCart, onCloseMenu } from "@/store/cart.slice";

type FormDataType = {
  name: string;
  mobile: number | undefined;
  address: string;
};

const checkout = () => {
  const dispatch = useAppDispatch();
  const isCartOpen = useAppSelector((state) => state.cart.isCartOpen);
  const isMenuOpen = useAppSelector((state) => state.cart.isMenuOpen);
  const selectedProducts = useAppSelector(
    (state) => state.cart.selectedProducts
  );
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    mobile: undefined,
    address: "",
  });

  const [error, setError] = useState(false);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const formRef = useRef<any>();

  function sendEmail(data: any) {
    setIsLoading(true);

    const productData = Object.keys(selectedProducts).map((productId) => {
      const selectedProduct = selectedProducts[productId];
      if (!selectedProduct) return;
      const { quantity, product } = selectedProduct;
      return {
        id: product.id,
        name: product.lineupName,
        quantity,
      };
    });

    const payload = {
      ...data,
      selectedProducts: productData,
      // products: selectedProducts.map((product) => ({
    };
    // console.log(JSON.stringify(data));
    const apiEndpoint = "/api/email";
    fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((_response) => {
        setOrderConfirmed(true);
        // dispatch(clearCart());
      })
      .catch((_err) => {
        setError(true);
        setOrderConfirmed(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const handleCheckout = () => {
    if (!formData.name || !formData.mobile || !formData.address) {
      return;
    }
    sendEmail(formData);
  };

  return (
    <Box height="100vh">
      {Object.keys(selectedProducts).length === 0 ? (
        <Flex
          color="white"
          justifyContent="center"
          alignItems="center"
          my="auto"
          pt="200px"
        >
          Your cart is currently empty.
        </Flex>
      ) : !orderConfirmed ? (
        <>
          <Show below="md">
            <CheckoutProductList confirmOrderView={false} />
          </Show>
          <Grid templateColumns={{ xs: "auto", md: "repeat(2, 1fr)" }}>
            <GridItem>
              <Flex
                justifyContent={{ xs: "center" }}
                flexDirection="column"
                color="white"
                mx={{ xs: "12px", md: "40px" }}
                borderRadius="20px"
                // paddingTop={{ xs: "120px", md: "0px" }}
              >
                <Text
                  px={1}
                  pt="20px"
                  mb={1}
                  fontSize="21px"
                  lineHeight="24px"
                  fontWeight={500}
                  alignSelf="center"
                >
                  Checkout
                </Text>
                <Box p={1}>
                  <form ref={formRef}>
                    <VStack
                      spacing={4}
                      fontSize="17px"
                      lineHeight="21px"
                      fontWeight={500}
                      gap="30px"
                    >
                      <FormControl isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel>Mobile Number</FormLabel>
                        <Input
                          type="number"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleInputChange}
                        />
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel>Address</FormLabel>
                        <Textarea
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                        />
                      </FormControl>
                      <Button
                        mx="40px"
                        mb="20px"
                        onClick={handleCheckout}
                        colorScheme="blue"
                        isLoading={isLoading}
                        loadingText="Confirming"
                      >
                        Checkout
                      </Button>
                    </VStack>
                  </form>
                </Box>
              </Flex>
            </GridItem>
            <GridItem>
              <Show above="md">
                {Object.keys(selectedProducts).map((key) => {
                  const product = selectedProducts[key];
                  if (!product) return;
                  const cartProduct = product.product;
                  return (
                    <CartProduct
                      lineupName={cartProduct.lineupName}
                      quantity={product.quantity}
                      price={cartProduct.price}
                      image={cartProduct.cartImage}
                      key={cartProduct.productId}
                      productId={cartProduct.id}
                    />
                  );
                })}
              </Show>
            </GridItem>
            {/* <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Send WhatsApp Message
            </a>{" "} */}
          </Grid>
        </>
      ) : (
        <>
          <Show below="md">
            <CheckoutProductList confirmOrderView />
          </Show>
          {error ? (
            <Text color="white" textAlign="center">
              Something went wrong
            </Text>
          ) : (
            <Text color="white" textAlign="center">
              Your order has been placed successfully. Welcome to ice world!
            </Text>
          )}
        </>
      )}
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

export default checkout;
