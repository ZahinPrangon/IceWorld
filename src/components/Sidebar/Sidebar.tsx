/* eslint-disable consistent-return */
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

import { useAppSelector } from "@/hooks/redux";
import { cartSelectors } from "@/store/cart.slice";

import CartProduct from "../CartProduct/CartProduct";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};
const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const router = useRouter();

  const selectedProducts = useAppSelector(
    (state) => state.cart.selectedProducts
  );
  const getTotalPrice = useAppSelector(cartSelectors.calculateTotalPrice);

  const onClickCheckout = () => {
    router.push("/checkout");
  };
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      allowPinchZoom
      size="sm"
    >
      <DrawerOverlay />
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
          borderBottom="1px solid rgb(0, 120, 86)"
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

          {/* <Input placeholder="Type here..." /> */}
          {Object.keys(selectedProducts).length !== 0 && (
            <Box mx="20px">
              <Text
                fontWeight="400"
                lineHeight="1.2"
                fontSize={{
                  xs: "16px",
                  // md: "25.5px",
                }}
                py="20px"
              >
                Order Notes
              </Text>
              <Textarea pt="20px" border="1px solid rgb(0, 120, 86)" />
            </Box>
          )}
        </DrawerBody>

        {Object.keys(selectedProducts).length !== 0 && (
          <>
            <DrawerFooter
              p="30px"
              borderTop="1px solid rgb(0, 120, 86)"
              display="flex"
              justifyContent="space-between"
            >
              <Text>SubTotal</Text>
              <Text ml="auto">৳ {getTotalPrice}</Text>
            </DrawerFooter>
            <Button onClick={onClickCheckout}>Checkout</Button>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
