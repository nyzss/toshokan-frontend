import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { AiOutlineSearch } from "react-icons/ai";

export interface SearchbarProps {}

const NovelSearchBar: React.FC<SearchbarProps> = () => {
  const { t } = useTranslation();

  return (
    <>
      <FormControl m="6" mb="8">
        <FormLabel fontSize="xl">Search for a Novel</FormLabel>
        <InputGroup
          size="lg"
          bgColor={useColorModeValue("gray.100", "dark.800")}
          w={{ base: "80", sm: 2 / 3, md: 3 / 4, lg: 3 / 4 }}
        >
          <InputLeftElement pointerEvents="none">
            <AiOutlineSearch />
          </InputLeftElement>
          <Input
            borderRadius="none"
            borderColor="dark.100"
            type="search"
            placeholder={t("search")}
          />
        </InputGroup>
        <FormHelperText>
          If you ever come across a bug please report it!
        </FormHelperText>
      </FormControl>
    </>
  );
};

export default NovelSearchBar;
