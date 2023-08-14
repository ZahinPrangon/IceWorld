/* eslint-disable import/no-extraneous-dependencies */

"use client";

import { Link } from "@chakra-ui/next-js";
import { Box, Flex, Hide, HStack, Show } from "@chakra-ui/react";
import Image from "next/image";
import { BsEarbuds } from "react-icons/bs";

// eslint-disable-next-line import/no-absolute-path
import Logo from "/public/logo.png";

const Links = [
  {
    id: 1,
    name: "Earbuds",
    href: "/products/ice",
  },
];

type NavLinkProps = {
  href: string;
  name: string;
};

const NavLink = (props: NavLinkProps) => {
  return (
    <Link
      href={props.href}
      className="hover-underline-animation"
      style={{
        color: "lightblue",
      }}
      _hover={{
        textDecoration: "none",
        border: "none",
      }}
    >
      {props.name}
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
              // style={{
              //   textDecoration: "none",
              //   &:hover: {
              //     color: "lightblue",
              //   },
              // }}
            />
          </Link>
        </HStack>
        <Hide below="md">
          <HStack as="nav" spacing="12px">
            {Links.map((link) => (
              <NavLink key={link.id} href={link.href} name={link.name} />
            ))}
          </HStack>
        </Hide>

        <Show below="md">
          <BsEarbuds color="white" size="30px" />
        </Show>
      </Flex>
    </Box>
  );
}
