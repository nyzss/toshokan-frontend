import {
  FormControl,
  FormHelperText,
  FormLabel,
  Icon,
  Input,
} from "@chakra-ui/react";
import { BiPaint } from "react-icons/bi";
import { NovelProps } from "../../../utils/types/novel";

const Artist: React.FC<NovelProps> = ({ register, errors }) => {
  return (
    <>
      <FormControl>
        <FormLabel>
          Artist <Icon color="red.300" as={BiPaint} />
        </FormLabel>
        <Input placeholder="Artist" {...register("artist")} />
        <FormHelperText>
          The artist for the cover of this novel. (Leave blank if unknown)
        </FormHelperText>
      </FormControl>
    </>
  );
};

export default Artist;
