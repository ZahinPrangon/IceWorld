/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/no-use-before-define */

"use client";

import {
  Box,
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
import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MdKeyboardBackspace } from "react-icons/md";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { updateCurrentReview } from "@/store/reviews.slice";

type AddReviewModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type StarRatingProps = {
  onChangeView: () => void;
};

const StarRating = (props: StarRatingProps) => {
  const currentReview = useAppSelector((state) => state.review.currentReview);
  const dispatch = useAppDispatch();
  const [rating, setRating] = useState(
    currentReview ? currentReview.rating : 0
  );

  const handleStarClick = (starIndex: number) => {
    setRating(starIndex + 1);
    dispatch(
      updateCurrentReview({
        rating: starIndex + 1,
        message: "",
        imageUrl: "",
      })
    );
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

// const UploadImages = () => {
//   const [imageIds, setImageIds] = useState<string[]>([]);

//   const handleUpload = (result: any) => {
//     setImageIds([...imageIds, result.info.public_id]);
//   };
//   return (
//     <Flex justifyContent="center" alignItems="center" flexDir="column">
//       <Text fontSize="20px" lineHeight="1.4" mb="6px" fontWeight="bold">
//         Show it off
//       </Text>
//       <Text fontSize="16px" lineHeight="1.5" mb="32px">
//         We'd love to see it in action!
//       </Text>
//       {imageIds.length === 0 && (
//         <CldUploadWidget
//           uploadPreset="tuhhojqk"
//           onUpload={(result) => handleUpload(result)}
//         >
//           {({ open }) => {
//             function handleOnClick(e: any) {
//               e.preventDefault();
//               open();
//             }
//             return (
//               <Box
//                 border="1px solid black"
//                 borderRadius="10px"
//                 padding="16px"
//                 maxW="480px"
//               >
//                 <Button
//                   background="black"
//                   color="white"
//                   leftIcon={<BsCardImage />}
//                   onClick={handleOnClick}
//                   px="32px"
//                   variant="unstyled"
//                   justifyContent="center"
//                   display="flex"
//                 >
//                   Upload an Image
//                 </Button>
//               </Box>
//             );
//           }}
//         </CldUploadWidget>
//       )}
//       {imageIds.length > 0 && (
//         <Grid templateColumns="1fr 1fr 1fr" p="16px">
//           {["ymfyo53ohmbtihwsdqwg"].map((id) => (
//             <GridItem key={Math.random()}>
//               <CldImage
//                 key={id}
//                 width="100"
//                 height="100"
//                 alt="Review Ice Image"
//                 src={id}
//                 sizes="100vw"
//               />
//             </GridItem>
//           ))}
//         </Grid>
//       )}
//       {/*
//       {imageIds && (
//         <CldImage
//           width="150"
//           height="300"
//           alt="Review Ice Image"
//           src={imageId}
//           sizes="100vw"
//         />
//       )} */}
//     </Flex>
//   );
// };

// const MessageSection = () => {
//   return (
//     <Flex justifyContent="center" alignItems="center" flexDir="column">
//       <Text fontSize="20px" lineHeight="1.4">
//         Tell us more!
//       </Text>
//       <Input placeholder="large size" size="lg" />
//     </Flex>
//   );
// };

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
      {/* <UploadImages onChangeView={nextStep} /> */}
    </Box>,
    // <div>Step 3 Content</div>,
  ];

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} isCentered size="full">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Flex justifyContent="space-between">
            {step >= 1 && <MdKeyboardBackspace onClick={prevStep} />}
            {step === 0 && <ModalCloseButton />}
            {step === 1 && <Text onClick={nextStep}>Skip</Text>}
          </Flex>

          {/* {step >= 1 ? <Text>Skip</Text> <ModalCloseButton />} */}
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
            {steps.map((_x, _index) => (
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
