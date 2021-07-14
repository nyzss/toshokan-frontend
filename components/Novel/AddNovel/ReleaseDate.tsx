import {
  FormControl,
  FormHelperText,
  FormLabel,
  Icon,
  Input,
} from "@chakra-ui/react";
import { BiCalendarAlt } from "react-icons/bi";
import { NovelProps } from "../../../utils/types/novel";

const ReleaseDate: React.FC<NovelProps> = ({ register, errors }) => {
  return (
    <>
      <FormControl>
        <FormLabel>
          Release Year <Icon color="red.300" as={BiCalendarAlt} />
        </FormLabel>
        <Input type="number" {...register("releaseYear")} max="2030" />
        <FormHelperText>
          {
            "The year when the Novel was released. If unsure just put the first volume/chapter's release date."
          }
        </FormHelperText>
      </FormControl>
    </>
  );
};

export default ReleaseDate;
