/* eslint-disable import/no-extraneous-dependencies */
import { Select } from "@chakra-ui/react";

type SingleSelectDropdownProps = {
  options: any;
  onHandleChange: (option: any) => void;
};

export const SingleSelectDropdown = ({
  options,
  onHandleChange,
}: SingleSelectDropdownProps) => {
  return (
    <Select placeholder="District">
      {options.map((option: any) => (
        <option
          key={option.value}
          value={option.value}
          onChange={onHandleChange}
        >
          {option.label}
        </option>
      ))}
    </Select>
  );
};
