import { Container } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import NovelsGrid from "../components/Novel/NovelsGrid";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>toshokan</title>
      </Head>

      <Container my="16" maxW="5xl">
        <NovelsGrid />
      </Container>
    </>
  );
};

export default Home;
