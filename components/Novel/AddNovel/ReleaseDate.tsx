import {
  FormControl,
  FormHelperText,
  FormLabel,
  Icon,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
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
        <NumberInput allowMouseWheel min={1970} max={2030}>
          <NumberInputField {...register("releaseYear")} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
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
