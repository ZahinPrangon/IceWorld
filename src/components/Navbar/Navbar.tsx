/* eslint-disable react/no-unused-prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */

"use client";

import { Link } from "@chakra-ui/next-js";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";

// eslint-disable-next-line import/no-absolute-path
import Logo from "/public/logo.png";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  cartSelectors,
  onCloseCart,
  onCloseMenu,
  onOpenCart,
  onOpenMenu,
} from "@/store/cart.slice";

const Links = [
  {
    id: 2,
    navName: "aboutUs",
    name: <RxHamburgerMenu size="30px" />,
  },
  {
    id: 1,
    navName: "checkout",
    name: <HiOutlineShoppingBag size="30px" />,
    href: "/checkout",
  },
];

type NavLinkProps = {
  href?: string;
  name: string | JSX.Element;
  navName: string;
};

const NavLink = (props: NavLinkProps) => {
  const dispatch = useAppDispatch();

  const isCartOpen = useAppSelector((state) => state.cart.isCartOpen);
  const isMenuOpen = useAppSelector((state) => state.cart.isMenuOpen);

  const calculateTotalQuantity = useAppSelector(
    cartSelectors.calculateTotalQuantity
  );

  const onClickNavbar = () => {
    if (props.navName === "checkout") {
      if (isCartOpen) {
        dispatch(onCloseCart());
      }
      dispatch(onOpenCart());
    } else if (props.navName === "aboutUs") {
      if (isMenuOpen) {
        dispatch(onCloseMenu());
      }
      dispatch(onOpenMenu());
    }
  };

  return (
    <Box
      // href={props.href}
      // className="hover-underline-animation"
      style={{
        color: "lightblue",
      }}
      _hover={{
        textDecoration: "none",
        border: "none",
      }}
      userSelect="none"
      position="relative"
      cursor="pointer"
      onClick={onClickNavbar}
    >
      {props.name}
      {props.navName === "checkout" && calculateTotalQuantity !== 0 && (
        <Text
          position="absolute"
          bottom="0"
          right="0"
          color="red"
          borderRadius="50%"
          height="15px"
          width="15px"
          // border="2px solid black"
          backgroundColor="#38B6FF"
        />
      )}
    </Box>
  );
};

export default function Navbar() {
  return (
    <Box background="black" px="1.5rem" py="0.5rem" zIndex="1">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack spacing={8} alignItems="center">
          <Link
            href="/"
            variant="unstyled"
            _hover={{
              textDecoration: "none",
              border: "none",
            }}
          >
            {/* < */}
            <Image
              src={Logo}
              alt="IceWorld"
              width="70"
              height="70"
              className="hover:no-underline"
              priority
            />
          </Link>
        </HStack>
        {/* <Hide below="md"> */}
        <HStack as="nav" spacing="12px">
          {Links.map((link) => (
            <NavLink
              key={link.id}
              href={link.href}
              name={link.name}
              navName={link.navName}
            />
          ))}
        </HStack>
        {/* </Hide> */}

        {/* <Show below="md">
          <Link
            href="/products/ice"
            _hover={{
              textDecoration: "none",
              border: "none",
            }}
            userSelect="none"
          >
            <BsEarbuds color="white" size="30px" />
          </Link>
        </Show> */}
      </Flex>
    </Box>
  );
}
