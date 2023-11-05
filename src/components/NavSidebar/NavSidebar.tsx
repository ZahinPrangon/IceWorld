/* eslint-disable consistent-return */

"use client";

import { Link } from "@chakra-ui/next-js";
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
import { useSession } from "next-auth/react";
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

const Socials = [
  {
    id: 1,
    name: "Facebook",
    href: "https://www.facebook.com/icelagbe",
    icon: (
      <SocialIcon
        network="facebook"
        style={{
          height: "40px",
          width: "40px",
          cursor: "pointer",
        }}
      />
    ),
  },
  {
    id: 2,
    name: "Instagram",
    href: "https://www.instagram.com/icelagbe",
    icon: (
      <SocialIcon
        network="instagram"
        style={{
          height: "40px",
          width: "40px",
          cursor: "pointer",
        }}
      />
    ),
  },
  {
    id: 2,
    name: "WhatsApp",
    href: "https://api.whatsapp.com/send?phone=447599487949",
    icon: (
      <SocialIcon
        network="whatsapp"
        style={{
          height: "40px",
          width: "40px",
          cursor: "pointer",
        }}
      />
    ),
  },
];

const AuthLinks = [
  {
    id: 1,
    name: "Login",
    href: "/login",
  },
  {
    id: 2,
    name: "Create account",
    href: "/sign-up",
  },
];

const ProfileLinks = [
  {
    id: 1,
    name: "Profile",
    href: "/profile",
  },
];
const NavSidebar = ({ isOpen, onClose }: NavSidebarProps) => {
  const router = useRouter();
  const { status } = useSession();

  const dispatch = useAppDispatch();

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      allowPinchZoom
      size={{ xs: "xs", md: "sm" }}
      autoFocus={false}
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
              {status !== "authenticated"
                ? AuthLinks.map((auth) => (
                    <Text
                      onClick={() => {
                        router.push(auth.href);
                        dispatch(onCloseMenu());
                      }}
                      height="fit-content"
                      width="fit-content"
                      key={auth.id}
                    >
                      {auth.name}
                    </Text>
                  ))
                : ProfileLinks.map((auth) => (
                    <Text
                      onClick={() => {
                        router.push(auth.href);
                        dispatch(onCloseMenu());
                      }}
                      height="fit-content"
                      width="fit-content"
                      key={auth.id}
                    >
                      {auth.name}
                    </Text>
                  ))}
            </Flex>
          </Flex>
          <Flex flexDir="row" gap="30px" mt="60px" justifyContent="center">
            <Flex gap="30px" cursor="pointer">
              {Socials.map((social) => (
                <Link
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.icon}
                </Link>
              ))}
            </Flex>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default NavSidebar;
