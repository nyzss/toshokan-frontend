import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { LoginProps } from "../../../utils/types/auth";

const LoginPassword: React.FC<LoginProps> = ({ register, password }) => {
  return (
    <>
      <FormControl isInvalid={password ? true : false}>
        <FormLabel>Password</FormLabel>
        <Input
          placeholder="********"
          type="password"
          {...register("password")}
        />
        <FormErrorMessage>{password?.message}</FormErrorMessage>
      </FormControl>
    </>
  );
};

export default LoginPassword;
