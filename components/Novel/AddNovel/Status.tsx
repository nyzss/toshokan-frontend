import {
  FormControl,
  FormHelperText,
  FormLabel,
  Icon,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { IoMdCheckmark } from "react-icons/io";
import { Status as EStatus } from "utils/enums";
export interface StatusProps {}

const Status: React.FC<StatusProps> = () => {
  return (
    <>
      <FormControl>
        <FormLabel>
          Status <Icon color="red.300" as={IoMdCheckmark} />
        </FormLabel>
        <RadioGroup colorScheme="toshokan" defaultValue="Ongoing">
          <Stack direction={["column", "row"]} spacing="24px">
            {EStatus.map((status) => (
              <Radio key={status} value={status}>
                {status}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
        <FormHelperText>
          The status of the novel, if unsure select Ongoing.
        </FormHelperText>
      </FormControl>
    </>
  );
};

export default Status;
