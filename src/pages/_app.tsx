import { ChakraProvider, Flex } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Raleway } from "next/font/google";

import Layout from "@/components/layout";

const poppins = Raleway({
  weight: "400",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <main className={poppins.className}>
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
