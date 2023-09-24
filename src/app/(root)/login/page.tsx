/* eslint-disable no-console */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react/no-children-prop */
/* eslint-disable react-hooks/rules-of-hooks */

"use client";

import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
// import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import { useRef, useState } from "react";
import { SocialIcon } from "react-social-icons";

import NavSidebar from "@/components/NavSidebar/NavSidebar";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { onCloseCart, onCloseMenu } from "@/store/cart.slice";

type FormDataType = {
  name: string;
  email: string;
  phone: string;
  password: string;
};
const page = () => {
  const { status } = useSession();

  const dispatch = useAppDispatch();
  const isCartOpen = useAppSelector((state) => state.cart.isCartOpen);
  const isMenuOpen = useAppSelector((state) => state.cart.isMenuOpen);
  const [showPassword, setShowPassword] = useState(false);
  const formRef = useRef<any>();
  const [isLoading, setIsLoading] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const router = useRouter();

  if (status === "authenticated") {
    router.push("/profile");
  }
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleGoogleLogin = () => {
    signIn("google");
  };
  const handleSubmit = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();

    const { email, password } = formData;
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        // setError("Invalid Credentials");
      }
      setIsLoading(false);
      router.replace("/orders");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <Flex
      justifyContent={{ xs: "center" }}
      flexDirection="column"
      color="white"
      mx={{ xs: "12px", md: "40px" }}
      borderRadius="20px"
      // paddingTop={{ xs: "120px", md: "0px" }}
    >
      <Text
        px={1}
        pt="20px"
        mb={6}
        color="#38B6FF"
        fontSize="21px"
        lineHeight="24px"
        fontWeight={500}
        alignSelf="center"
      >
        LOGIN
      </Text>
      <Box p={1}>
        <form ref={formRef}>
          <VStack
            spacing={4}
            fontSize="17px"
            lineHeight="21px"
            fontWeight={500}
            gap="30px"
          >
            <FormControl isRequired>
              <FormLabel color="#38B6FF">Email</FormLabel>
              <Input
                type="string"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel color="#38B6FF">Password</FormLabel>

              <InputGroup>
                <Input type={showPassword ? "text" : "password"} />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    onClick={handleShowClick}
                    variant="unstyled"
                    color="white"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormHelperText textAlign="right" color="white">
                <Link href="/">forgot password?</Link>
              </FormHelperText>
            </FormControl>
            <Button
              mx="40px"
              mb="20px"
              onClick={handleSubmit}
              colorScheme="blue"
              isLoading={isLoading}
              loadingText="Confirming"
              w="100%"
            >
              Login
            </Button>
          </VStack>
        </form>
      </Box>
      <Text textAlign="center" mb="20px">
        Or continue with
      </Text>
      <Flex justifyContent="center" gap="20px">
        <Button
          leftIcon={
            <SocialIcon
              network="google"
              style={{
                height: "20px",
                width: "20px",
                cursor: "pointer",
              }}
            />
          }
          onClick={handleGoogleLogin}
          colorScheme="white"
          variant="outline"
          isLoading={isLoading}
          loadingText="Confirming"
        >
          Google
        </Button>
        {/* <Button
          leftIcon={
            <SocialIcon
              network="facebook"
              style={{
                height: "20px",
                width: "20px",
                cursor: "pointer",
              }}
            />
          }
          onClick={handleGoogleLogin}
          colorScheme="white"
          variant="outline"
          isLoading={isLoading}
          loadingText="Confirming"
        >
          Facebook
        </Button> */}
      </Flex>
      <Text mt="20px" textAlign="center">
        Dont have an account yet?{" "}
        <Link href="/sign-up" color="#38B6FF">
          Sign up
        </Link>
      </Text>
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
    </Flex>
  );
};

export default page;
