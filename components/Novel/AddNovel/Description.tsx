import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Icon,
  Textarea,
} from "@chakra-ui/react";
import { GrTextAlignLeft } from "react-icons/gr";
import autosize from "react-textarea-autosize";
import { NovelProps } from "../../../utils/types/novel";

const NovelDescription: React.FC<NovelProps> = ({ register, errors }) => {
  return (
    <>
      <FormControl isInvalid={errors.description ? true : false}>
        <FormLabel>
          Description <Icon color="red.300" as={GrTextAlignLeft} />
        </FormLabel>
        <Textarea
          placeholder="Description"
          transition="height none"
          as={autosize}
          minRows={9}
          maxRows={24}
          {...register("description")}
        />
        <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
        <FormHelperText>
          The description or synopsis of the novel.
        </FormHelperText>
      </FormControl>
    </>
  );
};

export default NovelDescription;
