import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { IAuthNavButton } from "utils/types/components";

const LoginNavButton: React.FC<IAuthNavButton> = ({ width }) => {
  const { t } = useTranslation();
  return (
    <>
      <Link href="/auth/login" passHref>
        <Button variant="outline" width={width || undefined}>
          {t("login")}
        </Button>
      </Link>
    </>
  );
};

export default LoginNavButton;
