/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable prettier/prettier */
/* eslint-disable consistent-return */
/* eslint-disable react-hooks/rules-of-hooks */

"use client";

import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Grid,
  GridItem,
  Input,
  Radio,
  RadioGroup,
  Show,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

import CartProduct from "@/components/CartProduct/CartProduct";
import CheckoutProductList from "@/components/CheckoutProductList/CheckoutProductList";
import NavSidebar from "@/components/NavSidebar/NavSidebar";
import Sidebar from "@/components/Sidebar/Sidebar";
import { SingleSelectDropdown } from "@/components/SingleSelectDropdown/SingleSelectDropdown";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { cartSelectors, onCloseCart, onCloseMenu } from "@/store/cart.slice";
import { bangladeshDistricts } from "@/utils/ProductDetailsMetaData";

type FormDataType = {
  name: string;
  mobile: number | undefined;
  address: string;
};

const checkout = () => {
  const { data: session, status } = useSession();
  const dispatch = useAppDispatch();
  const isCartOpen = useAppSelector((state) => state.cart.isCartOpen);
  const isMenuOpen = useAppSelector((state) => state.cart.isMenuOpen);
  const selectedProducts = useAppSelector(
    (state) => state.cart.selectedProducts
  );
  const calculateTotalPrice = useAppSelector(cartSelectors.calculateTotalPrice);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    mobile: undefined,
    address: "",
  });
  const [email, setEmail] = useState(session?.user?.email || "");

  const [error, setError] = useState(false);

  const onChangeEmail = () => {
    setEmail(session?.user?.email ?? "");
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const isAuthenticated = status === "authenticated";

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
      totalPrice: calculateTotalPrice,
    };
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
    <Box>
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
          <Flex
            color="white"
            pt="10px"
            px="12px"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text
              px={1}
              pt="20px"
              mb={1}
              fontSize="21px"
              lineHeight="24px"
              fontWeight={500}
              alignSelf="left"
            >
              Contact
            </Text>
            {!isAuthenticated && (
              <Text fontSize="14px">
                Have an account?{" "}
                <Link href="/login" color="#38B6FF">
                  Login
                </Link>
              </Text>
            )}
          </Flex>
          <Box px="12px" pt="10px" color="white">
            <FormControl isRequired>
              <Input
                type="email"
                name="email"
                value={email}
                disabled={isAuthenticated}
                onChange={onChangeEmail}
                placeholder="Email"
              />
            </FormControl>
          </Box>
          <Grid templateColumns={{ xs: "auto", md: "repeat(2, 1fr)" }}>
            <GridItem>
              <Flex
                justifyContent={{ xs: "center" }}
                flexDirection="column"
                color="white"
                mx={{ xs: "12px", md: "40px" }}
                borderRadius="20px"
              >
                <Text
                  px={1}
                  pt="20px"
                  mb={1}
                  fontSize="21px"
                  lineHeight="24px"
                  fontWeight={500}
                  alignSelf="left"
                >
                  Delivery
                </Text>
                <Box p={1} pt="12px">
                  <VStack
                    spacing={4}
                    fontSize="17px"
                    lineHeight="21px"
                    fontWeight={500}
                    gap="15px"
                  >
                    <FormControl isRequired>
                      <Input
                        placeholder="Name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <Input
                        placeholder="Mobile Number"
                        type="number"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <Textarea
                        placeholder="Street Address"
                        name="streetAddress"
                        value={formData.address}
                        onChange={handleInputChange}
                      />
                    </FormControl>
                    <Flex gap="20px">
                      <Input
                        placeholder="Floor No"
                        type="number"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                      />
                      <Input
                        placeholder="Apartment No"
                        type="number"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                      />
                    </Flex>
                    <SingleSelectDropdown
                      options={bangladeshDistricts}
                      onHandleChange={() => {}}
                    />
                  </VStack>
                </Box>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex
                justifyContent={{ xs: "center" }}
                flexDirection="column"
                color="white"
                mx={{ xs: "12px", md: "40px" }}
                borderRadius="20px"
              >
                <Text
                  px={1}
                  pt="20px"
                  mb={2}
                  fontSize="21px"
                  lineHeight="24px"
                  fontWeight={500}
                  alignSelf="left"
                >
                  Payment
                </Text>
                <RadioGroup value="1">
                  <Stack direction="column" ml="4px" mb={4}>
                    <Radio value="1">Cash on delivery</Radio>
                  </Stack>
                </RadioGroup>
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
