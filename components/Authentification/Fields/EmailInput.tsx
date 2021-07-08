import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Dispatch, useState, SetStateAction } from "react";
import { EmailInputProps } from "../../../utils/types";

const EmailInput: React.FC<EmailInputProps> = ({
  inputColor,
  email,
  setEmail,
}) => {
  return (
    <FormControl>
      <FormLabel>Email</FormLabel>
      <Input
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        bgColor={inputColor}
        isInvalid
        errorBorderColor="red.500"
      />
    </FormControl>
  );
};

export default EmailInput;
