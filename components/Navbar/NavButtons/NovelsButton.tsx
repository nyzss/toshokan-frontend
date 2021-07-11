import {
  Button,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { ImBook } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";

const NovelsButton: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <Button
          bgColor={useColorModeValue("red.300", "red.400")}
          leftIcon={<ImBook />}
          size="sm"
        >
          {t("novels")} <Icon ml="1" as={IoIosArrowDown} />
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
  );
};

export default NovelsButton;
