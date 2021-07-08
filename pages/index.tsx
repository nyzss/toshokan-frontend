import { Text } from "@chakra-ui/react";
import Head from "next/head";
import { userStore } from "../store/Store";

export default function Home() {
  const { user } = userStore((state) => state);
  return (
    <div>
      <Head>
        <title>toshokan</title>
      </Head>
      <Text>{user && user.username}</Text>
    </div>
  );
}
