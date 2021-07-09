import { Box, Button, Stack, useColorModeValue } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { RegisterSchema } from "../../../utils/schema";
import { RegisterInputs } from "../../../utils/types/register";
import RegisterEmail from "./RegisterEmail";
import RegisterPassword from "./RegisterPassword";
import RegisterPasswordConfirmation from "./RegisterPasswordConfirmation";
import RegisterUsername from "./RegisterUsername";

const RegisterForm: React.FC = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>({
    mode: "onBlur",
    resolver: yupResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<RegisterInputs> = (data) => console.log(data);

  return (
    <>
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing="4">
          <RegisterUsername register={register} errors={errors} />
          <RegisterEmail register={register} errors={errors} />
          <RegisterPassword register={register} errors={errors} />
          <RegisterPasswordConfirmation register={register} errors={errors} />
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
