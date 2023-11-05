/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */

"use client";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";

import NavSidebar from "@/components/NavSidebar/NavSidebar";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { onCloseCart, onCloseMenu } from "@/store/cart.slice";

import * as pixel from "../../../lib/fpixel";

const page = () => {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    message: "",
  });
  const formRef = useRef<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState(false);
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isCartOpen = useAppSelector((state) => state.cart.isCartOpen);
  const isMenuOpen = useAppSelector((state) => state.cart.isMenuOpen);
  const handleClearForm = () => {
    setFormData({
      name: "",
      mobile: "",
      message: "",
    });
  };

  function sendEmail(data: any) {
    setIsLoading(true);

    const payload = {
      ...data,
    };
    const apiEndpoint = "/api/contact";
    fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((_response) => {
        setMessageSuccess(true);
        handleClearForm();
      })
      .catch((_err) => {
        setError(true);
        setMessageSuccess(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const handleSubmit = () => {
    if (!formData.name || !formData.mobile || !formData.message) {
      return;
    }
    sendEmail(formData);
    pixel.event("Contact");
  };
  return (
    <Flex
      flexDirection="column"
      color="white"
      mx={{ xs: "12px", md: "40px" }}
      borderRadius="20px"
      height="100vh"
    >
      <Text
        px={1}
        pt="20px"
        mb={1}
        fontSize="30px"
        lineHeight="24px"
        fontWeight={500}
        alignSelf="center"
      >
        Contact us
      </Text>
      <Text fontSize="14px" lineHeight="18px" textAlign="center" py="20px">
        Whatever you need, we’re here to help. Just get in touch, we’ll try our
        best to respond within 24 hours. You can email us directly at{" "}
        <span
          style={{
            fontWeight: "bold",
            color: "#38B6FF",
          }}
        >
          icelagbe@gmail.com
        </span>{" "}
        24/7, call us directly at{" "}
        <span
          style={{
            fontWeight: "bold",
            color: "#38B6FF",
          }}
        >
          +880171140240
        </span>{" "}
        or enter your enquiry below and we'll be happy to assist you:
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
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="number"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
            </FormControl>
            <Button
              mx="40px"
              mb="20px"
              onClick={handleSubmit}
              colorScheme="blue"
              isLoading={isLoading}
              loadingText="Sending"
            >
              Send
            </Button>
          </VStack>
        </form>
      </Box>
      {error && (
        <Text color="red" textAlign="center">
          Something went wrong. Please try again.
        </Text>
      )}
      {messageSuccess && (
        <Text color="#38B6FF" textAlign="center">
          Thanks for contacting us. We'll get back to you as soon as possible.
        </Text>
      )}
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
