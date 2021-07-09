import { HStack } from "@chakra-ui/react";
import React from "react";
import HomeButton from "./NavButtons/HomeButton";
import LibraryButton from "./NavButtons/LibraryButton";
import NovelsButton from "./NavButtons/NovelsButton";

const DesktopNav = () => {
  return (
    <>
      <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
        <HomeButton size="sm" />
        <NovelsButton />
        <LibraryButton size="sm" />
      </HStack>
    </>
  );
};

export default DesktopNav;
