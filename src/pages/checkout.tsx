/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable prettier/prettier */
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
import React, { useRef, useState } from "react";

import CartProduct from "@/components/CartProduct/CartProduct";
import CheckoutProductList from "@/components/CheckoutProductList/CheckoutProductList";
import { useAppSelector } from "@/hooks/redux";

const checkout = () => {
  const selectedProducts = useAppSelector(
    (state) => state.cart.selectedProducts
  );
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

  // const phoneNumber = "+923335067653"; // Replace with the recipient's phone number
  // const message = "Hello, this is my message!"; // Replace with your message

  // const encodedMessage = encodeURIComponent(message);
  // const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  const formRef = useRef<any>();

  // const sendEmail = () => {
  //   // e.preventDefault();
  //   // emailjs
  //   //   .sendForm(
  //   //     "service_087ozop",
  //   //     "template_5smm84l",
  //   //     formRef.current,
  //   //     "T6MZxkJ3gNMvU1kGi"
  //   //   )
  //   //   .then(
  //   //     (result: any) => {
  //   //       console.log(result.text);
  //   //     },
  //   //     (error: any) => {
  //   //       console.log(error.text);
  //   //     }
  //   //   );
  // };

  const handleCheckout = () => {
    setIsLoading(true);
    // console.log(formData);
    // Simulate a 5-second delay
    setTimeout(() => {
      setIsLoading(false);
      // Perform actual checkout logic here
      setOrderConfirmed(true);
      // console.log("Checkout completed!");
    }, 5000);
  };
  return (
    <Box height="100vh">
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
                paddingTop={{ xs: "120px", md: "0px" }}
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
                      <Button
                        // type="submit"
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
          <Text color="white">Your Order has been confirmed</Text>
        </>
      )}
    </Box>
  );
};

export default checkout;
