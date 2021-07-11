import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { RegisterProps } from "utils/types/auth";

const RegisterPassword: React.FC<RegisterProps> = ({ register, errors }) => {
  return (
    <>
      <FormControl isInvalid={errors.password ? true : false}>
        <FormLabel>Password</FormLabel>
        <Input
          placeholder="********"
          type="password"
          {...register("password")}
        />
        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
      </FormControl>
    </>
  );
};

export default RegisterPassword;
