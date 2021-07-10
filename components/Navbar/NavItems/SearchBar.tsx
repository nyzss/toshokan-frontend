import {
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <InputGroup
      size="sm"
      bgColor={useColorModeValue("gray.200", "dark.800")}
      w={{ base: "none", sm: 80, md: 56, lg: 72 }}
    >
      <InputLeftElement pointerEvents="none">
        <AiOutlineSearch />
      </InputLeftElement>
      <Input borderColor="dark.100" type="search" placeholder={t("search")} />
    </InputGroup>
  );
};

export default SearchBar;
