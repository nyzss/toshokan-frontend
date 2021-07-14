import {
  FormControl,
  FormHelperText,
  FormLabel,
  Icon,
  Input,
} from "@chakra-ui/react";
import { FaUserNinja } from "react-icons/fa";
import { NovelProps } from "../../../utils/types/novel";

const Author: React.FC<NovelProps> = ({ register, errors }) => {
  return (
    <>
      <FormControl mr="4">
        <FormLabel>
          Author <Icon color="red.300" as={FaUserNinja} />
        </FormLabel>
        <Input placeholder="Author" {...register("author")} />
        <FormHelperText>The author of this novel</FormHelperText>
      </FormControl>
    </>
  );
};

export default Author;
