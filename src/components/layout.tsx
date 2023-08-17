/* eslint-disable import/no-named-as-default */
import { ChakraProvider, Flex } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";
import React from "react";
import { Provider } from "react-redux";

import Footer from "@/layouts/Footer/Footer";
import theme from "@/styles/theme";

import { store } from "../store/index";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};
export default Layout;
