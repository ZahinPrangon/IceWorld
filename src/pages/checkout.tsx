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
  Heading,
  Input,
  Show,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

import CartProduct from "@/components/CartProduct/CartProduct";
import { useAppSelector } from "@/hooks/redux";

const checkout = () => {
  const selectedProducts = useAppSelector(
    (state) => state.cart.selectedProducts
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
  return (
    <Box>
      {Object.keys(selectedProducts).length === 0 ? (
        <Text pt="20px" textAlign="center" color="white">
          Your cart is currently empty.
        </Text>
      ) : (
        <>
          <Show below="md">
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
          <Grid templateColumns="repeat(2, 1fr)">
            <GridItem>
              <Flex
                justifyContent={{ xs: "center" }}
                flexDirection="column"
                color="white"
                p="20px"
                mx={{ xs: "12px", md: "40px" }}
                // border="1px solid white"
                borderRadius="20px"
                // width={{ xs: "auto", md: "50%" }}
                // px=
              >
                <Heading>Checkout</Heading>
                <Box p={4}>
                  <form onSubmit={handleSubmit}>
                    <VStack spacing={4}>
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
          </Grid>
        </>
      )}
    </Box>
  );
};

export default checkout;
