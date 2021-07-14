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
export interface ReleaseDateProps {}

const ReleaseDate: React.FC<ReleaseDateProps> = () => {
  return (
    <>
      <FormControl>
        <FormLabel>
          Release Year <Icon color="red.300" as={BiCalendarAlt} />
        </FormLabel>
        <NumberInput max={2030}>
          <NumberInputField />
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
