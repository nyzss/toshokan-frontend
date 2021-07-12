import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
export interface NovelTitleProps {}

const NovelTitle: React.FC<NovelTitleProps> = () => {
  return (
    <>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input placeholder="Title" />
        <FormHelperText>The title of the novel.</FormHelperText>
      </FormControl>
    </>
  );
};

export default NovelTitle;
