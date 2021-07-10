import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { RegisterProps } from "../../../utils/types/register";

const RegisterUsername: React.FC<RegisterProps> = ({ register, errors }) => {
  return (
    <>
      <FormControl isInvalid={errors.username ? true : false}>
        <FormLabel>Username</FormLabel>
        <Input placeholder="Toshokan" {...register("username")} />
        <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
      </FormControl>
    </>
  );
};

export default RegisterUsername;
