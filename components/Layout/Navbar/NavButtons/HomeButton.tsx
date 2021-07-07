import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { AiFillHome } from "react-icons/ai";

export interface HomeButtonProps {
  size: string;
}

const HomeButton: React.FC<HomeButtonProps> = ({ size }) => {
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
