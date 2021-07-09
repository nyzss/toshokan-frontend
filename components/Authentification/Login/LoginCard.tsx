import { Box, Flex, Heading, Image, useColorModeValue } from "@chakra-ui/react";
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
      >
        <Box maxW="md" mx="auto">
          <Image src="/128x.png" borderRadius="lg" alt="logo" mx="auto" />
          <Heading
            mt="4x" // here
            mb="8" // here
            textAlign="center"
            size="xl"
            fontWeight="extrabold"
          >
            {t("login-sign-account")}
          </Heading>
          <Box
            bg={useColorModeValue("white", "gray.700")}
            py="8"
            px={{ base: "8", md: "10" }}
            shadow="base"
          >
            <LoginForm />
          </Box>
        </Box>
      </Flex>
    </>
  );
};
