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
import { BiBook } from "react-icons/bi";

export interface ChapterProps {}

const Chapter: React.FC<ChapterProps> = () => {
  return (
    <>
      <FormControl>
        <FormLabel>
          Chapters <Icon color="red.300" as={BiBook} />
        </FormLabel>
        <NumberInput max={20000}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormHelperText>
          The number of total chapter the novel currently. If unsure leave blank
          or 0.
        </FormHelperText>
      </FormControl>
    </>
  );
};

export default Chapter;
