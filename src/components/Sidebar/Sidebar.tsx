/* eslint-disable prettier/prettier */
/* eslint-disable consistent-return */

"use client";

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { cartSelectors, onCloseCart } from "@/store/cart.slice";

import * as pixel from "../../lib/fpixel";
import CartProduct from "../CartProduct/CartProduct";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};
const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const selectedProducts = useAppSelector(
    (state) => state.cart.selectedProducts
  );
  const getTotalPrice = useAppSelector(cartSelectors.calculateTotalPrice);

  const onClickCheckout = () => {
    router.push("/checkout");
    dispatch(onCloseCart());
    pixel.event("Checkout", selectedProducts);
  };
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      allowPinchZoom
      size={{ xs: "xs", md: "sm" }}
      autoFocus={false}
    >
      <DrawerOverlay autoFocus={false} />
      <DrawerContent
        background="black"
        color="white"
        fontWeight="200"
        lineHeight="18.2px"
        fontSize="14px"
      >
        <DrawerCloseButton />
        <DrawerHeader
          fontWeight="400"
          lineHeight="1.2"
          fontSize={{
            xs: "16px",
            md: "25.5px",
          }}
          borderBottom="1px solid #38B6FF"
          mx="20px"
        >
          Cart
        </DrawerHeader>

        <DrawerBody>
          {Object.keys(selectedProducts).length === 0 && (
            <Text pt="20px" textAlign="center">
              Your cart is currently empty.
            </Text>
          )}
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
        </DrawerBody>

        {Object.keys(selectedProducts).length !== 0 && (
          <DrawerFooter
            // p="30px"
            // w="100%"
            borderTop="1px solid #38B6FF"
            // display="flex"
            // flexDir="column"
            justifyContent="space-between"
          >
            <Flex justifyContent="space-between" gap="15px">
              <Text>SubTotal</Text>
              <Text ml="auto">৳ {getTotalPrice}</Text>
            </Flex>
            <Button
              background="#38B6FF"
              color="white"
              onClick={onClickCheckout}
              letterSpacing="1px"
            >
              CHECKOUT
            </Button>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
