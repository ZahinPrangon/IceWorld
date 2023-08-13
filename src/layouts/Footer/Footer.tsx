/* eslint-disable import/no-absolute-path */
import {
  Box,
  Collapse,
  Flex,
  Grid,
  GridItem,
  Hide,
  Show,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { GrFacebook, GrInstagram } from "react-icons/gr";

import Logo from "/public/logo.png";
// eslint-disable-next-line import/no-absolute-path

const listingStyles = {
  fontSize: "12px",
  letterSpacing: "0.644px",
  lineHeight: "16px",
  fontWeight: "200",
  cursor: "pointer",
};

const listingHeaderStyles = {
  fontSize: "0.8em",
  letterSpacing: "0.3em",
  fontWeight: "400",
  lineHeight: "14px",
};

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
    icon: <GrFacebook size="20px" />,
  },
  {
    id: 2,
    name: "Instagram",
    href: "https://www.facebook.com/icebd.official",
    icon: <GrInstagram size="20px" />,
  },
];

const CollapsibleFooter = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { isOpen: isOpen2, onToggle: onToggle2 } = useDisclosure();
  const { isOpen: isOpen3, onToggle: onToggle3 } = useDisclosure();

  return (
    <Box pb="80px">
      <Box px="16px">
        <Flex
          onClick={onToggle}
          justifyContent="space-between"
          p="15px 10px 15px 0px"
          alignItems="center"
          borderBottom="1px solid white"
          {...listingHeaderStyles}
        >
          <Text>{FooterColumn[0]?.name}</Text>
          {isOpen ? <BsChevronUp /> : <BsChevronDown />}
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <Box p="8px" {...listingStyles}>
            {FooterColumn[0]?.listings.map((listing) => (
              <Box color="white" key={listing.id} p="6px">
                {listing.name}
              </Box>
            ))}
          </Box>
        </Collapse>

        <Flex
          onClick={onToggle2}
          justifyContent="space-between"
          p="15px 10px 15px 0px"
          alignItems="center"
          borderBottom="1px solid white"
          {...listingHeaderStyles}
        >
          <Text>{FooterColumn[1]?.name}</Text>
          {isOpen2 ? <BsChevronUp /> : <BsChevronDown />}
        </Flex>
        <Collapse in={isOpen2} animateOpacity>
          <Box p="8px" {...listingStyles}>
            {FooterColumn[1]?.listings.map((listing) => (
              <Box color="white" key={listing.id} p="6px">
                {listing.name}
              </Box>
            ))}
          </Box>
        </Collapse>

        <Flex
          onClick={onToggle3}
          justifyContent="space-between"
          p="15px 10px 15px 0px"
          alignItems="center"
          borderBottom="1px solid white"
          {...listingHeaderStyles}
        >
          <Text>Follow Us</Text>
          {isOpen3 ? <BsChevronUp /> : <BsChevronDown />}
        </Flex>
        <Collapse in={isOpen3} animateOpacity>
          <Box p="8px" {...listingStyles}>
            {Socials.map((listing) => (
              <Box color="white" key={listing.id} p="6px">
                {listing.name}
              </Box>
            ))}
          </Box>
        </Collapse>
      </Box>
      {/* <Flex
        justifyContent="center"
        flexDir="column"
        alignItems="center"
        mt="32px"
      >
        <Text
          pt="15px"
          fontSize="0.8em"
          letterSpacing="0.3em"
          // borderBottom="1px solid white"
        >
          Follow Us
        </Text>
      </Flex> */}
    </Box>
  );
};
const Footer = () => {
  return (
    <Box
      pt={{ xs: "45px", md: "90px" }}
      pb={{ md: "60px" }}
      color="white"
      width="100%"
      bottom="0px"
      height="20rem"
    >
      <Hide below="md">
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
                <Text {...listingHeaderStyles} pb="30px">
                  {column.name}
                </Text>
                {column.listings.map((listing) => (
                  <Box
                    color="white"
                    key={listing.id}
                    {...listingStyles}
                    pb="20px"
                  >
                    {listing.name}
                  </Box>
                ))}
              </Flex>
            </GridItem>
          ))}
          <GridItem colSpan={1}>
            <Text {...listingHeaderStyles} pb="30px">
              Follow Us
            </Text>
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
      </Hide>
      <Show below="md">
        <CollapsibleFooter />
      </Show>
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
