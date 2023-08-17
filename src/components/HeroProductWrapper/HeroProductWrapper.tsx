/* eslint-disable import/no-extraneous-dependencies */
import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { AiTwotoneSound } from "react-icons/ai";
import { BsBluetooth, BsSoundwave } from "react-icons/bs";
import { HiPlay } from "react-icons/hi";
import { IoIosMic } from "react-icons/io";
import { MdOutlineTouchApp } from "react-icons/md";
import { RiBatteryChargeLine } from "react-icons/ri";

const HeroProductFeatures = [
  {
    id: 2,
    description: "Up to 24 hours of playtime",
    icon: <RiBatteryChargeLine size="35px" color="white" />,
  },
  {
    id: 4,
    description: "6+ Hrs Playtime Continuously",
    icon: <HiPlay size="35px" color="white" />,
  },

  {
    id: 3,
    description: "Powerful 10 mm dynamic drivers",
    icon: (
      <AiTwotoneSound
        size="30px"
        color="white"
        style={{
          marginLeft: "3px",
        }}
      />
    ),
  },
  {
    id: 6,
    description: "Environmental Noise Cancellation",
    icon: <BsSoundwave size="35px" color="white" />,
  },
  {
    id: 3,
    description: "Bluetooth v5.3",
    icon: (
      <BsBluetooth
        size="30px"
        color="white"
        style={{
          marginLeft: "3px",
        }}
      />
    ),
  },

  {
    id: 5,
    description: "Dual Mic Clarity",
    icon: <IoIosMic size="35px" color="white" />,
  },
  {
    id: 6,
    description: "Smart Touch Controls",
    icon: <MdOutlineTouchApp size="35px" color="white" />,
  },
];
const HeroProductWrapper = () => {
  return (
    <Grid
      justifyContent="center"
      alignItems="center"
      py="30px"
      px={{ xs: "40px", md: "60px" }}
      gap="16px"
      color="white"
      backgroundColor="#000F15"
      templateColumns={{ xs: "repeat(1, 1fr)", md: "repeat(6, 1fr)" }}
    >
      {HeroProductFeatures.map((feature) => (
        <GridItem key={feature.id} justifyContent="center" alignItems="center">
          <Flex
            alignItems="center"
            // justifyContent="space-between"
            flexDirection={{ xs: "row", md: "column" }}
            fontSize={{ xs: "11px", md: "14px" }}
            letterSpacing="0.05em"
            textAlign="center"
            gap={{ xs: "24px", md: "4px" }}
            fontWeight="500"
          >
            <Text textAlign="left">{feature.icon}</Text>
            <Text textAlign={{ xs: "center", md: "center" }}>
              {feature.description}
            </Text>
          </Flex>
        </GridItem>
      ))}
    </Grid>
  );
};

export default HeroProductWrapper;
