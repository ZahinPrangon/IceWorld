/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/no-use-before-define */

"use client";

import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  Stepper,
  StepSeparator,
  StepStatus,
  Text,
  VStack,
} from "@chakra-ui/react";
import { CldUploadWidget } from "next-cloudinary";
import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsCardImage } from "react-icons/bs";
import { MdKeyboardBackspace } from "react-icons/md";

import { useAppSelector } from "@/hooks/redux";
import { updateCur } from "@/store/cart.slice";

type AddReviewModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type StarRatingProps = {
  onChangeView: () => void;
};

const StarRating = (props: StarRatingProps) => {
  const currentReview = useAppSelector((state) => state.review.currentReview);

  const [rating, setRating] = useState(
    currentReview ? currentReview.rating : 0
  );

  const handleStarClick = (starIndex: number) => {
    setRating(starIndex + 1);
    updateCur({
      rating: starIndex + 1,
      message: "",
      imageUrl: "",
    });
    props.onChangeView();
  };

  return (
    <VStack>
      <HStack spacing={1}>
        {[0, 1, 2, 3, 4].map((starIndex) => (
          <IconButton
            key={starIndex}
            aria-label={`Star ${starIndex + 1}`}
            icon={
              starIndex < rating ? (
                <Icon as={AiFillStar} boxSize={5} color="yellow.500" />
              ) : (
                <Icon as={AiOutlineStar} boxSize={5} color="gray.300" />
              )
            }
            onClick={() => handleStarClick(starIndex)}
            _hover={{
              color: "yellow.500", // Star color on hover
            }}
          />
        ))}
      </HStack>
      <Flex
        justifyContent="space-between"
        w="80%"
        fontSize="14px"
        lineHeight="1.5"
      >
        <Text>Dislike it</Text>
        <Text>Love it!</Text>
      </Flex>
    </VStack>
  );
};

const UploadImages = (props: StarRatingProps) => {
  return (
    <Flex justifyContent="center" alignItems="center" flexDir="column">
      <Text fontSize="20px" lineHeight="1.4" mb="6px" fontWeight="bold">
        Show it off
      </Text>
      <Text fontSize="16px" lineHeight="1.5" mb="32px">
        We'd love to see it in action!
      </Text>
      <CldUploadWidget uploadPreset="tuhhojqk">
        {({ open }) => {
          function handleOnClick(e) {
            e.preventDefault();
            open();
          }
          return (
            <Box
              border="1px solid black"
              borderRadius="10px"
              padding="16px"
              maxW="480px"
            >
              <Button
                background="black"
                color="white"
                leftIcon={<BsCardImage />}
                // className="button"
                onClick={handleOnClick}
                px="32px"
                variant="unstyled"
                justifyContent="center"
                display="flex"
              >
                Upload an Image
              </Button>
            </Box>
          );
        }}
      </CldUploadWidget>
      {/* <CldUploadButton
        uploadPreset="tuhhojqk"
        onUpload={(result: CldUploadWidgetResults) => {
          console.log(result);
        }}
      /> */}
    </Flex>
  );
};
const AddReviewModal = (props: AddReviewModalProps) => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const steps = [
    <Box key={Math.random()}>
      <Text fontSize="20px" lineHeight="1.4" fontWeight="normal">
        How would you rate this item?
      </Text>
      <Box mt="48px">
        <StarRating onChangeView={nextStep} />
      </Box>
    </Box>,
    <Box key={Math.random()}>
      <UploadImages onChangeView={nextStep} />
    </Box>,
    <div>Step 3 Content</div>,
  ];

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} isCentered size="full">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {step >= 1 && <MdKeyboardBackspace onClick={prevStep} />}
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDir="column"
        >
          {steps[step]}
        </ModalBody>
        <ModalFooter display="flex" justifyContent="center" alignItems="center">
          <Stepper index={step}>
            {steps.map((x, index) => (
              <Step key={Math.random()}>
                <StepIndicator>
                  <StepStatus
                    complete={<StepIcon />}
                    incomplete={<StepNumber />}
                    active={<StepNumber />}
                  />
                </StepIndicator>
                <StepSeparator />
              </Step>
            ))}
          </Stepper>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddReviewModal;
