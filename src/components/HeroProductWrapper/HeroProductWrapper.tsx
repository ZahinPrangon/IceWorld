/* eslint-disable import/no-extraneous-dependencies */
import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { AiTwotoneSound } from "react-icons/ai";
import { BsBluetooth, BsSoundwave } from "react-icons/bs";
import { HiPlay } from "react-icons/hi";
import { IoIosMic } from "react-icons/io";
import { RiBatteryChargeLine } from "react-icons/ri";

const HeroProductFeatures = [
  {
    id: 6,
    description: "Active Noise Cancellation",
    icon: <BsSoundwave size="30px" color="white" />,
  },
  {
    id: 3,
    description: "Powerful 10 mm dynamic drivers",
    icon: <AiTwotoneSound size="30px" color="white" />,
  },
  {
    id: 2,
    description: "Up to 24 hours of playtime",
    icon: <RiBatteryChargeLine size="30px" color="white" />,
  },
  {
    id: 3,
    description: "Bluetooth v5.3",
    icon: <BsBluetooth size="30px" color="white" />,
  },
  {
    id: 4,
    description: "6+ Hrs Playtime Continuously",
    icon: <HiPlay size="30px" color="white" />,
  },
  {
    id: 5,
    description: "Dual Mic Clarity",
    icon: <IoIosMic size="30px" color="white" />,
  },
];
const HeroProductWrapper = () => {
  return (
    <Grid
      justifyContent="center"
      alignItems="center"
      py="30px"
      px="20px"
      gap="8px"
      color="white"
      mt="24px"
      backgroundColor="#000F15"
      templateColumns={{ md: "repeat(6, 1fr)" }}
    >
      {HeroProductFeatures.map((feature) => (
        <GridItem key={feature.id} justifyContent="center" alignItems="center">
          <Flex
            alignItems="center"
            justifyContent="space-between"
            flexDirection={{ xs: "row", md: "column" }}
            fontSize={{ xs: "10px", md: "12px" }}
            letterSpacing="0.05em"
            textAlign="center"
            gap={{ xs: "20px", md: "4px" }}
            fontWeight="200"
          >
            <Text textAlign="center">{feature.icon}</Text>
            <Text textAlign="center">{feature.description}</Text>
          </Flex>
        </GridItem>
      ))}
    </Grid>
  );
};

export default HeroProductWrapper;
