/* eslint-disable prettier/prettier */
/* eslint-disable consistent-return */
import {
  Box,
  Collapse,
  Divider,
  Flex,
  HStack,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";

import { useAppSelector } from "@/hooks/redux";
import { cartSelectors } from "@/store/cart.slice";

type CheckoutProductListProps = {
  confirmOrderView: boolean;
};
const CheckoutProductList = (props: CheckoutProductListProps) => {
  const { isOpen, onToggle } = useDisclosure();
  const getTotalPrice = useAppSelector(cartSelectors.calculateTotalPrice);
  const selectedProducts = useAppSelector(
    (state) => state.cart.selectedProducts
  );
  const calculateTotalPrice = useAppSelector(cartSelectors.calculateTotalPrice);

  return (
    <Box>
      <Box background="rgb(17, 34, 39)">
        {!props.confirmOrderView && (
          <>
            <Flex
              onClick={onToggle}
              justifyContent="space-between"
              color="white"
              alignItems="center"
              p="1.8rem"
            >
              <Flex gap="10px" alignItems="center">
                <HiOutlineShoppingCart size="20px" />
                <Text>{isOpen ? "Hide" : "Show"} Order Summary</Text>
                {isOpen ? <BsChevronUp /> : <BsChevronDown />}
              </Flex>
              <Box>৳ {getTotalPrice + 100}</Box>
            </Flex>
            <Collapse in={isOpen} animateOpacity>
              <Box background="black" color="white" p="1.8rem">
                {Object.keys(selectedProducts).map((key) => {
                  const product = selectedProducts[key];
                  if (!product) return;
                  const cartProduct = product.product;
                  return (
                    <Flex
                      key={cartProduct.id}
                      alignItems="center"
                      justifyContent="space-between"
                      width="100%"
                      mb="16px"
                    >
                      <HStack>
                        <Box position="relative">
                          <Image
                            src={cartProduct.cartImage}
                            alt="cart-image"
                            w="64px"
                            h="64px"
                            border="1px solid #38B6FF"
                            borderRadius="10px"
                            p="3px"
                          />
                          <Text
                            position="absolute"
                            top="-9px"
                            right="-6px"
                            background="white"
                            color="black"
                            px="4px"
                            borderRadius="50%"
                            w="24px"
                            h="24px"
                            textAlign="center"
                          >
                            {product.quantity}
                          </Text>
                        </Box>
                        <Box pl="14px">
                          <Text
                            fontSize="14px"
                            lineHeight="21px"
                            fontWeight="500"
                          >
                            ICE Cloud
                          </Text>
                          <Text
                            color="#38B6FF"
                            fontSize="12px"
                            lineHeight="18px"
                          >
                            {cartProduct.lineupName}
                          </Text>
                        </Box>
                      </HStack>
                      <Text fontSize="14px" lineHeight="21px">
                        ৳ {cartProduct.price}
                      </Text>
                    </Flex>
                  );
                })}
                <Flex justifyContent="space-between">
                  <Text fontSize="17px" lineHeight="25.5px">
                    Subtotal
                  </Text>
                  <Text fontSize="14px" fontWeight="500" lineHeight="21px">
                    ৳ {calculateTotalPrice}
                  </Text>
                </Flex>
                <Flex justifyContent="space-between">
                  <Text fontSize="17px" lineHeight="25.5px">
                    Shipping
                  </Text>
                  <Text fontSize="14px" fontWeight="500" lineHeight="21px">
                    ৳ 100
                  </Text>
                </Flex>
                <Divider my="10px" />
                <Flex justifyContent="space-between">
                  <Text fontSize="17px" lineHeight="25.5px">
                    Total
                  </Text>
                  <Text fontSize="14px" fontWeight="500" lineHeight="21px">
                    ৳ {calculateTotalPrice + 100}
                  </Text>
                </Flex>
              </Box>
            </Collapse>
          </>
        )}
        {props.confirmOrderView && (
          <Box background="black" color="white" p="1.8rem">
            {Object.keys(selectedProducts).map((key) => {
              const product = selectedProducts[key];
              if (!product) return;
              const cartProduct = product.product;
              return (
                <Flex
                  key={cartProduct.id}
                  alignItems="center"
                  justifyContent="space-between"
                  width="100%"
                  mb="16px"
                >
                  <HStack>
                    <Box position="relative">
                      <Image
                        src={cartProduct.cartImage}
                        alt="cart-image"
                        w="64px"
                        h="64px"
                        border="1px solid #38B6FF"
                        borderRadius="10px"
                        p="3px"
                      />
                      <Text
                        position="absolute"
                        top="-9px"
                        right="-6px"
                        background="white"
                        color="black"
                        px="4px"
                        borderRadius="50%"
                        w="24px"
                        h="24px"
                        textAlign="center"
                      >
                        {product.quantity}
                      </Text>
                    </Box>
                    <Box pl="14px">
                      <Text fontSize="14px" lineHeight="21px" fontWeight="500">
                        ICE Cloud
                      </Text>
                      <Text color="#38B6FF" fontSize="12px" lineHeight="18px">
                        {cartProduct.lineupName}
                      </Text>
                    </Box>
                  </HStack>
                  <Text fontSize="14px" lineHeight="21px">
                    ৳ {cartProduct.price}
                  </Text>
                </Flex>
              );
            })}
            <Flex justifyContent="space-between">
              <Text fontSize="17px" lineHeight="25.5px">
                Subtotal
              </Text>
              <Text fontSize="14px" fontWeight="500" lineHeight="21px">
                ৳ {calculateTotalPrice}
              </Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text fontSize="17px" lineHeight="25.5px">
                Shipping
              </Text>
              <Text fontSize="14px" fontWeight="500" lineHeight="21px">
                ৳ 100
              </Text>
            </Flex>
            <Divider my="10px" />
            <Flex justifyContent="space-between">
              <Text fontSize="17px" lineHeight="25.5px">
                Total
              </Text>
              <Text fontSize="14px" fontWeight="500" lineHeight="21px">
                ৳ {calculateTotalPrice + 100}
              </Text>
            </Flex>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CheckoutProductList;
