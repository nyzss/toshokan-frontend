import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { LoginForm } from "./LoginForm";

export interface LoginProps {}

const LoginCard: React.SFC<LoginProps> = () => {
  return (
    <>
      <Box
        bg={useColorModeValue("gray.50", "inherit")}
        minH="100vh"
        py="12"
        px={{ base: "4", lg: "8" }}
      >
        <Box maxW="md" mx="auto">
          <Image src="/256x.png" borderRadius="lg" alt="logo" mx="auto" />
          <Heading textAlign="center" size="xl" fontWeight="extrabold">
            Sign in to your account
          </Heading>
          <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
            <Text as="span">Don&apos;t have an account?</Text>
          </Text>
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
      </Box>
    </>
  );
};

export default LoginCard;
