/* eslint-disable import/no-named-as-default */

"use client";

import { ChakraProvider, Flex } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";
import React from "react";
import { Provider } from "react-redux";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/layouts/Footer/Footer";
import theme from "@/styles/theme";

import { store } from "../../store/index";

const ClientLayout = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Flex
          position="relative"
          minH="100vh"
          flexDirection="column"
          backgroundColor="black"
        >
          <main
            style={{
              paddingBottom: "4rem",
            }}
          >
            <Navbar />
            {children}
          </main>
          <Footer />
        </Flex>
      </ChakraProvider>
    </Provider>
  );
};
export default ClientLayout;
