import { Box, Container, Flex, Image, Show } from "@chakra-ui/react";
import React from "react";

const page = () => {
  const dispatch = useAppDispatch();
  const isCartOpen = useAppSelector((state) => state.cart.isCartOpen);
  const isMenuOpen = useAppSelector((state) => state.cart.isMenuOpen);
  return (
    <Box>
      <Show below="md">
        <Image src="/about-us-landing.jpeg" alt="ice-world-about-us" />
        <Image src="/about-us-1.jpeg" alt="ice-world-about-us" />
        <Image src="/about-us-landing-2.jpeg" alt="ice-world-about-us" />
        <Image src="/about-us-2.jpeg" alt="ice-world-about-us" />
        <Image src="/about-us-landing-3.jpeg" alt="ice-world-about-us" />
        <Image src="/about-us-3.jpeg" alt="ice-world-about-us" />
      </Show>
      <Show above="md">
        <Flex direction="column" justifyContent="center" alignItems="center">
          <Image src="/about-us-landing.jpeg" alt="ice-world-about-us" />
          <Image src="/about-us-1.jpeg" alt="ice-world-about-us" />
          <Image src="/about-us-landing-2.jpeg" alt="ice-world-about-us" />
          <Image src="/about-us-2.jpeg" alt="ice-world-about-us" />
          <Image src="/about-us-landing-3.jpeg" alt="ice-world-about-us" />
          <Image src="/about-us-3.jpeg" alt="ice-world-about-us" />
        </Flex>
        <Container />
      </Show>

      <Sidebar
        isOpen={isCartOpen ?? false}
        onClose={() => {
          dispatch(onCloseCart());
        }}
      />
      <NavSidebar
        isOpen={isMenuOpen ?? false}
        onClose={() => {
          dispatch(onCloseMenu());
        }}
      />
    </Box>
  );
};

export default page;
function useAppSelector(arg0: (state: any) => any) {
  throw new Error("Function not implemented.");
}

function useAppDispatch() {
  throw new Error("Function not implemented.");
}
