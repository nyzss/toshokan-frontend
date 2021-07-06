import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";

export interface PasswordInputProps {
  inputColor: string;
}

const PasswordInput: React.SFC<PasswordInputProps> = ({ inputColor }) => {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  return (
    <FormControl mt={4}>
      <FormLabel>Password</FormLabel>
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={show ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          bgColor={inputColor}
          //   borderRadius="sm"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};

export default PasswordInput;
