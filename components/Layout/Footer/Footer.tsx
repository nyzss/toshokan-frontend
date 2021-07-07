import { Box, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import ButtonLinks from "./ButtonLinks";
import LanguageList from "./LanguageList";

const Footer = () => (
  <Box
    py={{ base: "2", md: "4", lg: "6" }}
    px={{ base: "4", md: "24", lg: "48" }}
    bgColor={useColorModeValue("gray.100", "gray.600")}
    bottom="0"
    width="100%"
  >
    <Stack>
      <Stack direction="row" spacing="4" align="center" justify="space-between">
        <Image src="/64x.png" borderRadius="xl" alt="logo" />
        <ButtonLinks />
      </Stack>
      <Text fontSize="sm" alignSelf={{ base: "center", sm: "center" }}>
        ≧◡≦ | Toshokan - About
      </Text>
    </Stack>
    <LanguageList />
  </Box>
);

export default Footer;
