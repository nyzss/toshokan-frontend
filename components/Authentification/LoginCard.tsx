import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import LoginForm from "./LoginForm";

export interface LoginProps {}

const LoginCard: React.SFC<LoginProps> = () => {
  return (
    <>
      <Flex
        bg={useColorModeValue("gray.50", "inherit")}
        minH="100vh"
        py="12"
        px={{ base: "4", lg: "8" }}
        borderRadius="none"
      >
        <Box maxW="md" mx="auto">
          <Image src="/128x.png" borderRadius="lg" alt="logo" mx="auto" />
          <Heading
            mt="4x"
            mb="8"
            textAlign="center"
            size="xl"
            fontWeight="extrabold"
          >
            Sign in to your account
          </Heading>
          <Box
            bg={useColorModeValue("white", "gray.700")}
            py="8"
            px={{ base: "4", md: "10" }}
            shadow="base"
            rounded={{ sm: "lg" }}
          >
            <LoginForm />
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default LoginCard;
