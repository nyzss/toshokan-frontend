import {
  Avatar,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  VisuallyHidden,
} from "@chakra-ui/react";
import { AiOutlineSearch, AiFillBell } from "react-icons/ai";

import { CgMoon, CgSun } from "react-icons/cg";
import LoginNavButton from "../NavButtons/LoginNavButton";
import RegisterNavButton from "../NavButtons/RegisterNavButton";

const NavRightPart: React.FC = () => {
  const mobileNav = useDisclosure();

  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack
      spacing={3}
      display={mobileNav.isOpen ? "none" : "flex"}
      alignItems="center"
    >
      <InputGroup
        size="sm"
        bgColor={useColorModeValue("gray.200", "dark.800")}
        w={{ base: "none", sm: 80, md: 56, lg: 72 }}
      >
        <InputLeftElement pointerEvents="none">
          <AiOutlineSearch />
        </InputLeftElement>
        <Input borderColor="dark.100" type="search" placeholder="Search..." />
      </InputGroup>

      <Text
        p={3}
        color={useColorModeValue("gray.800", "inherit")}
        rounded="md"
        _hover={{ color: useColorModeValue("gray.800", "gray.400") }}
        cursor="pointer"
        onClick={toggleColorMode}
        size="md"
      >
        {colorMode == "dark" ? <CgMoon /> : <CgSun />}
        <VisuallyHidden>Dark Mode</VisuallyHidden>
      </Text>

      <Text
        p={3}
        color={useColorModeValue("gray.800", "inherit")}
        rounded="sm"
        _hover={{ color: useColorModeValue("gray.800", "gray.400") }}
        cursor="pointer"
      >
        <AiFillBell />
        <VisuallyHidden>Notifications</VisuallyHidden>
      </Text>

      <Avatar
        size="sm"
        name="username here"
        src="https://i.imgur.com/f5NMjGn.jpg"
        cursor="pointer"
      />
      <LoginNavButton />
      <RegisterNavButton />
    </HStack>
  );
};

export default NavRightPart;
