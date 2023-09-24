"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

type OrderItem = {
  id: string;
  quantity: number;
  price: number;
  productId: string;
  orderId: string;
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    createdAt: string;
    updatedAt: string;
  };
};

type Order = {
  totalAmount: number;
  address: string;
  email: string;
  orderNumber: string;
  district: string;
  phone: string;
  customerName: string;
  createdAt: string;
  updatedAt: string;
  orderItems: OrderItem[];
};

type ConfirmedOrderListProps = {
  order: Order;
};
const ConfirmedOrderList = ({ order }: ConfirmedOrderListProps) => {
  const inputDate = new Date(order.createdAt);

  const months = [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec.",
  ];

  const year = inputDate.getFullYear();
  const month = months[inputDate.getMonth()];
  const day = inputDate.getDate();
  const formattedDate = `${month} ${day}, ${year}`;

  return (
    <Box px="16px" color="white" mb="200px">
      <Text mb="12px" fontSize="18px" lineHeight="1.2">
        Order details
      </Text>
      <Box
        p="20px"
        borderRadius="10px"
        border="1px solid white"
        fontSize="14px"
      >
        <Flex justifyContent="space-between">
          <Text>Order date</Text>
          <Text>{formattedDate}</Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Text>Order #</Text>
          <Text>{order.orderNumber}</Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Text>Order Total</Text>
          <Text>{order.totalAmount}</Text>
        </Flex>
      </Box>

      <Text mb="12px" fontSize="18px" lineHeight="1.2" pt="20px">
        Shipping details
      </Text>
      <Box
        p="20px"
        borderRadius="10px"
        border="1px solid white"
        fontSize="14px"
      >
        <Flex justifyContent="space-between">
          <Text>Name</Text>
          <Text>{order.customerName}</Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Text>Phone</Text>
          <Text>{order.phone}</Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Text>Email</Text>
          <Text>{order.email}</Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Text>Address</Text>
          <Text>{order.address}</Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Text>District</Text>
          <Text>{order.district}</Text>
        </Flex>
      </Box>
      <Text mb="12px" fontSize="18px" lineHeight="1.2" pt="20px">
        Order Items
      </Text>
      <Box
        p="20px"
        borderRadius="10px"
        border="1px solid white"
        fontSize="14px"
      >
        {order.orderItems.map((item) => (
          <Box key={item.id} mb="20px">
            <Flex justifyContent="space-between">
              <Text>Name</Text>
              <Text>{item.product.name}</Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text>Quantity</Text>
              <Text>{item.quantity}</Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text>Price</Text>
              <Text>{item.product.price}</Text>
            </Flex>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ConfirmedOrderList;
