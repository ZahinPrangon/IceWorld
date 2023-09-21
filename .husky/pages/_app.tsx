import "../styles/global.css";

import { Flex } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import Layout from "@/components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Layout>
        <Flex
          position="relative"
          minH="100%"
          minW="100%"
          margin="0 auto"
          flexDir="column"
        >
          {/* <ClerkProvider {...pageProps}> */}
          {/* <Component {...pageProps} /> */}
          {/* </ClerkProvider> */}
        </Flex>
      </Layout>
    </main>
  );
}
export default MyApp;
