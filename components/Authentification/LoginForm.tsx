import { Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { userStore } from "../../store/Store";
import { LoginAccount } from "../../utils/api";
import { TEmail, TPassword } from "../../utils/types";
import EmailInput from "./Fields/EmailInput";
import PasswordInput from "./Fields/PasswordInput";
import SubmitButton from "./Fields/SubmitButton";

export const LoginForm: React.FC = () => {
  const { setUser } = userStore((state) => state);

  const inputColor = useColorModeValue("gray.100", "gray.600");

  const [email, setEmail] = useState<TEmail>("");
  const [password, setPassword] = useState<TPassword>("");

  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    const user = await LoginAccount({
      email,
      password,
      setIsError,
      setError,
    });
    setUser();
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
        {isError && (
          <Text
            onClick={() => setIsError(false)}
            color="red.500"
            m="0"
            p="0"
            fontSize="sm"
          >
            {error}
          </Text>
        )}
        <SubmitButton handleLogin={handleLogin} submitText="Sign in" />
      </Stack>
    </>
  );
};
