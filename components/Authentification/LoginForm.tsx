import { Stack, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { TEmail, TPassword } from "../../utils/types";

import EmailInput from "./Fields/EmailInput";
import PasswordInput from "./Fields/PasswordInput";
import SubmitButton from "./Fields/SubmitButton";
import { useMutation } from "react-query";

export interface LoginFormProps {}

import { AxiosError } from "axios";
import { LoginAccount } from "../../utils/api";

export const LoginForm: React.FC<LoginFormProps> = () => {
  const inputColor = useColorModeValue("gray.100", "gray.600");

  const [email, setEmail] = useState<TEmail>("");
  const [password, setPassword] = useState<TPassword>("");

  const { mutateAsync: mutateLogin, isError } = useMutation(LoginAccount);

  const handleLogin = async () => {
    const data = await mutateLogin({ email, password });

    console.log(data);
  };

  return (
    <>
      <Stack spacing="8">
        <EmailInput
          email={email}
          setEmail={setEmail}
          inputColor={inputColor}
          isError={isError}
        />
        <PasswordInput
          password={password}
          setPassword={setPassword}
          inputColor={inputColor}
          isError={isError}
        />
        <SubmitButton handleLogin={handleLogin} submitText="Sign in" />
      </Stack>
    </>
  );
};
