/* eslint-disable consistent-return */
/* eslint-disable react-hooks/rules-of-hooks */
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
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

import CartProduct from "@/components/CartProduct/CartProduct";
import CheckoutProductList from "@/components/CheckoutProductList/CheckoutProductList";
import { useAppSelector } from "@/hooks/redux";

const checkout = () => {
  const selectedProducts = useAppSelector(
    (state) => state.cart.selectedProducts,
  );
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    city: "",
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // console.log(formData); // You can do something with the collected data here
  };

  const phoneNumber = "+923335067653"; // Replace with the recipient's phone number
  const message = "Hello, this is my message!"; // Replace with your message

  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  return (
    <Box height="100%">
      {Object.keys(selectedProducts).length === 0 ? (
        <Flex
          pt="20px"
          color="white"
          justifyContent="center"
          alignItems="center"
          my="auto"
        >
          Your cart is currently empty.
        </Flex>
      ) : (
        <>
          <Show below="md">
            <CheckoutProductList />
          </Show>
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
                  fontSize="17px"
                  lineHeight="21px"
                  fontWeight={500}
                >
                  Checkout
                </Text>
                <Box p={1}>
                  <form onSubmit={handleSubmit}>
                    <VStack
                      spacing={4}
                      fontSize="17px"
                      lineHeight="21px"
                      fontWeight={500}
                    >
                      <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Mobile Number</FormLabel>
                        <Input
                          type="tel"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleInputChange}
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>City</FormLabel>
                        <Input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                        />
                      </FormControl>
                      <Button type="submit" colorScheme="blue">
                        Submit
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
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Send WhatsApp Message
            </a>{" "}
          </Grid>
        </>
      )}
    </Box>
  );
};

export default checkout;
