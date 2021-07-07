import { Button } from "@chakra-ui/react";
import Head from "next/head";
import { languages } from "../utils/i18n";

import i18n from "i18next";

export default function Home() {
  return (
    <div>
      <Head>
        <title>toshokan</title>
      </Head>
      {languages.map((lang) => (
        <Button key={lang.code} onClick={() => i18n.changeLanguage(lang.code)}>
          {" "}
          {`${lang.code} - ${lang.name}`}{" "}
        </Button>
      ))}
    </div>
  );
}
