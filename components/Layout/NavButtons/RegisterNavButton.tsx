import { Button, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const RegisterNavButton: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Link href="/auth/register" passHref>
        <Button
          variant="solid"
          bgColor={useColorModeValue("red.300", "red.400")}
        >
          {t("sign-up")}
        </Button>
      </Link>
    </>
  );
};

export default RegisterNavButton;
