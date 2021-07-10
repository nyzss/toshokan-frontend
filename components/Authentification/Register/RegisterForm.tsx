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
import { RegisterAccount } from "../../../utils/api";
import { RegisterSchema } from "../../../utils/schema";
import { RegisterInputs } from "../../../utils/types/register";
import AuthError from "../Fields/AuthError";
import RegisterEmail from "./RegisterEmail";
import RegisterPassword from "./RegisterPassword";
import RegisterPasswordConfirmation from "./RegisterPasswordConfirmation";
import RegisterUsername from "./RegisterUsername";

const RegisterForm: React.FC = () => {
  const toast = useToast();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { setUser } = userStore((state) => state);

  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>({
    mode: "onBlur",
    resolver: yupResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<RegisterInputs> = async (data) => {
    setIsLoading(true);
    await RegisterAccount(data, setError, toast).then(() => {
      setIsLoading(false);
    });
    await setUser();
  };

  return (
    <>
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing="4">
          <RegisterUsername register={register} errors={errors} />
          <RegisterEmail register={register} errors={errors} />
          <RegisterPassword register={register} errors={errors} />
          <RegisterPasswordConfirmation register={register} errors={errors} />
          <AuthError error={error} />
          <Button
            variant="ghost"
            bgColor={useColorModeValue("red.300", "red.300")}
            type="submit"
            isLoading={isLoading}
          >
            {t("create-an-account")}
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default RegisterForm;
