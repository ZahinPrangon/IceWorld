"use client";

import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

type SectionProps = {
  title: string;
  subTitle: string;
  children: React.ReactNode;
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
      <Text
        as="h1"
        // pb="1.25rem"
        fontSize={{ sm: "32px", md: "64px", lg: "64px" }}
        color="#38B6FF"
      >
        {props.title}
      </Text>
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
