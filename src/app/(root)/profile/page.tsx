/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */

"use client";

import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Show,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import React, { useEffect } from "react";

import ConfirmedOrderList from "@/components/ConfirmedOrderList/ConfirmedOrderList";
import NavSidebar from "@/components/NavSidebar/NavSidebar";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { onCloseCart, onCloseMenu } from "@/store/cart.slice";

const page = () => {
  const dispatch = useAppDispatch();
  const isCartOpen = useAppSelector((state) => state.cart.isCartOpen);
  const isMenuOpen = useAppSelector((state) => state.cart.isMenuOpen);
  const router = useRouter();
  const [orders, setOrders] = React.useState<any[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status !== "authenticated") {
      router.push("/login");
    }
  }, [status]);

  useEffect(() => {
    if (!session?.user?.email) return;
    setIsLoading(true);
    const payload = {
      email: session?.user?.email,
    };
    const apiEndpoint = "/api/track-user-orders";
    fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((response) => {
        setOrders(response.orders);
        setIsLoading(false);
      })
      .catch((_err) => {
        // setError(true);
        // setOrderConfirmed(false);
      })
      .finally(() => {
        setIsLoading(false);
        // setIsLoading(false);
      });
  }, []);

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
        <Button onClick={() => signOut()} variant="outlined" textAlign="center">
          LOG OUT
        </Button>
      </Flex>
      <Show below="md">
        <Box color="white" px="20px" pb="20px" pt="20px">
          <Text fontSize="24px">Order History</Text>
          <Divider my="10px" />
          {isLoading ? (
            <Spinner size="md" />
          ) : orders.length === 0 ? (
            <Text>You haven't placed any orders yet.</Text>
          ) : (
            <Box>
              {orders.length > 0 &&
                orders.map((x) => {
                  return <ConfirmedOrderList key={x.id} order={x} />;
                })}
            </Box>
          )}
        </Box>
        <Box color="white" px="20px">
          <Heading as="h1">Account details</Heading>
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
