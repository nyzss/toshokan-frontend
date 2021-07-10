import { Box, Flex, Heading, Image, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import LoginForm from "../../components/Authentification/Login/LoginForm";
import { userStore } from "../../store/Store";

const Login: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const { user } = userStore((state) => state);

  useEffect(() => {
    if (user) router.push("/");
  }, [router, user]);
  return (
    <>
      <Head>
        <title>Login - toshokan</title>
      </Head>
      <Flex
        bg={useColorModeValue("gray.50", "inherit")}
        py="12"
        px={{ base: "4", lg: "8" }}
      >
        <Box maxW="md" w="md" mx="auto">
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

export default Login;
