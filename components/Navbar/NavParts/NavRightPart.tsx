import { Box, HStack, useDisclosure } from "@chakra-ui/react";
import { userStore } from "../../../store/Store";
import LoginNavButton from "../NavButtons/LoginNavButton";
import RegisterNavButton from "../NavButtons/RegisterNavButton";
import AvatarNav from "../NavItems/Avatar";
import DarkMode from "../NavItems/DarkMode";
import SearchBar from "../NavItems/SearchBar";

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

      {/* <NotificationBell /> */}

      {user && <AvatarNav />}

      {!user && (
        <Box display={{ base: "none", md: "inline-flex" }}>
          <HStack spacing="4">
            <LoginNavButton />
            <RegisterNavButton />
          </HStack>
        </Box>
      )}
    </HStack>
  );
};

export default NavRightPart;
