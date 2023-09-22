"use client";

import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";

import NavSidebar from "@/components/NavSidebar/NavSidebar";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { onCloseCart, onCloseMenu } from "@/store/cart.slice";

const page = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    phone: "",
  });
  const isCartOpen = useAppSelector((state) => state.cart.isCartOpen);
  const isMenuOpen = useAppSelector((state) => state.cart.isMenuOpen);
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <VStack
        spacing={4}
        fontSize="17px"
        lineHeight="21px"
        fontWeight={500}
        gap="30px"
        justifyContent="center"
        px="50px"
        pt="200px"
      >
        <Heading color="white">Track your order</Heading>
        <FormControl>
          <FormLabel color="white">Phone Number</FormLabel>
          <Input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </FormControl>
        <Button
          // type="submit"
          mx="40px"
          mb="20px"
          // onClick={handleCheckout}
          colorScheme="blue"
          // isLoading={isLoading}
          loadingText="Confirming"
          justifyContent="center"
        >
          Submit
        </Button>
      </VStack>
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
    </>
  );
};

export default page;
