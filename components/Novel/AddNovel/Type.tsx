import {
  FormControl,
  FormHelperText,
  FormLabel,
  Icon,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { GiBroadsword } from "react-icons/gi";
export interface TypeProps {}

const Type: React.FC<TypeProps> = () => {
  return (
    <>
      <FormControl>
        <FormLabel>
          Novel Type <Icon color="red.300" as={GiBroadsword} />
        </FormLabel>
        <RadioGroup colorScheme="toshokan" defaultValue="Light Novel">
          <Stack direction={["column", "row"]} spacing="24px">
            <Radio value="Light Novel">Light Novel</Radio>
            <Radio value="Web Novel">Web Novel</Radio>
            <Radio value="Published Novel">Published Novel</Radio>
          </Stack>
        </RadioGroup>
        <FormHelperText>
          The type of the novel, if unsure select Web Novel.
        </FormHelperText>
      </FormControl>
    </>
  );
};

export default Type;
