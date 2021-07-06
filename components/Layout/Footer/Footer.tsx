import {
  Box,
  ButtonGroup,
  IconButton,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiOutlineGithub } from "react-icons/ai";
import { IoLogoDiscord } from "react-icons/io5";

const Footer = () => (
  <Box
    as="footer"
    py={{ base: "2", md: "4", lg: "8" }}
    px={{ base: "4", md: "24", lg: "48" }}
    bgColor={useColorModeValue("gray.100", "gray.600")}
    // position="absolute"
    bottom="0"
    width="100%"
  >
    <Stack>
      <Stack direction="row" spacing="4" align="center" justify="space-between">
        <Image src="/64x.png" alt="logo" />
        <ButtonGroup variant="ghost" color="gray.600">
          <IconButton
            as="a"
            href="https://github.com/nyzss"
            target="_blank"
            aria-label="GitHub"
            icon={<AiOutlineGithub fontSize="20px" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Discord"
            icon={<IoLogoDiscord fontSize="20px" />}
          />
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" alignSelf={{ base: "center", sm: "start" }}>
        ≧◡≦ | Toshokan - About
      </Text>
    </Stack>
  </Box>
);

export default Footer;
