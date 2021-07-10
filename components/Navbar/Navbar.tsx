import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import NavLeftPart from "./NavParts/NavLeftPart";
import NavRightPart from "./NavParts/NavRightPart";

const Navbar: React.FC = () => {
  return (
    <>
      <Box
        bg={useColorModeValue("white", "dark.700")}
        w="full"
        px={{ base: 2, sm: 4 }}
        py="6px"
        shadow="md"
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          mx={{ base: "0", md: "0", lg: "8", xl: "24" }}
        >
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
