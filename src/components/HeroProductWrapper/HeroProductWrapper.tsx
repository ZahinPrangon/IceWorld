/* eslint-disable import/no-extraneous-dependencies */
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { AiTwotoneSound } from "react-icons/ai";
import { BsSoundwave } from "react-icons/bs";
import { GiBattery100 } from "react-icons/gi";

const HeroProductFeatures = [
  {
    id: 1,
    description: "Active Noise Cancellation",
    icon: <BsSoundwave size="50px" color="white" />,
  },
  {
    id: 2,
    description: "Up to 24 hours of playtime",
    icon: <GiBattery100 size="50px" color="white" />,
  },
  {
    id: 3,
    description: "Powerful 10 mm dynamic drivers",
    icon: <AiTwotoneSound size="50px" color="white" />,
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
      backgroundColor="#000F15"
      // marginBottom="6rem"
      // mx="6px"
      // templateColumns={{ md: "repeat(3, 1fr)" }}
      templateColumns={{ md: "repeat(3, 1fr)" }}
    >
      {HeroProductFeatures.map((feature) => (
        <GridItem key={feature.id} justifyContent="center" alignItems="center">
          <Flex
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            fontSize="14px"
            textAlign="center"
            gap="4px"
          >
            {feature.icon}
            {feature.description}
          </Flex>
        </GridItem>
      ))}
    </Grid>
  );
};

export default HeroProductWrapper;
