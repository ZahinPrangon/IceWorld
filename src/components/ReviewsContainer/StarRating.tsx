"use client";

/* eslint-disable react/no-array-index-key */
import { Box, HStack, Radio } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

type StarRatingProps = {
  rating: number;
  setRating: (rating: number) => void;
  count?: number;
  size?: number;
};
export default function StarRating({
  rating,
  setRating,
  count,
  size,
}: StarRatingProps) {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <HStack spacing="2px">
      {[...Array(count || 5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <Box
            as="label"
            key={index}
            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
          >
            <Radio
              name="rating"
              onChange={() => setRating(ratingValue)}
              value={ratingValue.toString()}
            />
            <FaStar cursor="pointer" size={size || 20} />
          </Box>
        );
      })}
    </HStack>
  );
}
