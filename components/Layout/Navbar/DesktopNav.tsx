import {
  Button,
  HStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Icon,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { ImBook } from "react-icons/im";

import { IoIosArrowDown } from "react-icons/io";
import HomeButton from "./NavButtons/HomeButton";
import LibraryButton from "./NavButtons/LibraryButton";

const DesktopNav = () => {
  return (
    <>
      <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
        <HomeButton size="sm" />
        <Popover placement="bottom" isLazy>
          <PopoverTrigger>
            <Button
              bgColor={useColorModeValue("red.300", "red.400")}
              leftIcon={<ImBook />}
              size="sm"
            >
              Novels <Icon ml="1" as={IoIosArrowDown} />
            </Button>
          </PopoverTrigger>
          <PopoverContent w="auto">
            <PopoverArrow />
            <PopoverBody shadow="2xl">
              <VStack>
                <Button w="full" variant="ghost" size="sm">
                  Popular Novels
                </Button>
                <Button variant="ghost" size="sm">
                  Recently Updated
                </Button>
              </VStack>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <LibraryButton size="sm" />
      </HStack>
    </>
  );
};

export default DesktopNav;
