import {
  FormControl,
  FormHelperText,
  FormLabel,
  Icon,
  Input,
} from "@chakra-ui/react";
import { BsImage } from "react-icons/bs";
export interface CoverUrlProps {}

const CoverUrl: React.FC<CoverUrlProps> = () => {
  return (
    <>
      <FormControl>
        <FormLabel>
          Cover URL <Icon color="red.300" as={BsImage} />
        </FormLabel>
        <Input placeholder="Cover url" />
        <FormHelperText>
          The cover URL for the novel, if none leave blank.
        </FormHelperText>
      </FormControl>
    </>
  );
};

export default CoverUrl;
