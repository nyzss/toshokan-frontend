import {
  FormControl,
  FormHelperText,
  FormLabel,
  Icon,
  Input,
} from "@chakra-ui/react";
import { FaUserNinja } from "react-icons/fa";
export interface AuthorProps {}

const Author: React.FC<AuthorProps> = () => {
  return (
    <>
      <FormControl>
        <FormLabel>
          Author <Icon color="red.300" as={FaUserNinja} />
        </FormLabel>
        <Input placeholder="Author" />
        <FormHelperText>The author of this novel</FormHelperText>
      </FormControl>
    </>
  );
};

export default Author;
