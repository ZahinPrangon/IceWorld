/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/no-array-index-key */
import { Box, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";

type CardProps = {
  imageUrl: string;
  title: string;
  // description: string;
  subTitle: string;
  price: string;
  discountedPrice: string;
  discount: string;
  features: string[];
  href: string;
  onClick: (href: string) => void;
};

const Card = (props: CardProps) => {
  return (
    <Box
      // boxShadow="0px 10px 100px 25px  #05B4F9"
      border="1px solid white"
      borderRadius="20px"
      padding="1.25rem"
      backgroundColor="black"
      onClick={() => props.onClick(props.href)}
    >
      <Image
        src={props.imageUrl}
        alt={props.title}
        width="300px"
        height="300px"
      />
      <Box pb="1.25rem" borderBottom="1px solid white">
        <Text
          letterSpacing="0.1em"
          fontWeight="900"
          textTransform="uppercase"
          fontSize="20px"
        >
          {props.title}
        </Text>
        <Text fontSize="20px" fontWeight="700">
          {props.price}
        </Text>
      </Box>
      <UnorderedList pt="1.25rem">
        {props.features.map((feature, idx) => {
          return <ListItem key={idx}>{feature}</ListItem>;
        })}
      </UnorderedList>
    </Box>
  );
};

export default Card;
