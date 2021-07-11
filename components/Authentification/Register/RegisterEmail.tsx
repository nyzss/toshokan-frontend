import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { RegisterProps } from "utils/types/auth";

const RegisterEmail: React.FC<RegisterProps> = ({ register, errors }) => {
  return (
    <>
      <FormControl isInvalid={errors.email ? true : false}>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="toshokan@gmail.com"
          type="email"
          {...register("email")}
        />
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>
    </>
  );
};

export default RegisterEmail;
