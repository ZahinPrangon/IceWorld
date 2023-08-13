import { ChakraProvider, Flex } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import Layout from "@/components/layout";
import theme from "@/styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <main>
        <Layout>
          <Flex
            position="relative"
            minH="100%"
            minW="100%"
            margin="0 auto"
            flexDir="column"
          >
            <Component {...pageProps} />
          </Flex>
        </Layout>
      </main>
    </ChakraProvider>
  );
}
export default MyApp;
