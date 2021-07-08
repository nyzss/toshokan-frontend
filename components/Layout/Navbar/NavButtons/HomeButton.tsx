import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { AiFillHome } from "react-icons/ai";
import { ButtonProps } from "../../../../utils/types";

const HomeButton: React.FC<ButtonProps> = ({ size }) => {
  const { t } = useTranslation();
  return (
    <>
      <Link href="/" passHref>
        <Button variant="ghost" leftIcon={<AiFillHome />} size={size}>
          {t("home")}
        </Button>
      </Link>
    </>
  );
};

export default HomeButton;
