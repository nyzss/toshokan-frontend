import { Stack, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { TEmail, TPassword } from "../../utils/types";

import EmailInput from "./Fields/EmailInput";
import PasswordInput from "./Fields/PasswordInput";
import SubmitButton from "./Fields/SubmitButton";

export interface LoginFormProps {}

import { LoginAccount } from "../../utils/api";

export const LoginForm: React.FC<LoginFormProps> = () => {
  const inputColor = useColorModeValue("gray.100", "gray.600");

  const [email, setEmail] = useState<TEmail>("");
  const [password, setPassword] = useState<TPassword>("");

  const handleLogin = async () => {
    const newUser = {
      email,
      password,
    };
    LoginAccount(newUser);
  };

  return (
    <>
      <Stack spacing="8">
        <EmailInput email={email} setEmail={setEmail} inputColor={inputColor} />
        <PasswordInput
          password={password}
          setPassword={setPassword}
          inputColor={inputColor}
        />
        <SubmitButton handleLogin={handleLogin} submitText="Sign in" />
      </Stack>
    </>
  );
};
