/* eslint-disable import/no-absolute-path */
import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { GrFacebook, GrInstagram } from "react-icons/gr";

import Logo from "/public/logo.png";
// eslint-disable-next-line import/no-absolute-path

const FooterColumn = [
  {
    id: 1,
    name: "Products",
    listings: [
      {
        id: 1,
        name: "Ice",
        href: "/products/ice",
      },
      {
        id: 2,
        name: "Coming Soon!",
        href: "/products/coming-soon",
      },
    ],
  },
  {
    id: 2,
    name: "About Us",
    listings: [
      {
        id: 1,
        name: "About Us",
        href: "/about-us",
      },
      {
        id: 2,
        name: "Contact Us",
        href: "/contact-us",
      },
    ],
  },
];

const Socials = [
  {
    id: 1,
    name: "Facebook",
    href: "https://www.facebook.com/icebd.official",
    icon: <GrFacebook size="40px" />,
  },
  {
    id: 2,
    name: "Instagram",
    href: "https://www.facebook.com/icebd.official",
    icon: <GrInstagram size="40px" />,
  },
];

const HeaderTextStyles = {
  fontSize: "20px",
  marginBottom: "24px",
  fontWeight: "700",
  paddingTop: "0px",
  lineHeight: "1.1",
};

const Footer = () => {
  return (
    <Box
      pt="90px"
      pb="60px"
      color="white"
      // background="white"
      // position="absolute"
      width="100%"
      bottom="0px"
      height="20rem"
      // borderTop="1px solid black"
    >
      <Grid templateColumns="repeat(4, 2fr)" gap={4} px="20px">
        <GridItem
          colSpan={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image src={Logo} width={60} height={60} alt="iceworld-logo" />
        </GridItem>
        {FooterColumn.map((column) => (
          <GridItem key={column.id} colSpan={1}>
            <Flex flexDirection="column">
              <Text {...HeaderTextStyles}>{column.name}</Text>
              {column.listings.map((listing) => (
                <Box color="white" key={listing.id}>
                  {listing.name}
                </Box>
              ))}
            </Flex>
          </GridItem>
        ))}
        <GridItem colSpan={1}>
          <Text {...HeaderTextStyles}>Follow Us</Text>
          <Flex flexDir="row" gap="6px">
            {Socials.map((social) => (
              <Box key={social.id} marginBottom="16px">
                <a href={social.href} target="_blank" rel="noreferrer">
                  {social.icon}
                </a>
              </Box>
            ))}
          </Flex>
        </GridItem>
      </Grid>
      <Flex
        justifyContent="center"
        position="absolute"
        bottom="0px"
        color="#757575"
        textAlign="center"
        alignItems="center"
        width="100%"
        lineHeight="1.6"
        marginTop="50px"
        marginBottom="30px"
        fontSize="0.75rem"
      >
        Copyright © 2023 Ice.{" "}
      </Flex>
    </Box>
  );
};

export default Footer;
