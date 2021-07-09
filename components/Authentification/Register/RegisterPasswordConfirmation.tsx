import {
  FormControl,
  FormHelperText,
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
      <FormControl>
        <FormLabel>Password Confirmation</FormLabel>
        <Input
          placeholder="********"
          type="password"
          {...register("passwordConfirmation")}
        />
        <FormHelperText>{errors.passwordConfirmation?.message}</FormHelperText>
      </FormControl>
    </>
  );
};

export default RegisterPasswordConfirmation;
