import { Box, HStack, Image, Text, VisuallyHidden } from "@chakra-ui/react";
import Link from "next/link";
import DesktopNav from "../DesktopNav";
import MobileNav from "../MobileNav";

const NavLeftPart: React.FC = () => {
  return (
    <HStack display="flex" spacing={3} alignItems="center">
      <MobileNav />
      <Link href="/" passHref>
        <Box
          cursor="pointer"
          href="/"
          alignItems="center"
          display={{ base: "none", md: "inline-flex" }}
        >
          <Image borderRadius="xl" mr="2" src="/32x.png" alt="logo" />
          <Text>Toshokan</Text>
          <VisuallyHidden>Toshokan</VisuallyHidden>
        </Box>
      </Link>

      <DesktopNav />
    </HStack>
  );
};

export default NavLeftPart;
