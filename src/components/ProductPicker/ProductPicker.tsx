/* eslint-disable react/no-unused-prop-types */
import { Box } from "@chakra-ui/react";
import React from "react";

type ProductPickerProps = {
  productName: string;
  productId: string;
  onClick: (index: number) => void;
  selected: boolean;
  index: number;
};
const ProductPicker = (props: ProductPickerProps) => {
  const boxShadow = props.selected
    ? "#38B6FF 0px 0px 0px 2px"
    : "rgb(255, 255, 255) 0px 0px 0px 1px";
  return (
    <Box
      onClick={() => props.onClick(props.index)}
      boxShadow={boxShadow}
      p="7px 15px"
      m="0px 8px 12px 0px"
      letterSpacing="0.05em"
      textTransform="uppercase"
    >
      {props.productName}
    </Box>
  );
};

export default ProductPicker;
