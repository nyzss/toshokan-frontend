import {
  FormControl,
  FormHelperText,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import autosize from "react-textarea-autosize";
export interface NovelDescriptionProps {}

const NovelDescription: React.FC<NovelDescriptionProps> = () => {
  return (
    <>
      <FormControl>
        <FormLabel>Description</FormLabel>
        <Textarea
          placeholder="Description"
          transition="height none"
          as={autosize}
          minRows={9}
          maxRows={24}
        />
        <FormHelperText>
          The description or synopsis of the novel.
        </FormHelperText>
      </FormControl>
    </>
  );
};

export default NovelDescription;
