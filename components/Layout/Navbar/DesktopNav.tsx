import {
  Button,
  HStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { ImBook } from "react-icons/im";
import { IoLibrary } from "react-icons/io5";

import NextLink from "next/link";

import { IoIosArrowDown } from "react-icons/io";

const DesktopNav = () => {
  return (
    <>
      <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
        <Button variant="ghost" leftIcon={<AiFillHome />} size="sm">
          Home
        </Button>
        <Popover placement="bottom" isLazy>
          <PopoverTrigger>
            <Button variant="ghost" leftIcon={<ImBook />} size="sm">
              Novels <Icon ml="1" as={IoIosArrowDown} />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverBody shadow="2xl">
              <HStack>
                <Button variant="solid" size="sm">
                  Popular Novels
                </Button>
                <Button variant="solid" size="sm">
                  Recently Updated
                </Button>
              </HStack>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <Button variant="ghost" leftIcon={<IoLibrary />} size="sm">
          Library
        </Button>
      </HStack>
    </>
  );
};

export default DesktopNav;
