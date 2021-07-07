import { useColorModeValue, Box, Flex } from "@chakra-ui/react";

import NavLeftPart from "./NavItems/NavLeftPart";
import NavRightPart from "./NavItems/NavRightPart";

const Navbar = () => {
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
          {/* with the logo/name and navitems */}
          <NavLeftPart />
          {/* with the auth/avatar, search bar and icons  */}
          <NavRightPart />
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
