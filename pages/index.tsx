import { Button, Input, Text } from "@chakra-ui/react";
import Head from "next/head";
import { languages } from "../utils/i18n";

import { Lang } from "../utils/types";

export default function Home() {
  return (
    <div>
      <Head>
        <title>toshokan</title>
      </Head>
      <Input
        placeholder="username"
        // value={username}
        // onChange={(e) => setUsername(e.target.value)}
      />
      {/* <Text>{username}</Text> */}
      {languages.map((lang: Lang) => (
        <Button key={lang.code} onClick={() => {}}>
          {lang.name}
        </Button>
      ))}
    </div>
  );
}
