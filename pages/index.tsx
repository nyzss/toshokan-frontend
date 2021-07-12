import { Container } from "@chakra-ui/react";
import NovelSearchBar from "components/Novel/Main/NovelSearchBar";
import NovelsGrid from "components/Novel/Main/NovelsGrid";
import Head from "next/head";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>toshokan</title>
      </Head>

      <Container my="16" maxW="5xl">
        <NovelSearchBar />
        <NovelsGrid />
      </Container>
    </>
  );
};

export default Home;
