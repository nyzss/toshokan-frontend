import {
  IconButton,
  useColorModeValue,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import MobileDrawer from "./Mobile/MobileDrawer";

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
        <MobileDrawer isOpen={isOpen} onClose={onClose} />
      </Box>
    </>
  );
};

export default MobileNav;
