import { Flex } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";
import React from "react";

import Footer from "@/layouts/Footer/Footer";

import Navbar from "./Navbar/Navbar";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Flex position="relative" minH="100%" flexDirection="column">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Flex>
  );
};
export default Layout;
