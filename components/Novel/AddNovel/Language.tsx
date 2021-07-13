import {
  FormControl,
  FormHelperText,
  FormLabel,
  Icon,
  Select,
} from "@chakra-ui/react";
import { IoLanguage } from "react-icons/io5";
export interface LanguageProps {}

const Language: React.FC<LanguageProps> = () => {
  return (
    <>
      <FormControl>
        <FormLabel>
          {"Select the novel's language"}{" "}
          <Icon color="red.300" as={IoLanguage} />
        </FormLabel>
        <Select placeholder="">
          <option>English</option>
          <option>Japanese</option>
        </Select>

        <FormHelperText>{"The novel's original language"}</FormHelperText>
      </FormControl>
    </>
  );
};

export default Language;
