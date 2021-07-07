import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { IoLibrary } from "react-icons/io5";

export interface LibraryButtonProps {
  size: string;
}

const LibraryButton: React.FC<LibraryButtonProps> = ({ size }) => {
  return (
    <>
      <Link href="/" passHref>
        <Button variant="ghost" leftIcon={<IoLibrary />} size={size}>
          Library
        </Button>
      </Link>
    </>
  );
};

export default LibraryButton;
