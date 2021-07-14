import {
  FormControl,
  FormHelperText,
  FormLabel,
  Icon,
  Input,
} from "@chakra-ui/react";
import { RiBookReadLine } from "react-icons/ri";
import { NovelProps } from "utils/types/novel";

const NovelTitle: React.FC<NovelProps> = ({ register, errors }) => {
  return (
    <>
      <FormControl>
        <FormLabel>
          Title <Icon color="red.300" as={RiBookReadLine} />
        </FormLabel>
        <Input placeholder="Title" {...register("title")} />
        <FormHelperText>The title of the novel.</FormHelperText>
      </FormControl>
    </>
  );
};

export default NovelTitle;
