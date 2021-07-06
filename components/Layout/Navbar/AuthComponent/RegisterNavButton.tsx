import { Button, useColorModeValue } from "@chakra-ui/react";

export interface RegisterNavProps {}

const RegisterNavButton: React.SFC<RegisterNavProps> = () => {
  return (
    <>
      <Button variant="solid" bgColor={useColorModeValue("red.300", "red.400")}>
        Sign up
      </Button>
    </>
  );
};

export default RegisterNavButton;
