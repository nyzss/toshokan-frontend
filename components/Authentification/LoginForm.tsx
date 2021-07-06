import { Stack, useColorModeValue } from "@chakra-ui/react";
import EmailInput from "./Fields/EmailInput";
import PasswordInput from "./Fields/PasswordInput";
import SubmitButton from "./Fields/SubmitButton";

export interface LoginFormProps {}

const LoginForm: React.SFC<LoginFormProps> = () => {
  const inputColor = useColorModeValue("gray.100", "gray.600");

  return (
    <>
      <Stack spacing="8">
        <EmailInput inputColor={inputColor} />
        <PasswordInput inputColor={inputColor} />
        <SubmitButton submitText="Sign in" />
      </Stack>
    </>
  );
};

export default LoginForm;
