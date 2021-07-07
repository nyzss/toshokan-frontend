import { Box, HStack, Image, Text, VisuallyHidden } from "@chakra-ui/react";
import DesktopNav from "../DesktopNav";
import MobileNav from "../MobileNav";

export interface NavLeftPartProps {}

const NavLeftPart: React.FC<NavLeftPartProps> = () => {
  return (
    <HStack display="flex" spacing={3} alignItems="center">
      <MobileNav />
      <Box
        href="/"
        alignItems="center"
        display={{ base: "none", md: "inline-flex" }}
      >
        <Image borderRadius="xl" mr="2" src="/32x.png" alt="logo" />
        <Text>Toshokan</Text>
        <VisuallyHidden>Toshokan</VisuallyHidden>
      </Box>

      <DesktopNav />
    </HStack>
  );
};

export default NavLeftPart;
