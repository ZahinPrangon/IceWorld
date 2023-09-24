/* eslint-disable no-console */
/* eslint-disable react/no-children-prop */
/* eslint-disable react-hooks/rules-of-hooks */

"use client";

import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
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

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClearForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      password: "",
    });
  };

  const handleSignUp = async () => {
    setIsLoading(true);
    const payload = {
      ...formData,
    };
    if (
      !payload.name ||
      !payload.email ||
      !payload.phone ||
      !payload.password
    ) {
      setIsLoading(false);
      return;
    }

    const apiEndpoint = "/api/register";
    const userExistApiEndpoint = "/api/user-exists";
    try {
      const resUserAlreadyExists = await fetch(userExistApiEndpoint, {
        method: "POST",
        body: JSON.stringify({ email: payload.email, phone: payload.phone }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { user } = await resUserAlreadyExists.json();
      if (user) {
        console.log("User already exists");
        setIsLoading(false);
        return;
      }
      const res = await fetch(apiEndpoint, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 201) {
        const data = await res.json();
        console.log(data);
        // localStorage.setItem("token", data.token);
        handleClearForm();
        setIsLoading(false);
        router.push("/login");
      } else {
        console.log("User registration failed");
      }
    } catch (error) {
      console.log("Error during registration", error);
    }
    // fetch(apiEndpoint, {
    //   method: "POST",
    //   body: JSON.stringify(payload),
    // })
    //   .then((res) => res.json())
    //   .then((response) => {
    //     // setOrderConfirmed(true);
    //     // dispatch(clearCart());
    //     console.log(response);
    //   })
    //   .catch((_err) => {
    //     // setError(true);
    //     // setOrderConfirmed(false);
    //   })
    //   .finally(() => {
    //     // setIsLoading(false);
    //     setIsLoading(false);
    //   });
  };

  return (
    <Flex
      // justifyContent={{ xs: "center" }}
      flexDirection="column"
      color="white"
      mx={{ xs: "12px", md: "40px" }}
      borderRadius="20px"
      minH="100vh"
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
        SIGN UP
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
              <FormLabel color="#38B6FF">Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel color="#38B6FF">Mobile Number</FormLabel>
              <Input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel color="#38B6FF">Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel color="#38B6FF">Password</FormLabel>

              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
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
            </FormControl>
            <Button
              mx="40px"
              mb="20px"
              onClick={handleSignUp}
              colorScheme="blue"
              isLoading={isLoading}
              loadingText="Confirming"
              w="100%"
            >
              Sign Up
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
          // mx="40px"
          // mb="20px"
          onClick={handleSignUp}
          colorScheme="white"
          variant="outline"
          // isLoading={isLoading}
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
          // mx="40px"
          // mb="20px"
          onClick={handleSignUp}
          colorScheme="white"
          variant="outline"
          // isLoading={isLoading}
          loadingText="Confirming"
        >
          Facebook
        </Button> */}
      </Flex>
      <Text mt="20px" textAlign="center">
        Have an account?{" "}
        <Link href="/login" color="#38B6FF">
          Login
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
