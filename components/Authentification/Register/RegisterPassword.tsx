import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { RegisterProps } from "../../../utils/types/register";

const RegisterPassword: React.FC<RegisterProps> = ({ register, errors }) => {
  return (
    <>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          placeholder="********"
          type="password"
          {...register("password")}
        />
        <FormHelperText>{errors.password?.message}</FormHelperText>
      </FormControl>
    </>
  );
};

export default RegisterPassword;
