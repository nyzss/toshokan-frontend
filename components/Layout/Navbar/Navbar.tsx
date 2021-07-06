import {
  useDisclosure,
  useColorModeValue,
  Box,
  HStack,
  VisuallyHidden,
  InputLeftElement,
  InputGroup,
  Avatar,
  Flex,
  Input,
  Text,
  Icon,
  useColorMode,
  Image,
} from "@chakra-ui/react";

import { AiOutlineSearch, AiFillBell } from "react-icons/ai";

import { ImBook } from "react-icons/im";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

import { CgMoon, CgSun } from "react-icons/cg";
import LoginNavButton from "./AuthComponent/LoginNavButton";
import RegisterNavButton from "./AuthComponent/RegisterNavButton";

const Navbar = () => {
  const mobileNav = useDisclosure();

  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <>
      <Box
        bg={useColorModeValue("white", "dark.700")}
        w="full"
        px={{ base: 2, sm: 4 }}
        py="6px"
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack display="flex" spacing={3} alignItems="center">
            <MobileNav />
            <Box
              href="/"
              //   display="flex"
              alignItems="center"
              display={{ base: "none", md: "inline-flex" }}
            >
              {/* <Icon as={ImBook} mx="4" color="red.300" /> */}
              <Image borderRadius="xl" mr="2" src="/32x.png" alt="logo" />
              <Text>Toshokan</Text>
              <VisuallyHidden>Toshokan</VisuallyHidden>
            </Box>

            <DesktopNav />
          </HStack>
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
              <Input
                borderColor="dark.100"
                type="search"
                placeholder="Search..."
              />
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
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
