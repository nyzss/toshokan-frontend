import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import RegisterCard from "../../components/Authentification/Register/RegisterCard";
import { userStore } from "../../store/Store";

const Register: React.FC = () => {
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
        <title>Sign Up - toshokan</title>
      </Head>
      <RegisterCard />
    </>
  );
};

export default Register;
