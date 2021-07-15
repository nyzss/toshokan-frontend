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
import { NovelProps } from "../../../utils/types/novel";

const Chapter: React.FC<NovelProps> = ({ register, errors }) => {
  return (
    <>
      <FormControl mr="4">
        <FormLabel>
          Chapters <Icon color="red.300" as={BiBook} />
        </FormLabel>

        <NumberInput allowMouseWheel max={20000}>
          <NumberInputField {...register("chapter")} />
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
