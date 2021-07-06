import { Button } from "@chakra-ui/react";
import Link from "next/link";

export interface LoginNavProps {}

const LoginNavButton: React.SFC<LoginNavProps> = () => {
  return (
    <>
      <Link href="/auth/login" passHref>
        <Button variant="outline">Login</Button>
      </Link>
    </>
  );
};

export default LoginNavButton;
