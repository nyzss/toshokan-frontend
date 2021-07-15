import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Icon,
  Input,
} from "@chakra-ui/react";
import { BsImage } from "react-icons/bs";
import { NovelProps } from "../../../utils/types/novel";

const CoverUrl: React.FC<NovelProps> = ({ register, errors }) => {
  return (
    <>
      <FormControl isInvalid={errors.coverUrl ? true : false}>
        <FormLabel>
          Cover URL <Icon color="red.300" as={BsImage} />
        </FormLabel>
        <Input placeholder="Cover url" {...register("coverUrl")} />
        <FormErrorMessage>{errors.coverUrl?.message}</FormErrorMessage>
        <FormHelperText>
          The cover URL for the novel, if none leave blank.
        </FormHelperText>
      </FormControl>
    </>
  );
};

export default CoverUrl;
