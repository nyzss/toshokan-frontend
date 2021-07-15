import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Icon,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { IoMdCheckmark } from "react-icons/io";
import { Status as EStatus } from "utils/enums";
import { NovelProps } from "../../../utils/types/novel";

const Status: React.FC<NovelProps> = ({ register, errors }) => {
  return (
    <>
      <FormControl isInvalid={errors.status ? true : false}>
        <FormLabel>
          Status <Icon color="red.300" as={IoMdCheckmark} />
        </FormLabel>
        <RadioGroup colorScheme="toshokan" defaultValue="Ongoing">
          <Stack direction={["column", "row"]} spacing="24px">
            {EStatus.map((status) => (
              <Radio key={status} {...register("status")} value={status}>
                {status}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
        <FormErrorMessage>{errors.status?.message}</FormErrorMessage>
        <FormHelperText>
          The status of the novel, if unsure select Ongoing.
        </FormHelperText>
      </FormControl>
    </>
  );
};

export default Status;
