import { Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { IoLibrary } from "react-icons/io5";

import Link from "next/link";

export interface LibraryButtonProps {
  size: string;
}

const LibraryButton: React.FC<LibraryButtonProps> = ({ size }) => {
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
