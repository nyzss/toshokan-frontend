import { Box, Flex, Heading, Image, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { LoginForm } from "./LoginForm";

export const LoginCard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Flex
        bg={useColorModeValue("gray.50", "inherit")}
        py="24"
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
            {t("login-sign-account")}
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
