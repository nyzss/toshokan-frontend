import {
  Box,
  Button,
  Stack,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { userStore } from "../../../store/Store";
import { LoginAccount } from "../../../utils/api";
import { LoginSchema } from "../../../utils/schema";
import { LoginInputs } from "../../../utils/types/auth";
import AuthError from "../AuthError";
import LoginEmail from "./LoginEmail";
import LoginPassword from "./LoginPassword";

const LoginCard: React.FC = () => {
  const { setUser } = userStore((state) => state);
  const { t } = useTranslation();

  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: {
      errors: { email, password },
    },
  } = useForm<LoginInputs>({
    mode: "onBlur",
    resolver: yupResolver(LoginSchema),
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    setIsLoading(true);
    await LoginAccount(data, setError, toast).then(() => {
      setIsLoading(false);
    });

    await setUser();
  };

  return (
    <>
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing="6">
          <LoginEmail register={register} email={email} />
          <LoginPassword register={register} password={password} />
          <AuthError error={error} />
          <Button
            variant="ghost"
            bgColor={useColorModeValue("red.300", "red.300")}
            type="submit"
            isLoading={isLoading}
          >
            {t("login")}
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default LoginCard;
