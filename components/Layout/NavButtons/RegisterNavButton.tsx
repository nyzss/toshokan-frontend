import { Button, useColorModeValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const RegisterNavButton: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Button variant="solid" bgColor={useColorModeValue("red.300", "red.400")}>
        {t("sign-up")}
      </Button>
    </>
  );
};

export default RegisterNavButton;
