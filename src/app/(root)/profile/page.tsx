/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */

"use client";

import { Box, Button, Flex, Heading, Show, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import React, { useEffect } from "react";

import NavSidebar from "@/components/NavSidebar/NavSidebar";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { onCloseCart, onCloseMenu } from "@/store/cart.slice";

const SuperUserList = ["icelagbe@gmail.com"];

const page = () => {
  const dispatch = useAppDispatch();
  const isCartOpen = useAppSelector((state) => state.cart.isCartOpen);
  const isMenuOpen = useAppSelector((state) => state.cart.isMenuOpen);
  const router = useRouter();
  const [_orders, setOrders] = React.useState<any[]>([]);
  const [_isLoading, setIsLoading] = React.useState(false);
  const { data: session, status } = useSession();
  // const
  useEffect(() => {
    if (status !== "authenticated") {
      router.push("/login");
    }
  }, [status]);

  const isSuperUser =
    session?.user?.email && SuperUserList.includes(session?.user?.email);

  const downloadCSV = async () => {
    try {
      // Make an API request to fetch the CSV data
      const response = await fetch("/api/orders");
      if (response.ok) {
        // Convert the response to CSV data
        const csvData = await response.text();

        // Create a Blob containing the CSV data
        const blob = new Blob([csvData], { type: "text/csv" });

        // Create a data URI for the Blob
        const url = window.URL.createObjectURL(blob);

        // Create an invisible anchor element to trigger the download
        const a = document.createElement("a");
        a.href = url;
        a.download = "orders.csv"; // Filename for the downloaded file
        a.style.display = "none";

        // Append the anchor element to the document and click it
        document.body.appendChild(a);
        a.click();

        // Remove the anchor element and revoke the data URI
        window.URL.revokeObjectURL(url);
      } else {
        console.error(
          "Failed to fetch CSV data:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error while fetching CSV data:", error);
    }
  };

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

        {isSuperUser && (
          <Button onClick={downloadCSV} variant="outlined" textAlign="center">
            Download Orders Sheet
          </Button>
        )}
        <Button onClick={() => signOut()} variant="outlined" textAlign="center">
          LOG OUT
        </Button>
        {/* <Box color="white" px="20px" pb="20px" pt="20px">
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
        </Box> */}
      </Flex>
      <Show below="md">
        {/* <Box color="white" px="20px" pb="20px" pt="20px">
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
        </Box> */}
        <Box color="white" px="20px" textAlign="center">
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
