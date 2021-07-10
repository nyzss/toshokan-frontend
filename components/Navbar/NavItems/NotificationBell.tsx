 
 import { Text, useColorModeValue, VisuallyHidden } from "@chakra-ui/react";
import { AiFillBell } from "react-icons/ai";
 
const NotificationBell: React.FC = () => {
  return (
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
  );
};
 
export default NotificationBell;