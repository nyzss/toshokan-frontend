import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { RegisterProps } from "../../../utils/types/register";

const RegisterPasswordConfirmation: React.FC<RegisterProps> = ({
  register,
  errors,
}) => {
  return (
    <>
      <FormControl isInvalid={errors.passwordConfirmation ? true : false}>
        <FormLabel>Password Confirmation</FormLabel>
        <Input
          placeholder="********"
          type="password"
          {...register("passwordConfirmation")}
        />
        <FormErrorMessage>
          {errors.passwordConfirmation?.message}
        </FormErrorMessage>
      </FormControl>
    </>
  );
};

export default RegisterPasswordConfirmation;
