import Head from "next/head";
import { LoginCard } from "../../components/Authentification/LoginCard";

export interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
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
