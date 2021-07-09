import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const LoginNavButton: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Link href="/auth/login" passHref>
        <Button variant="outline">{t("login")}</Button>
      </Link>
    </>
  );
};

export default LoginNavButton;
