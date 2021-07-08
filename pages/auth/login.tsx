import Head from "next/head";
import { LoginCard } from "../../components/Authentification/LoginCard";

const Login: React.FC = () => {
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
