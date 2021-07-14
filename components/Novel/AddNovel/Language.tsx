import {
  FormControl,
  FormHelperText,
  FormLabel,
  Icon,
  Select,
} from "@chakra-ui/react";
import { IoLanguage } from "react-icons/io5";
import { Languages } from "utils/enums";
import { NovelProps } from "../../../utils/types/novel";

const Language: React.FC<NovelProps> = ({ register, errors }) => {
  return (
    <>
      <FormControl>
        <FormLabel>
          {"Select the novel's language"}{" "}
          <Icon color="red.300" as={IoLanguage} />
        </FormLabel>
        <Select placeholder="" {...register("language")}>
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
