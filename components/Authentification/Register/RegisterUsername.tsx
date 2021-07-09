import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { RegisterProps } from "../../../utils/types/register";

const RegisterUsername: React.FC<RegisterProps> = ({ register, errors }) => {
  return (
    <>
      <FormControl>
        <FormLabel>Username</FormLabel>
        <Input placeholder="Toshokan" {...register("username")} />
        <FormHelperText>{errors.username?.message}</FormHelperText>
      </FormControl>
    </>
  );
};

export default RegisterUsername;
