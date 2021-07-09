import Head from "next/head";
import RegisterCard from "../../components/Authentification/Register/RegisterCard";

const Register: React.FC = () => {
  return (
    <>
      <Head>
        <title>Sign Up - toshokan</title>
      </Head>
      <RegisterCard />
    </>
  );
};

export default Register;
