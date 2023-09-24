/* eslint-disable no-console */

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

import ConfirmedOrderList from "@/components/ConfirmedOrderList/ConfirmedOrderList";
import NavSidebar from "@/components/NavSidebar/NavSidebar";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { onCloseCart, onCloseMenu } from "@/store/cart.slice";

const page = () => {
  // const session = await getServerSession(authOptions);
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    order_number: "",
  });
  const [orders, setOrders] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const isCartOpen = useAppSelector((state) => state.cart.isCartOpen);
  const isMenuOpen = useAppSelector((state) => state.cart.isMenuOpen);
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleApi = () => {
    setIsLoading(true);
    const payload = {
      orderNumber: formData.order_number,
    };
    const apiEndpoint = "/api/track-order";
    fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((response) => {
        setOrders(response.orders);
      })
      .catch((_err) => {
        // setError(true);
        // setOrderConfirmed(false);
      })
      .finally(() => {
        // setIsLoading(false);
        setIsLoading(false);
      });
  };

  const onClickSubmit = () => {
    if (formData.order_number.length === 0) return;
    handleApi();
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
        pt="30px"
      >
        <Heading color="white">Track your order</Heading>
        <FormControl>
          <FormLabel color="white">Order Number</FormLabel>
          <Input
            background="white"
            type="string"
            name="order_number"
            value={formData.order_number}
            onChange={handleInputChange}
          />
        </FormControl>
        <Button
          mx="40px"
          mb="20px"
          onClick={onClickSubmit}
          colorScheme="blue"
          isLoading={isLoading}
          loadingText="Confirming"
          justifyContent="center"
        >
          Submit
        </Button>
      </VStack>
      {orders.length > 0 &&
        orders.map((x) => {
          return <ConfirmedOrderList key={x.id} order={x} />;
        })}
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
