
import React from "react";
import { FormControl, FormLabel, Input } from "@mui/joy";

const InputBox = ({ label, placeholder,name, value, onChange, type }) => {
 
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange} 
       
      />
    </FormControl>
  );
};

export default InputBox;
