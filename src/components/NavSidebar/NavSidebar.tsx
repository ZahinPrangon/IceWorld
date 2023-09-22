/* eslint-disable consistent-return */

"use client";

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { SocialIcon } from "react-social-icons";

import { useAppDispatch } from "@/hooks/redux";
import { onCloseMenu } from "@/store/cart.slice";

type NavSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Links = [
  {
    id: 5,
    name: "Products",
    href: "/ice-cloud",
  },
  {
    id: 2,
    name: "Orders",
    href: "/orders",
  },
  {
    id: 3,
    name: "Cart",
    href: "/checkout",
  },
  {
    id: 1,
    name: "About Us",
    href: "/about-us",
  },
  {
    id: 4,
    name: "Contact Us",
    href: "/contact-us",
  },
];

const NavSidebar = ({ isOpen, onClose }: NavSidebarProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      allowPinchZoom
      size={{ xs: "xs", md: "sm" }}
    >
      <DrawerOverlay />
      <DrawerContent
        background="black"
        color="white"
        fontWeight="200"
        lineHeight="18.2px"
        fontSize="14px"
      >
        <DrawerCloseButton autoFocus={false} />
        <DrawerHeader borderBottom="1px solid #38B6FF" pb="30px" mx="12px" />
        <DrawerBody mt="20px" px="20px" display="flex" flexDir="column">
          {Links.map((link) => (
            <Flex
              justifyContent="start"
              alignItems="center"
              mb="20px"
              key={link.id}
              fontSize="1.4em"
              fontWeight="200"
              letterSpacing="0.05em"
              lineHeight="24px"
              cursor="pointer"
              height="fit-content"
              width="fit-content"
              onClick={() => {
                router.push(link.href);
                dispatch(onCloseMenu());
              }}
            >
              <Text py="15px">{link.name}</Text>
            </Flex>
          ))}
          <Flex flexDir="row" gap="30px" mt="60px" justifyContent="center">
            <Flex gap="30px" cursor="pointer">
              <SocialIcon
                network="instagram"
                style={{
                  height: "40px",
                  width: "40px",
                }}
              />
            </Flex>
            <Flex gap="30px" cursor="pointer">
              <SocialIcon
                network="facebook"
                style={{
                  height: "40px",
                  width: "40px",
                }}
              />
            </Flex>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default NavSidebar;
