"use client";

import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

type SectionProps = {
  title: string;
  subTitle: string;
  children?: React.ReactNode;
};
const Section = (props: SectionProps) => {
  return (
    <motion.div
      style={{
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        margin: "2.25rem 12px 2.25rem 12px",
        display: "flex",
        color: "white",
      }}
    >
      <Flex justifyContent="center" alignItems="center" gap="10px">
        <Image
          alt="logo"
          src="/logo.png"
          width={{ sm: "64px", md: "128px", lg: "256px" }}
          height={{ sm: "32px", md: "64px", lg: "64px" }}
        />
        <Text
          as="h1"
          // pb="1.25rem"
          fontSize={{ sm: "32px", md: "64px", lg: "64px" }}
          color="#38B6FF"
        >
          {props.title}
        </Text>
      </Flex>
      <Text
        as="h4"
        size="md"
        fontSize={{ md: "24px", lg: "32px" }}
        textAlign="center"
      >
        {props.subTitle}
      </Text>
      <Box mt="1.25rem">{props.children}</Box>
    </motion.div>
  );
};

export default Section;
