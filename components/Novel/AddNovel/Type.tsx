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
import { Types } from "utils/enums";
import { NovelProps } from "../../../utils/types/novel";

const Type: React.FC<NovelProps> = ({ register, errors }) => {
  return (
    <>
      <FormControl>
        <FormLabel>
          Novel Type <Icon color="red.300" as={GiBroadsword} />
        </FormLabel>
        <RadioGroup
          colorScheme="toshokan"
          defaultValue="Light Novel"
          {...register("type")}
        >
          <Stack direction={["column", "row"]} spacing="24px">
            {Types.map((types) => (
              <Radio key={types} value={types}>
                {types}
              </Radio>
            ))}
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
