/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable unused-imports/no-unused-imports */

"use client";

import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import React from "react";

import AddReviewModal from "./AddReviewModal";
// import AddReviewModal from "./AddReviewModal";

const ReviewsContainer = () => {
  // const [rating, setRating] = useState(0);
  const { onClose, isOpen, onOpen } = useDisclosure();

  return (
    <Flex gap="1.25rem" justify="center" flexDir="column" px="30px">
      <Heading>Reviews</Heading>
      {/* <StarRating rating={rating} setRating={setRating} /> */}
      <Button onClick={onOpen}>Write a Review</Button>
      <AddReviewModal onClose={onClose} isOpen={isOpen} />
      {/* <Steps activeStep={activeStep}>
        <Step label="Step 1" description="This is the first step" />
        <Step label="Step 2" description="This is the second step" />
        <Step label="Step 3" description="This is the third step" />
      </Steps> */}
    </Flex>
  );
};

export default ReviewsContainer;
