import { Button, Input, Text } from "@chakra-ui/react";
import Head from "next/head";
import { languages } from "../utils/i18n";

import i18n from "i18next";
import { Lang } from "../utils/types";
import { useAtom } from "jotai";
import { usernameAtom } from "../jotai/atoms";

export default function Home() {
  const [username, setUsername] = useAtom(usernameAtom);

  const handleLangChange = (lang: Lang) => {
    i18n.changeLanguage(lang.code);
  };

  return (
    <div>
      <Head>
        <title>toshokan</title>
      </Head>
      <Input
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Text>{username}</Text>
      {languages.map((lang: Lang) => (
        <Button key={lang.code} onClick={() => handleLangChange(lang)}>
          {`${lang.code} - ${lang.name}`}
        </Button>
      ))}
    </div>
  );
}
