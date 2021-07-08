import { HStack, useDisclosure } from "@chakra-ui/react";
import { userStore } from "../../../../store/Store";
import LoginNavButton from "../NavButtons/LoginNavButton";
import RegisterNavButton from "../NavButtons/RegisterNavButton";
import AvatarNav from "./Avatar";
import DarkMode from "./DarkMode";
import NotificationBell from "./NotificationBell";
import SearchBar from "./SearchBar";

const NavRightPart: React.FC = () => {
  const mobileNav = useDisclosure();

  const { user } = userStore();

  return (
    <HStack
      spacing={3}
      display={mobileNav.isOpen ? "none" : "flex"}
      alignItems="center"
    >
      <SearchBar />

      <DarkMode />

      <NotificationBell />

      {user && <AvatarNav />}

      {!user && (
        <>
          <LoginNavButton />
          <RegisterNavButton />
        </>
      )}
    </HStack>
  );
};

export default NavRightPart;
