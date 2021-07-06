import {
  IconButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Link,
  useColorModeValue,
  VStack,
  Icon,
  Box,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { AiFillHome, AiOutlineGithub, AiOutlineMenu } from "react-icons/ai";
import { ImBook } from "react-icons/im";
import { IoLibrary } from "react-icons/io5";

const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box display={{ base: "inline-flex", md: "none" }}>
        <IconButton
          display={{ base: "flex", md: "none" }}
          aria-label="Open menu"
          fontSize="20px"
          color={useColorModeValue("gray.800", "inherit")}
          variant="ghost"
          icon={<AiOutlineMenu />}
          onClick={onOpen}
        />
        <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Toshokan</DrawerHeader>

            <DrawerBody>
              <VStack>
                <Button variant="ghost" leftIcon={<AiFillHome />}>
                  Dashboard
                </Button>
                <Button
                  w="full"
                  variant="solid"
                  bgColor="red.300"
                  leftIcon={<ImBook />}
                >
                  Novels
                </Button>
                <Button w="full" variant="ghost" leftIcon={<IoLibrary />}>
                  Library
                </Button>
              </VStack>
            </DrawerBody>

            <DrawerFooter p="2.5" borderTopWidth="2px">
              <Link href="https://github.com/nyzss" isExternal>
                <Icon fontSize="3xl" as={AiOutlineGithub} />
              </Link>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
};

export default MobileNav;
