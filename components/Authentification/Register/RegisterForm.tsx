import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { userStore } from "../../../store/Store";
import { RegisterAccount } from "../../../utils/api";
import { RegisterSchema } from "../../../utils/schema";
import { RegisterInputs } from "../../../utils/types/register";
import RegisterEmail from "./RegisterEmail";
import RegisterPassword from "./RegisterPassword";
import RegisterPasswordConfirmation from "./RegisterPasswordConfirmation";
import RegisterUsername from "./RegisterUsername";

const RegisterForm: React.FC = () => {
  const [error, setError] = useState("");

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
    await RegisterAccount(data, setError).then(() => {
      setUser();
    });
  };

  return (
    <>
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing="4">
          <RegisterUsername register={register} errors={errors} />
          <RegisterEmail register={register} errors={errors} />
          <RegisterPassword register={register} errors={errors} />
          <RegisterPasswordConfirmation register={register} errors={errors} />
          {error && (
            <FormControl isInvalid>
              <FormErrorMessage>{error}</FormErrorMessage>
            </FormControl>
          )}
          <Button
            variant="ghost"
            bgColor={useColorModeValue("red.300", "red.300")}
            type="submit"
          >
            {t("create-an-account")}
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default RegisterForm;
