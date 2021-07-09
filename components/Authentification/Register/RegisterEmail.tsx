import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { RegisterProps } from "../../../utils/types/register";

const RegisterEmail: React.FC<RegisterProps> = ({ register, errors }) => {
  return (
    <>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="toshokan@gmail.com"
          type="email"
          {...register("email")}
        />
        <FormHelperText>{errors.email?.message}</FormHelperText>
      </FormControl>
    </>
  );
};

export default RegisterEmail;
