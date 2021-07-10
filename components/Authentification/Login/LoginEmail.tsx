import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { LoginProps } from "../../../utils/types/auth";

const LoginEmail: React.FC<LoginProps> = ({ register, email }) => {
  return (
    <>
      <FormControl isInvalid={email ? true : false}>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="toshokan@gmail.com"
          type="email"
          {...register("email")}
        />
        <FormErrorMessage>{email?.message}</FormErrorMessage>
      </FormControl>
    </>
  );
};

export default LoginEmail;
