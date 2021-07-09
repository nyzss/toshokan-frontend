import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { LoginCard } from "../../components/Authentification/Login/LoginCard";
import { userStore } from "../../store/Store";

const Login: React.FC = () => {
  const router = useRouter();

  const { user } = userStore();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);
  return (
    <>
      <Head>
        <title>Login - toshokan</title>
      </Head>
      <LoginCard />
    </>
  );
};

export default Login;
