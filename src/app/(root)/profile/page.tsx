/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */

"use client";

import { Box, Button, Flex, Heading, Show, Text } from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import React from "react";

import NavSidebar from "@/components/NavSidebar/NavSidebar";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { onCloseCart, onCloseMenu } from "@/store/cart.slice";

const page = () => {
  const dispatch = useAppDispatch();
  const isCartOpen = useAppSelector((state) => state.cart.isCartOpen);
  const isMenuOpen = useAppSelector((state) => state.cart.isMenuOpen);
  // const router = useRouter();
  const { data: session } = useSession();

  // if (status !== "authenticated") {
  //   router.push("/login");
  // }
  // const fetchOrderHistory = () => {
  //   // const apiEndpoint = "/api/order-history";
  //   // const response = await fetch(apiEndpoint);
  //   // const data = await response.json();
  //   // console.log(data);
  //   return undefined;
  // };

  // const orderHistory = fetchOrderHistory();
  return (
    <Box>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        gap="20px"
        color="white"
      >
        <Heading as="h1" textAlign="center">
          My account
        </Heading>
        <Button
          onClick={() => signOut()}
          // display="flex"
          // justifyContent="center"
          variant="outlined"
          textAlign="center"
        >
          LOG OUT
        </Button>
      </Flex>
      <Show below="md">
        <Box color="white" px="20px" pb="20px" pt="20px">
          <Heading as="h3">Order History</Heading>
          {/* {orderHistory === undefined ? (
            <Text>You haven't placed any orders yet.</Text>
          ) : (
            <Text>Order history</Text>
          )} */}
        </Box>
        <Box color="white" px="20px">
          <Heading as="h3">Account details</Heading>
          <Text textTransform="uppercase">{session?.user?.name}</Text>
          <Text>{session?.user?.email}</Text>
        </Box>
      </Show>

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

export default page;
