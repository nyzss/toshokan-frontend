import {
  FormControl,
  FormHelperText,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
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
          w={{ base: 10 / 11, sm: "md", md: 3 / 4 }} //this is weird af lol
        >
          <InputLeftElement pointerEvents="none">
            <Icon
              as={AiOutlineSearch}
              color={useColorModeValue("red.400", "red.300")}
            />
          </InputLeftElement>
          <Input borderRadius="none" type="search" placeholder={t("search")} />
        </InputGroup>
        <FormHelperText>
          {/* If you ever come across a bug please report it! */}
          Not finding the novel you wanted?{" "}
          <Link href="/novels/add" passHref>
            <Text as="span" cursor="pointer" color="red.300">
              Add it!
            </Text>
          </Link>
        </FormHelperText>
      </FormControl>
    </>
  );
};

export default NovelSearchBar;
