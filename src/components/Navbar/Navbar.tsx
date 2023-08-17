/* eslint-disable import/no-extraneous-dependencies */

"use client";

import { Link } from "@chakra-ui/next-js";
import { Box, Flex, Hide, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { GiShoppingBag } from "react-icons/gi";

// eslint-disable-next-line import/no-absolute-path
import Logo from "/public/logo.png";
import { useAppSelector } from "@/hooks/redux";
import { cartSelectors } from "@/store/cart.slice";

const Links = [
  {
    id: 1,
    navName: "checkout",
    name: <GiShoppingBag size="30px" fill="white" />,
    href: "/checkout",
  },
];

type NavLinkProps = {
  href: string;
  name: string | JSX.Element;
  navName: string;
};

const NavLink = (props: NavLinkProps) => {
  const calculateTotalQuantity = useAppSelector(
    cartSelectors.calculateTotalQuantity
  );
  return (
    <Link
      href={props.href}
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
          backgroundColor="#00ffb7"
        />
      )}
    </Link>
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
        <Hide below="md">
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
        </Hide>

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
