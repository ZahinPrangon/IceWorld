import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

import Product from "@/components/Product/Product";

const Page = () => {
  return (
    <ChakraProvider>
      <Product />
    </ChakraProvider>
  );
};
export default Page;
