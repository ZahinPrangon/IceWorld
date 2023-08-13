/* eslint-disable import/no-named-as-default */
import "../styles/global.css";

import { ChakraProvider, Flex } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";
import React from "react";

import Footer from "@/layouts/Footer/Footer";
import theme from "@/styles/theme";

import Navbar from "./Navbar/Navbar";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        position="relative"
        minH="100%"
        flexDirection="column"
        backgroundColor="black"
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
};
export default Layout;
