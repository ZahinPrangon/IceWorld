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
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Get the selected value from the event
    const selectedValue = e.target.value;

    // Call the onHandleChange function with the selected value
    onHandleChange(selectedValue);
  };

  return (
    <Select placeholder="District" onChange={onChange}>
      {options.map((option: any) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
};
