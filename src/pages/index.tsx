import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

import Homepage from "@/components/Homepage/Homepage";
import theme from "@/styles/theme";

const page = () => {
  return (
    <ChakraProvider theme={theme}>
      <Homepage />
    </ChakraProvider>
  );
};

export default page;
