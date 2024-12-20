
import React from "react";
import { FormControl, FormLabel, Input } from "@mui/joy";

const InputBox = ({ label, placeholder, value, onChange, onBlurHandler, type }) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange} 
        onBlur={onBlurHandler} 
      />
    </FormControl>
  );
};

export default InputBox;
