import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";

export interface EmailInputProps {
  inputColor: string;
}

const EmailInput: React.SFC<EmailInputProps> = ({ inputColor }) => {
  const [email, setEmail] = useState("");

  return (
    <FormControl>
      <FormLabel>Email</FormLabel>
      <Input
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        bgColor={inputColor}
        // borderRadius="sm"
      />
    </FormControl>
  );
};

export default EmailInput;
