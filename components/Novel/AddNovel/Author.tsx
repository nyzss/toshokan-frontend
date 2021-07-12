import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
export interface AuthorProps {}

const Author: React.FC<AuthorProps> = () => {
  return (
    <>
      <FormControl>
        <FormLabel>Author</FormLabel>
        <Input placeholder="Author" />
        <FormHelperText>The author of this novel</FormHelperText>
      </FormControl>
    </>
  );
};

export default Author;
