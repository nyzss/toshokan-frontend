import {
  FormControl,
  FormHelperText,
  FormLabel,
  Icon,
  Select,
} from "@chakra-ui/react";
import { IoLanguage } from "react-icons/io5";
import { Languages } from "utils/enums";
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
          {Languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </Select>

        <FormHelperText>{"The novel's original language"}</FormHelperText>
      </FormControl>
    </>
  );
};

export default Language;
