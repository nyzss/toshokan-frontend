import {
  FormControl,
  FormHelperText,
  FormLabel,
  Icon,
  Input,
} from "@chakra-ui/react";
import { RiBookReadLine } from "react-icons/ri";
export interface NovelTitleProps {}

const NovelTitle: React.FC<NovelTitleProps> = () => {
  return (
    <>
      <FormControl>
        <FormLabel>
          Title <Icon color="red.300" as={RiBookReadLine} />
        </FormLabel>
        <Input placeholder="Title" />
        <FormHelperText>The title of the novel.</FormHelperText>
      </FormControl>
    </>
  );
};

export default NovelTitle;
