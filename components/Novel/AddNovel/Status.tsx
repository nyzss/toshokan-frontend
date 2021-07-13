import {
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Icon,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { IoMdCheckmark } from "react-icons/io";
export interface StatusProps {}

const Status: React.FC<StatusProps> = () => {
  return (
    <>
      <FormControl>
        <FormLabel>
          Status <Icon color="red.300" as={IoMdCheckmark} />
        </FormLabel>
        <RadioGroup colorScheme="toshokan" defaultValue="Ongoing">
          <HStack spacing="24px">
            <Radio value="Ongoing">Ongoing</Radio>
            <Radio value="Completed">Completed</Radio>
            <Radio value="Hiatus">Hiatus</Radio>
          </HStack>
        </RadioGroup>
        <FormHelperText>
          The status of the novel, if unsure select Ongoing.
        </FormHelperText>
      </FormControl>
    </>
  );
};

export default Status;
