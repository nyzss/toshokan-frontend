import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { IoLibrary } from "react-icons/io5";
import { ButtonProps } from "utils/types/components";

const LibraryButton: React.FC<ButtonProps> = ({ size }) => {
  const { t } = useTranslation();

  return (
    <>
      <Link href="/" passHref>
        <Button variant="ghost" leftIcon={<IoLibrary />} size={size}>
          {t("library")}
        </Button>
      </Link>
    </>
  );
};

export default LibraryButton;
