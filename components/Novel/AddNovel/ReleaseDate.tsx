import {
  FormControl,
  FormErrorMessage,
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
import { NovelProps } from "utils/types/novel";

const ReleaseDate: React.FC<NovelProps> = ({ register, errors }) => {
  return (
    <>
      <FormControl isInvalid={errors.releaseYear ? true : false}>
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
        <FormErrorMessage>{errors.releaseYear?.message}</FormErrorMessage>
        <FormHelperText>
          {
            "The year when the Novel was released. If unsure just put the first volume/chapter's release date or leave blank."
          }
        </FormHelperText>
      </FormControl>
    </>
  );
};

export default ReleaseDate;
