/* eslint-disable consistent-return */
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
import { useRouter } from "next/router";
import React from "react";

import { useAppDispatch } from "@/hooks/redux";
import { onCloseMenu } from "@/store/cart.slice";

type NavSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Links = [
  {
    id: 1,
    name: "About Us",
    href: "/about-us",
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
        <DrawerCloseButton />
        <DrawerHeader borderBottom="1px solid #38B6FF" pb="30px" mx="12px" />
        <DrawerBody mt="20px" px="20px" display="flex" justifyContent="center">
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
              onClick={() => {
                router.push(link.href);
                dispatch(onCloseMenu());
              }}
            >
              <Text py="15px">{link.name}</Text>
            </Flex>
          ))}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default NavSidebar;
