import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { BsBluetooth, BsSoundwave } from "react-icons/bs";
import { HiPlay } from "react-icons/hi";
import { IoIosMic } from "react-icons/io";
import { MdOutlineTouchApp } from "react-icons/md";
import { RiBatteryChargeLine } from "react-icons/ri";

const HeroProductFeatures = [
  {
    id: 1,
    description: "Bluetooth v5.3",
    icon: <BsBluetooth size="30px" color="white" />,
  },
  {
    id: 2,
    description: "ENC + Dual Mic Clarity",
    icon: <IoIosMic size="30px" color="white" />,
  },
  {
    id: 3,
    description: "30 hours of playtime",
    icon: <RiBatteryChargeLine size="30px" color="white" />,
  },
  {
    id: 4,
    description: "6+ Hrs Non-Stop",
    icon: <HiPlay size="30px" color="white" />,
  },
  {
    id: 5,
    description: "10 mm dynamic drivers",
    icon: <BsSoundwave size="30px" color="white" />,
  },
  {
    id: 6,
    description: "Smart Touch Controls",
    icon: <MdOutlineTouchApp size="30px" color="white" />,
  },
];

const HeroProductWrapper = () => {
  return (
    <Grid
      // pb="50px"
      mb="150px"
      justifyContent="center"
      alignItems="center"
      p={{ xs: "0px 20px 0px 20px", md: "30px 20px 30px 30px" }}
      gap="16px"
      color="white"
      templateColumns={{ xs: "repeat(2, 1fr)", md: "repeat(2, 1fr)" }} // Set 2 columns for both xs and md screen sizes
      // templateRows="repeat(6, 1fr)" // Define 6 rows
    >
      {HeroProductFeatures.map((feature) => (
        <GridItem key={feature.id} justifyContent="center" alignItems="center">
          <Flex
            alignItems="center"
            flexDirection={{ xs: "column", md: "column" }}
            fontSize={{ xs: "13px", md: "14px" }}
            letterSpacing="0.05em"
            textAlign="center"
            gap={{ xs: "20px", md: "4px" }}
            fontWeight="500"
            pb="15px"
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
