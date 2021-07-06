import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";

export interface HomeButtonProps {
  size: string;
}

const HomeButton: React.SFC<HomeButtonProps> = ({ size }) => {
  return (
    <>
      <Link href="/" passHref>
        <Button variant="ghost" leftIcon={<AiFillHome />} size={size}>
          Home
        </Button>
      </Link>
    </>
  );
};

export default HomeButton;
