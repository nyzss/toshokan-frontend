import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Icon,
  Input,
} from "@chakra-ui/react";
import { BiPaint } from "react-icons/bi";
import { NovelProps } from "utils/types/novel";

const Artist: React.FC<NovelProps> = ({ register, errors }) => {
  return (
    <>
      <FormControl isInvalid={errors.artist ? true : false}>
        <FormLabel>
          Artist <Icon color="red.300" as={BiPaint} />
        </FormLabel>
        <Input placeholder="Artist" {...register("artist")} />
        <FormErrorMessage>{errors.artist?.message}</FormErrorMessage>
        <FormHelperText>
          The artist for the cover of this novel. (Leave blank if unknown)
        </FormHelperText>
      </FormControl>
    </>
  );
};

export default Artist;
