import {
  Text,
  useColorMode,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { CgMoon, CgSun } from "react-icons/cg";

const DarkMode: React.FC = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
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
  );
};

export default DarkMode;
